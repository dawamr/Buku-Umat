const app = require('./index.js');

const PORT = process.env.PORT || 3000;
const eraseDatabaseOnSync = true;

sequelize.sync({force: eraseDatabaseOnSync}).then(async ()=>{
    app.listen(PORT, ()=>{
        console.log(`Running on localhost:${PORT}`);
    });
})
