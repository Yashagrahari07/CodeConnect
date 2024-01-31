const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('CodeConnect Backend Server');
});

app.listen(port, (err) => {
    if(err){
        console.log(`Error: ${err.message}`);
    }
    else{
        console.log(`listening on port ${port}`);
    }
});