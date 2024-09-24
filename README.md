# evolution
Portal de visualización y consulta de base datos ESRI en API de java para ESRI

Geovisor - Puntos GNSS
Este proyecto es un geovisor diseñado para visualizar puntos GNSS en un mapa, permitiendo a los usuarios filtrar los puntos por rangos de fechas y horas específicas. Está construido utilizando la API de ArcGIS para JavaScript, Flatpickr para la selección de fechas, y estilos personalizados en CSS. El sistema interactúa con un servicio de datos de puntos GNSS para consultar los datos según los filtros seleccionados por el usuario.

Características
* Visualización de puntos GNSS: Los puntos se muestran en un mapa interactivo utilizando la API de ArcGIS.
* Filtrado por fecha y hora: Los usuarios pueden filtrar los puntos GNSS por un rango de fechas y horas usando un selector de fechas en formato de 24 horas.
* Interfaz de usuario intuitiva: El diseño incluye una barra lateral para seleccionar las fechas y un mapa que ocupa la mayor parte de la pantalla para la visualización clara de los puntos.
* Pop-ups de puntos GNSS: Al hacer clic en un punto, aparece un pop-up mostrando detalles del punto, como el ID GNSS y la fecha de recepción.
  
Tecnologías Utilizadas
* HTML5: Estructura del proyecto.
* JavaScript (Vanilla): Lógica de frontend.
* API de ArcGIS para JavaScript (v4.27): Para cargar el mapa y gestionar los puntos GNSS.
* Flatpickr: Para la selección de fechas y horas en formato de 24 horas.
* CSS3: Para el diseño y estilos de la interfaz de usuario.

  Instalación
    Clonar el repositorio:
    git clone https://github.com/dheiby/evolution
    cd geovisor-gnss
  Instalar dependencias:

 Este proyecto no requiere la instalación de dependencias adicionales, ya que utiliza bibliotecas cargadas desde CDNs.

  Ejecutar localmente:
  Puedes simplemente abrir el archivo index.html en tu navegador para ver el proyecto en funcionamiento.
  Configuración
  * El proyecto está diseñado para interactuar con un servicio de datos GNSS. Asegúrate de que el servicio esté disponible y correctamente configurado en la URL proporcionada en el archivo main.js.

  * En el archivo main.js, se especifica la URL del servicio de puntos GNSS:
    
                                                                            var urlService = "https://proyectos-seynekun.co/server/rest/services/SeguridadFisica/SF_PuntosGNSS/FeatureServer/0";
     Si deseas utilizar un servicio diferente, actualiza esta URL en tu archivo JavaScript.

    Uso
1. Seleccionar las fechas y horas:

  En la barra lateral, ingresa la "Fecha y hora inicial" y "Fecha y hora final" utilizando los selectores de fecha y hora.
  Las fechas y horas seleccionadas se mostrarán en el formato YYYY-MM-DD HH:mm de 24 horas.
  Filtrar los puntos GNSS.

2. Haz clic en el botón Consultar.
  El mapa se actualizará para mostrar solo los puntos GNSS que coincidan con el rango de fechas y horas seleccionadas.
  Interacción con el mapa:

3. Puedes hacer zoom y desplazarte por el mapa.
  Al hacer clic en un punto GNSS, se abrirá un pop-up con detalles sobre ese punto.


Herramientas Utilizadas

1. HTML, CSS y JavaScript
      El proyecto utiliza las tecnologías web estándar (HTML, CSS, y JavaScript) para construir la interfaz de usuario y gestionar la interacción del usuario con el geovisor.
      HTML: Estructura del sitio web.
      CSS: Estilización del sitio, disposición de elementos como el mapa, los campos de fecha/hora y el modal.
      JavaScript: Manejo de eventos, interacción con la API REST y la visualización del mapa y resultados en tiempo real.

2. ArcGIS API for JavaScript
      La API de ArcGIS para JavaScript se utiliza para integrar el mapa y mostrar los puntos de GPS en función de las coordenadas recibidas de una consulta a un servicio de FeatureServer.
      Versión: 4.27
      Documentación: ArcGIS API for JavaScript
   
3.  ArcGIS FeatureServer
      El FeatureServer es la fuente de datos desde la cual se realiza la consulta de los puntos GNSS, filtrados por fecha y hora.
      El servicio utilizado es:
            https://proyectos-seynekun.co/server/rest/services/SeguridadFisica/SF_PuntosGNSS/FeatureServer/0/query

4. URLSearchParams
      URLSearchParams es una interfaz de JavaScript que facilita la creación de parámetros de consulta (query strings) para la solicitud a la API REST.
      Documentación: URLSearchParams - MDN Web Docs   https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
   
5. Fetch API
      Se utiliza la Fetch API para hacer solicitudes HTTP asíncronas al servicio de FeatureServer y obtener los puntos GNSS.
      Documentación: Fetch API - MDN Web Docs     https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   
6. JavaScript Date Object
      El objeto Date de JavaScript se utiliza para formatear y transformar las fechas seleccionadas por el usuario en el formato necesario para la consulta.
      Documentación: Date - MDN Web Docs         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
