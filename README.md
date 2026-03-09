Task Management System - API & Dashboard
Este proyecto implementa una solución integral para la gestión de tareas basada en una arquitectura de servicios desacoplados. Consta de una API RESTful desarrollada en Node.js y una interfaz de usuario avanzada construida con tecnologías modernas de frontend.

Especificaciones Técnicas
Backend (Lógica y Persistencia)
Arquitectura REST: Endpoints estructurados para operaciones CRUD (Create, Read, Update, Delete).
Persistencia de Datos: Sistema de almacenamiento basado en archivos JSON (database.json), garantizando la integridad de la información ante reinicios del servicio.
Validación de Esquemas: Implementación de lógica de validación para asegurar que los datos ingresados cumplan con los requisitos mínimos de longitud y formato.
Gestión de Estados: Asignación dinámica de IDs únicos y marcas de tiempo para cada registro.

Frontend (Interfaz y UX)
Dashboard Estadístico: Panel de control con indicadores métricos sobre el estado global de las tareas.
Visualización de Progreso: Algoritmo dinámico que calcula y renderiza el porcentaje de cumplimiento mediante una barra de progreso.
Diseño Responsivo: Interfaz adaptativa optimizada para diferentes resoluciones mediante Tailwind CSS.
Monitoreo de Conectividad: Sistema de detección de estado que verifica la disponibilidad del servidor en tiempo real (Health Check).

Guía de Instalación y Despliegue
Siga estos pasos para replicar el entorno de ejecución en cualquier estación de trabajo:

1. Requisitos del Sistema
Es necesario contar con las siguientes herramientas instaladas:

Node.js (Versión LTS recomendada)

Git (Para la gestión de versiones)

2. Clonación del Repositorio
Ejecute el siguiente comando en su terminal:

Bash
git clone https://github.com/danielBrurgos/TaskApi.git
cd TaskApi
3. Instalación de Dependencias
Descargue los módulos necesarios (Express y CORS) definidos en el archivo de configuración:

Bash
npm install
4. Ejecución del Proyecto
Para poner en marcha el sistema, siga este orden:

Iniciar el Servidor:

Bash
node server.js
El sistema confirmará la ejecución en http://localhost:3000/tasks.

Lanzamiento del Cliente:
Ejecute el archivo index.html en un navegador web compatible.

Tecnologías Utilizadas
Entorno de ejecución: Node.js

Framework de servidor: Express.js

Procesamiento de Estilos: Tailwind CSS

Librerías de Soporte: SweetAlert2 (Gestión de diálogos), Animate.css (Transiciones de interfaz).

 https://danielbrurgos.github.io/TaskApi/ aunquew se tiene que poner comando en terminalk para que corra.
 

Desarrollado por: Daniel Burgos
Ingeniería en Sistemas - Universidad de Sonora
<img width="1919" height="1107" alt="image" src="https://github.com/user-attachments/assets/0a516463-21af-472b-9ac9-bea230de2d5c" />
