import React, { Component } from "react";
import CochesService from "../Services/CochesService";
import { Navigate, NavLink } from "react-router-dom";
import { defImage } from "./HomeComponent";

export default class DeleteCoche extends Component{

    service = new CochesService();
    imgRef = React.createRef();


    state = {
        coche: null
    }

    async getCocheById(){
        this.setState({
            coche: await this.service.getCocheById(this.props.id),
            redirect: false
        })
    }

    handleImgErr(){
        this.imgRef.current.src = defImage;
    }

    borrarCocheById = async () => {
        let response = await this.service.deleteCocheById(parseInt(this.props.id));
        if(response) this.setState({redirect: true});
    }

    componentDidMount(){
        this.getCocheById();
    }

    render(){
        return(
            <div className="flex flex-wrap flex-direction-column justify-content-center align-content-center gap1 min-h-[80vh]">
                {
                    this.state.redirect && <Navigate to="/"/>
                }
                {
                    this.state.coche &&
                    <div className="w-fitContent">
                        <div className="flex justify-content-center">
                            <img width={"300px"} src={(this.state.coche.imagen+"").startsWith("http") ? this.state.coche.imagen : defImage} onError={this.handleImgErr} ref={this.imgRef} alt="" />
                        </div>
                        <br />
                        <h1 className="text-[2rem]">¿Estas seguro de querer eliminar el coche: {this.state.coche.marca}, {this.state.coche.modelo}?</h1>
                        <div className="flex justify-content-end gap1">
                            <NavLink to="/" className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Cancelar</NavLink>
                            <button onClick={this.borrarCocheById} className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Borrar</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}