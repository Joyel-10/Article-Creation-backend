// json server

const jsonServer = require("json-server")

// 2. create server

const ARticleserver = jsonServer.create() // returns an express server

// 5.middleware to parse json format

const middleware = jsonServer.defaults()

// 7. setup path to store data 

const router = jsonServer.router("db.json")


// 6. use middleware

ARticleserver.use(middleware)
ARticleserver.use(router)

// 3. set port number

const PORT = 4000 || process.env.PORT

// 4. listen to the request from the frontend to resolve the request 

ARticleserver.listen(PORT, () => {
    console.log(`ARticleserver is running successfully at port number ${PORT}`)

})