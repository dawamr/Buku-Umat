const { Router } = require('express');
const router = new Router();


router.get('/', (req,res)=>{
    res.json('welcome to express');
});

router.get('/api', (req, res)=> {
res.json('welcome to APi');
});
router.get('/api/users', (req,res)=>{
    res.json([
        { 
            "id":"1",
            "nama":"abcc",
        },
        { 
            "id":"2",
            "nama":"dabcc",
        }
    ]);

});
router.post('/api/users', (req,res)=> {
console.log('ini post');

});
router.put('/api/users', (req,res)=> {
console.log('ini update');
    
});
router.delete('/api/users', (req,res)=> {
console.log('ini delete');
    
});

module.exports = router;