/*jshint esversion: 6 */

const express = require('express');

const RouteApplication = express();
RouteApplication.get('/', (req,res)=>{
    res.json('welcome to express');
});

RouteApplication.get('/api', (req, res)=> {
res.json('welcome to APi');
});
RouteApplication.get('/api/users', (req,res)=>{
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
RouteApplication.post('/api/users', (req,res)=> {
console.log('ini post');

});
RouteApplication.put('/api/users', (req,res)=> {
console.log('ini update');
    
});
RouteApplication.delete('/api/users', (req,res)=> {
console.log('ini delete');
    
});
RouteApplication.listen(5000, ()=>
{
console.log('Berjalan di port 5000');

});