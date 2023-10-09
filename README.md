# TSOA & OpenAPI Generator Demo Backend

This demo project was built for teaching Capgemini colleagues how to use TSOA and OpenAPI Generator to generate a frontend API client from a backend OpenAPI specification.

## Folder & File structure

### Folders

- `src/controllers` - Contains the controllers that will be used to generate TSOA routes.
- `src/middleware` - Contains the middleware that will be used by Express to catch errors, validate, log, etc...
- `src/services` - Contains the services that will be used by the controllers to perform business logic.
- `src/tsoa` - Contains the generated routes and swagger spec from TSOA.
- `src/utils` - Contains the utility functions that will be used by the controllers and services to perform common tasks.

### Files

- `src/app.ts` - Contains the Express app that will be used to run the server.
- `src/server.ts` - The entry point of the application.
- `src/types.ts` - Contains the types that will be used by the controllers and services.

## Setup & Run

```bash
 # Install dependencies
 yarn install

 # Run the dev server
 yarn dev
```

Your server will automatically generate the routes and swagger spec from the OpenAPI specification and serve it on `http://localhost:4000/docs`. The server will listen for changes to files and automatically restart the server, along with regenerating the routes and swagger spec.
