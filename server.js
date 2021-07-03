const app = require('./index.js');

const PORT = process.env.PORT || 3000;
// const eraseDatabaseOnSync = true;

app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}`);
});
