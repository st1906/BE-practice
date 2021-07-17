import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then( () => {
    console.log("DB connected")

}).catch(error => console.log(error));
