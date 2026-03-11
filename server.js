const express = require('express');
const path = require('path'); 
 
const app = express();
const port = 3030;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


 

app.use(express.static(path.join(__dirname, 'public/index.html')));

app.use(express.static(path.join(__dirname, 'public/contact.html')));

app.get('/', (req, res) => {
    console.log("SERVE INDEX");
    app.use(express.static(path.join(__dirname, 'public/contact.html')));

});

