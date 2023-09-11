import  express  from "express";
import bodyParser from "body-parser";

const app=express();
const PORT=5000;

app.use(bodyParser.json()); //this tells the app that we will use data as a json

app.listen(PORT, ()=>console.log(`Server running on port : http://localhost/${PORT}`))