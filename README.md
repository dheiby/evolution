# evolution
Portal de visualización y consulta de base datos ESRI en API de java para ESRI

Geovisor - Puntos GNSS
Este proyecto es un geovisor diseñado para visualizar puntos GNSS en un mapa, permitiendo a los usuarios filtrar los puntos por rangos de fechas y horas específicas. Está construido utilizando la API de ArcGIS para JavaScript, Flatpickr para la selección de fechas, y estilos personalizados en CSS. El sistema interactúa con un servicio de datos de puntos GNSS para consultar los datos según los filtros seleccionados por el usuario.

* Tabla de Contenidos
* Características
* Tecnologías Utilizadas
* Instalación
* Configuración
* Uso

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
    git clone https://github.com/tu_usuario/geovisor-gnss.git
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
  Filtrar los puntos GNSS:

2. Haz clic en el botón Consultar.
  El mapa se actualizará para mostrar solo los puntos GNSS que coincidan con el rango de fechas y horas seleccionadas.
  Interacción con el mapa:

3. Puedes hacer zoom y desplazarte por el mapa.
  Al hacer clic en un punto GNSS, se abrirá un pop-up con detalles sobre ese punto.
