# Traefik + CORS + Authenticated REST API 

**This project was created as a case study only!**

This project shows how you can configure [Traefik](https://doc.traefik.io/traefik/) to control access to a federated REST API so that:
- All requests to the API are forwarded to a custom authentication service;
- Only requests authenticated with success are granted access to the REST API. A response to the request is then provided by the API service;
- All requests with insufficient permissions are blocked. In this case responses are provided by the authentication service itself; 
- CORS requests are handled properly in both situations.

## Quick start

Build all required Docker images and launch containers:

```bash
$ docker compose up -d
```

To inspect incoming authentication requests check the authentication server logs:

```bash
$ docker compose logs -tf auth
```

Access the web application (http://frontend.localhost).

## Expected behaviour 

Click on the `Make authenticated request` button:
- Check the browser's console and a message should appear: `I am making an authenticated request (authenticated = true)`;
- The authentication server should print a new log message: `Received authentication request with permissions set to 'true'`;
- A pop-up alert should appear on your browser window displaying the message: `Hello from backend server!`;
- Check the browser's console and no error should appear.

Click on the `Make unauthenticated request` button:
- Check the browser's console and a message should appear: `I am making an unauthenticated request (authenticated = false)`;
- The authentication server should print a new log message: `Received authentication request with permissions set to 'false'`;
- No pop-up alert should appear on your browser window;
- Check the browser's console and an error (non CORS-related) should appear: `GET http://backend.localhost/ 401 (Unauthorized)`.

