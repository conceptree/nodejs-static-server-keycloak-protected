# nodejs-static-server-keycloak-protected
A simple example of two apps serving and sharing static files between each other under keycloak authorization protection

## USAGE
After cloning this repo you will need to run `npm install` inside *app1* and *app2* to install each server dependencies.

To run both apps simultaneous you can run `npm run start` from this repo root folder or just run the same command from each app folder individually.

## Keycloak
For this example I ran keycloak locally. For that I downloaded the latest keycloak version from [Keycloak Downloads](https://www.keycloak.org/downloads.html)

1. Unzip keycloak.
2. run `./kc.sh start-dev` inside its bin folder.