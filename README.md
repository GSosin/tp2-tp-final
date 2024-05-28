# Proyecto Final TP2 Gonzalo Sosin


## Instalación

1. Clonación de este repositorio:

   ```bash
   git clone https://github.com/GSosin/tp2-tp-final.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tp2-tp-final
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración de las variables de entorno

1. Agregá un archivo con el nombre ".env" en la raiz del proyecto.
2. Copiá el formato archivo ".env.example" y replicalo en el archivo ".env".
3. Rellenalo con los datos de tu Gestor de base de datos.

### Ejecución

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
    npm run dev
```

El servidor estará disponible en http://localhost:3000 por defecto.

### Pruebas con Postman

1. Abre Postman.
2. Importa la colección de solicitudes de Postman proporcionada en el directorio `src/tests/tests.json`.
3. Si tienes un puerto diferente a "3000" cambialo en las solicitudes antes de probarlas.