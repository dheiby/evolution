require(["esri/Map", "esri/views/MapView", "esri/Graphic"], function(Map, MapView, Graphic) {
    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: "map",
        map: map,
        center: [-74.08175, 4.60971], // Coordenadas de Bogotá
        zoom: 12
    });

    document.getElementById('consultarBtn').addEventListener('click', function() {
        const fechaHoraInicio = document.getElementById('fechaInicio').value;
        const fechaHoraFin = document.getElementById('fechaFin').value;

        if (!fechaHoraInicio || !fechaHoraFin) {
            alert("Por favor, selecciona ambas fechas.");
            return;
        }

        const fechaInicio = new Date(fechaHoraInicio).toISOString().slice(0, 19).replace('T', ' ');
        const fechaFin = new Date(fechaHoraFin).toISOString().slice(0, 19).replace('T', ' ');

        const url = "https://proyectos-seynekun.co/server/rest/services/SeguridadFisica/SF_PuntosGNSS/FeatureServer/0/query";
        const whereClause = `FechaRecepcion BETWEEN DATE '${fechaInicio}' AND DATE '${fechaFin}'`;

        const params = new URLSearchParams({
            where: whereClause,
            outFields: "*",
            f: "json"
        });

        function agruparPuntosPorIDGPS(data) {
            const agrupados = {};
            data.features.forEach(feature => {
                const idGPS = feature.attributes.ESN;
                if (agrupados[idGPS]) {
                    agrupados[idGPS]++;
                } else {
                    agrupados[idGPS] = 1;
                }
            });
            return agrupados;
        }

        function mostrarResultadosEnModal(agrupados) {
            const modal = document.getElementById('myModal');
            const tabla = document.getElementById('tablaResultados');
            tabla.innerHTML = "<tr><th>ID GPS</th><th>Número de Puntos</th></tr>";

            for (const idGPS in agrupados) {
                const numPuntos = agrupados[idGPS];
                tabla.innerHTML += `<tr><td>${idGPS}</td><td>${numPuntos}</td></tr>`;
            }

            modal.style.display = "block";
        }

        fetch(`${url}?${params}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Datos recibidos: ", data);

                if (data.features && data.features.length > 0) {
                    const agrupados = agruparPuntosPorIDGPS(data);
                    mostrarResultadosEnModal(agrupados);
                    mostrarPuntosEnMapa(data.features);  // Mostrar puntos en el mapa
                } else {
                    alert("No se encontraron resultados para esta fecha y rango de horas.");
                }
            })
            .catch(error => {
                console.error("Error en la consulta:", error);
                alert(`Ocurrió un error al realizar la consulta: ${error.message}`);
            });
    });

    document.getElementById('cerrarModal').addEventListener('click', function() {
        document.getElementById('myModal').style.display = "none";
    });

    function mostrarPuntosEnMapa(features) {
        const idsGPS = features.map(f => f.attributes.ESN); // Obtenemos los ID GPS (ESN) de las características
        view.graphics.removeAll();

        features.forEach((feature) => {
            const point = {
                type: "point",
                longitude: feature.geometry.x,
                latitude: feature.geometry.y
            };
            
            const symbol = {
                type: "simple-marker",
                color: [226, 119, 40],
                outline: {
                    color: [255, 255, 255],
                    width: 2
                }
            };
            
            const graphic = new Graphic({
                geometry: point,
                symbol: symbol,
                attributes: feature.attributes,
                popupTemplate: {
                    title: `Punto GNSS - ${feature.attributes.ESN}`,
                    content: `Fecha de Recepción: {FechaRecepcion}`
                }
            });

            if (idsGPS.includes(feature.attributes.ESN)) {
                view.graphics.add(graphic);
            }
        });
    }
});
