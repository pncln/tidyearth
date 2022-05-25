const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')
const litterRouter = require('./routers/litter')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(postRouter)
app.use(litterRouter)

app.listen(port, () => {
    console.log('Listening on port ' + port)
})