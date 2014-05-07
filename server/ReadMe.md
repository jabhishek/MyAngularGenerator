To run development from command line:-

1. set NODE_ENV=development
2. grunt - this will start nodemon
3. browse to localhost:3000 (or whatever port is there in bin/www). This should load stuff from the client folder.

For production,
1. From client folder, run grunt --force. This will optimize the client code and put it in the dist folder, which is server/dist in our project
2. set NODE_ENV=production
3. grunt - this will start nodemon
4. browse to localhost:3000 (or whatever port is there in bin/www). This should run the optimized client code from the server/dist folder.
