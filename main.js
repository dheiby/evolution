document.addEventListener("DOMContentLoaded", function() {
    var startDateInput = document.getElementById("startDate");
    var endDateInput = document.getElementById("endDate");
    var consultarBtn = document.getElementById("consultarBtn");

    // Inicializar Flatpickr con formato de 24 horas y validación
    var startPicker = flatpickr(startDateInput, {
        enableTime: true,
        dateFormat: "Y-m-d H:i",  // Formato de fecha/hora compatible
        time_24hr: true
    });

    var endPicker = flatpickr(endDateInput, {
        enableTime: true,
        dateFormat: "Y-m-d H:i",  // Formato de fecha/hora compatible
        time_24hr: true
    });

    // Función para convertir fecha a timestamp
    function toTimestamp(dateStr) {
        var date = new Date(dateStr);
        return date.getTime(); // Retorna el valor de la fecha en milisegundos
    }

    // Al hacer clic en el botón de consulta
    consultarBtn.addEventListener("click", function() {
        var startDate = new Date(startDateInput.value);
        var endDate = new Date(endDateInput.value);

        // Convertir fechas a timestamp
        var startDateTimestamp = toTimestamp(startDate);
        var endDateTimestamp = toTimestamp(endDate);

        // Validar que la fecha inicial sea menor que la fecha final
        if (startDate >= endDate) {
            alert("La fecha y hora inicial debe ser menor que la fecha y hora final.");
            return;
        }

        // Imprimir en consola las fechas seleccionadas
        console.log("Fecha inicial (timestamp):", startDateTimestamp);
        console.log("Fecha final (timestamp):", endDateTimestamp);

        // Aplicar el filtro de fechas a la capa utilizando timestamps
        var definitionExpression = `FechaRecepcion >= ${startDateTimestamp} AND FechaRecepcion <= ${endDateTimestamp}`;
        featureLayer.definitionExpression = definitionExpression;

        // Verificar que se aplique la expresión
        console.log("Aplicando filtro con la definición:", definitionExpression);

        // Refrescar la capa para aplicar el filtro
        featureLayer.refresh();
    });

    // Cargar el mapa
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
    ], function (Map, MapView, FeatureLayer) {

        // Crear el mapa base
        var map = new Map({
            basemap: "topo-vector"
        });

        // Crear la vista del mapa
        var view = new MapView({
            container: "viewDiv", // ID del contenedor en el HTML
            map: map,
            center: [-74.08175, 4.60971], // Coordenadas iniciales (Bogotá)
            zoom: 12
        });

        // URL del servicio
        var urlService = "https://proyectos-seynekun.co/server/rest/services/SeguridadFisica/SF_PuntosGNSS/FeatureServer/0";

        // Definir la capa de entidades
        featureLayer = new FeatureLayer({
            url: urlService,
            outFields: ["*"], // Obtener todos los campos
            popupTemplate: {
                title: "Punto GNSS - {ESN}",
                content: "Fecha de recepción: {FechaRecepcion}"
            }
        });

        // Añadir la capa de entidades al mapa
        map.add(featureLayer);
    });
});
