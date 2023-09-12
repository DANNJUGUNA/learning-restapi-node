import  express  from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js"
const app=express();
const PORT=5000;


app.use(bodyParser.json()); //this tells the app that we will use data as a json
app.use('/users', usersRoutes)
app.get('/',(req, res) => {
    console.log("TEST")

    res.send("Hello From home page");
});
app.listen(PORT, ()=>console.log(`Server running on port : http://localhost:${PORT}`))