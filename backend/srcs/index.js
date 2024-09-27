const express = require("express");
const cors = require("cors");
const app = express();
const connetedToMongodb = require('./db');

const port = process.env.PORT || 8000
connetedToMongodb();
app.use(express.json());



app.use(cors());


app.use('/api/v1/', require('./routes/route'));
app.get('/', (req, res) => {
    res.send("Hi Ahmad Raza");
})

app.listen(port,()=> {
    console.log(`Server is started at http://localhost:${port}`);
})

