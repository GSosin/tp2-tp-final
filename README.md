# Proyecto Final TP2 Gonzalo Sosin


## Instalación

1. Clonación de este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/proyecto-crud-node-sequelize.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd proyecto-crud-node-sequelize
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración de la Base de Datos

1. Configura tu base de datos en el archivo `config/database.js`.
2. Asegúrate de tener una base de datos MySQL creada con el nombre especificado en la configuración.
3. Ejecuta las migraciones para crear las tablas necesarias:

   ```bash
   npx sequelize-cli db:migrate
   ```

## Uso

### Ejecución

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

El servidor estará disponible en http://localhost:3000 por defecto.

### Pruebas con Postman

1. Abre Postman.
2. Importa la colección de solicitudes de Postman proporcionada en el directorio `tests`.
3. Ejecuta las solicitudes para probar las diferentes rutas del CRUD.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature-nueva-caracteristica`.
3. Haz tus cambios y realiza un commit: `git commit -m 'Añade una nueva característica'`.
4. Sube tus cambios: `git push origin feature-nueva-caracteristica`.
5. Abre un pull request.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).