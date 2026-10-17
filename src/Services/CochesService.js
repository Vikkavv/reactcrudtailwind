import axios from "axios";
import { Global } from "../Global";

export default class CochesService{

    async getAllCoches(){
        let result = await axios.get(Global.apiurl + "/coches");
        if(result.status === 200) return result.data;
    }

    async getCocheById(id){
        let result = await axios.get(Global.apiurl + "/coches/FindCoche/" + id);
        if(result.status == 200) return result.data;
        else return null
    }

    async updateCoche(coche){
        let result = await axios.put(Global.apiurl + "/coches/updateCoche", coche,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        ); 
        if(result.status === 200) return true;
        else return false;
    }


    async deleteCocheById(id){
        let response = await axios.delete(Global.apiurl + "/coches/deleteCoche/" + id);
        if(response.status === 200) return true;
        else return false;
    }

    async insertCoche(coche){
        let response = await axios.post(Global.apiurl + "/Coches/InsertCoche", coche);
        if(response.status === 200) return true;
        else return false;
    }

}