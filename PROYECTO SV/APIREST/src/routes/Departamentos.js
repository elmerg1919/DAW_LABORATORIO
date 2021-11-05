const{ Router } = require('express');
const router = Router();

const Departamentos = require('../DATOS.json');

router.get('/',(req,res)=>{
res.json(Departamentos);
})


module.exports=router;