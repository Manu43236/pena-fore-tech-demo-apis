//const connection = require('./mongo/connection/connections');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//const userRouter = require('./routers/user.route');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

//app.use('/users',userRouter);
app.post('/submitForm', (req, res) => {
    console.log('api hitted input')
    console.log(req.body)
    res.json(req.body).end()
})
app.get('/', (req, res) => {
  res.send('app is started');
})

app.listen(port,()=>{
  console.log(`server is running at ${PORT}`)
})