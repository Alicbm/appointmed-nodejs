const express = require('express')
const sequelize = require('./libs/sequelize')
const routerApi = require('./routes')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors())

require('./utils/auth/index')

app.get('/', (req, res) => {
  res.send(`
    <h1>El Pepe: Welcome</h1>
    <p>Hoy voy a beber y sé, que voy a enloquecer</p>
  `)
})

routerApi(app)

app.listen(port, () => {
  console.log('Running at port: ' + port);

  sequelize.sync({ force: true }).then(() => {
    console.log('DB running succesfully...');
  }).catch(err => {
    console.log('Ops, there is a problem: ' + err);
  })
})



