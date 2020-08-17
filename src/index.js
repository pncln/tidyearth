const express = require('express')
const userRouter = require('./routers/userRouter')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Listening on port ' + port)
})