const{Router}=require('express');
const router=Router();

router.get('/test',(req,res)=>{
    const data={
        "name":"elmer",
        "lastname":"Garcia"
    };
    res.json(data);
});

module.exports=router;