const express = require('express');

const app = express();

app.set('ejs', 'view engine');

app.listen(3000, ()=> {
    console.log("Server is up and running at port 3000!");
});