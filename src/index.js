
// const express = require('express');
// const session = require('express-session');
// const fileupload = require('express-fileupload');
// const fs = require('fs');
// const cors = require('cors');
// const app = express();
// var path = require('path');


// const port = 3000;

// app.use(session({secret: 'sadsadasdqweqwesdasdfgfdgfdgdf'}));
// app.use(express.json());
// app.use(fileupload({
//     useTempFiles: true,
//     tempFileDir: path.join(__dirname, 'temp')
// }));
// app.use(cors());

// app.listen(port,()=>{
//     console.log('Rodando na porta 3000');
// })


// app.get('/noticias', (req,res)=>{
//     res.json([{'titulo':'Primeiro notícia!'}])
// })

// app.get('/', (req,res)=>{
//     res.json([{'titulo':'Primeira rota123'}])
// })


const express = require('express');
const routes = require('./routs')
const app = express();

app.use(express.json());
app.use(routes);

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(3000,()=>{
    console.log('rodando na porta 3000');
})