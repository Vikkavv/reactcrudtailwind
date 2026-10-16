import axios from "axios";
import { Global } from "../Global";

export default class CochesService{

    async getAllCoches(){
        let result = await axios.get(Global.apiurl + "/coches");
        if(result.status === 200) return 
    }

}