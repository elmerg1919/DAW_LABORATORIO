const express = require('express');
const app = express();
const morgan = require('morgan');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas
app.use(require('./routes/index'));
app.use('/API/Departamentos', require('./routes/Departamentos'));
//app.use('/api/registro', require('./routes/registro'));


// Iniciando Servidor
app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`);
});