import React, { Component } from "react"
import CochesService from "../Services/CochesService";
import { defImage } from "./HomeComponent";
import { NavLink } from "react-router-dom";

export default class Coche extends Component {

    service = new CochesService();
    imageRef = React.createRef();
    
    state = {
        coche: null
    }

    handleImageError = () => {
        this.imageRef.current.src = defImage;
    }

    async getCocheById(){
        this.setState({
            coche: await this.service.getCocheById(this.props.id)
        });
    }

    componentDidMount(){
        this.imageRef.current = null
        this.getCocheById();
    }

    render(){
        return(
            <div>
                <br /><br /><br />
                { this.state.coche &&
                    <div className="flex flex-wrap align-content-center flex-direction-column gap1">
                        <img width={"500px"} src={(this.state.coche.imagen+"").startsWith("http") ? this.state.coche.imagen : defImage} onError={this.handleImageError} alt=""  ref={this.imageRef}/>
                        <div>
                            <h1><span className="font-semibold">MODELO</span> - {this.state.coche.modelo}</h1>
                            <h1><span className="font-semibold">MARCA</span> - {this.state.coche.marca}</h1>
                            <h1><span className="font-semibold">Conductor</span> - {this.state.coche.conductor}</h1>
                        </div>
                        <div className="flex gap1 justify-content-center">
                            <NavLink to={"/Coche/" + this.state.coche.idCoche} className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Edit
                            </NavLink>
                            <NavLink to={"/Coche/" + this.state.coche.idCoche} className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Delete
                            </NavLink>
                        </div>
                    </div>  
                }
            </div>
        )
    }
}