// PACOTES
const express = require("express");
const mongoose = require("mongoose");
const formidableMiddleware = require('express-formidable');
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

AdminBro.registerAdapter(require('admin-bro-mongoose'))

// express server definition
const appAdmin = express()
appAdmin.use(formidableMiddleware());

// Resources definitions
const Usuario = mongoose.model('Usuario')

// Routes definitions
appAdmin.get('/', (req, res) => res.send('Hello World!'))

// Route which returns last 100 users from the database
appAdmin.get('/users', async (req, res) => {
    const usuarios = await Usuario.find({}).limit(10)
    res.send(usuarios)
})

// Route which creates new user
appAdmin.post('/users', async (req, res) => {
    const usuario = await new Usuario(req.fields.user).save()
    res.send(usuario)
})

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
    resources: [Usuario],
    rootPath: '/admin',
})

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro)
appAdmin.use(adminBro.options.rootPath, router)

// Running the server
const run = async () => {
    await mongoose.connect('mongodb+srv://rafael:NIYdvtMJDCLR24Su@thunder-pk9ny.mongodb.net/patrol?retryWrites=true&w=majority&ssl=true',
        { useNewUrlParser: true })
    await appAdmin.listen(8001, () => console.log(`Example appAdmin listening on port 8080!`))
}

run()
