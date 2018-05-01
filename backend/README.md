## Docs

## Backend server
This is a small server which facilitates an easy login with jwt auth.
I used docker to test this out, but it's not necessary. If docker is used run (except the last command):
```sh
docker run --name postgresdb -p 32768:5432 -d postgres
docker container update --restart=always postgresdb
docker exec -it postgresdb psql --username postgres -c "CREATE DATABASE web2 OWNER postgres;"
docker exec -it postgresdb psql --username postgres -c "GRANT ALL PRIVILEGES ON DATABASE web2 TO postgres;"
docker exec -it postgresdb psql --username postgres -c "DROP DATABASE web2"
```

If docker is not used, manually create a database `web2`. Make sure to change the port in the `server/config/config.json` and set all the credentials as you have them.
After download run `npm install` to install all the dependencies. Make sure sequelize has been installed and then run, in the root directory:
```sh
sequelize db:migrate
```
This will migrate the database and all the settings should be done. The database is not pupulated and rows must be added by hand.

To run the server:
```nashorn js
    nodemon
```

`All of these commands must be writtend in a terminal in the root directory: /backend`