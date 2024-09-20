/* General styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
}

.container {
    display: flex;
    flex: 1;
    height: calc(100vh - 50px);
}

/* Sidebar izquierda */
.sidebar {
    width: 300px;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.sidebar label {
    margin-bottom: 10px;
    font-weight: bold;
}

.sidebar input {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}

/* Botón consultar */
#consultarBtn {
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
}

#consultarBtn:hover {
    background-color: darkgreen;
}

/* Mapa */
.map {
    flex: 1;
    height: 100%;
    width: 100%;
    border-left: 2px solid #ddd;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        padding: 10px;
    }
    
    .map {
        height: 50vh;
    }

    header {
        font-size: 18px;
    }
}
