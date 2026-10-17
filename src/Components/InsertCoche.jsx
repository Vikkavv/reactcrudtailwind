import React, { Component } from "react";
import CochesService from "../Services/CochesService";
import { Navigate, redirect } from "react-router-dom";

export default class InsertCoche extends Component{

    service = new CochesService();

    state = {
        redirect: false
    }

    idCocheInputRef = React.createRef();
    modeloInputRef = React.createRef();
    marcaInputRef = React.createRef();
    conductorInputRef = React.createRef();
    imagenInputRef = React.createRef();
    

    sendFormInfo = async (e) => {
        e.preventDefault();
        let coche = {
            idCoche: 0,
            marca: this.marcaInputRef.current.value,
            modelo: this.modeloInputRef.current.value,
            conductor: this.conductorInputRef.current.value,
            imagen: this.imagenInputRef.current.value
        }
        let response = await this.service.insertCoche(coche);
        if(response) this.setState({redirect: true});
    }

    componentDidMount(){
        this.render();
    }

    render(){
        return (
            <div className="flex flex-direction-column flex-wrap align-content-center">
                {this.state.redirect && <Navigate to='/'/>}
                <br /><br /><br />
                <h1 className="text-center text-[40px] w-fitContent">
                    Crear Coche
                </h1>
                <br />
                <form className="flex w-fitContent flex-wrap flex-direction-column justify-content-center align-content-center gap1 min-w-[300px]" onSubmit={this.sendFormInfo}>
                    <label htmlFor="modelo">Modelo</label>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input ref={this.modeloInputRef} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" name="modelo" id="modelo"/>
                    </div>

                    <label htmlFor="marca">Marca</label>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input ref={this.marcaInputRef} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" name="marca" id="marca"/>
                    </div>

                    <label htmlFor="conductor">Conductor</label>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input ref={this.conductorInputRef} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" name="conductor" id="conductor"/>
                    </div>

                    <label htmlFor="imagen">Imagen</label>
                    <div className="w-full max-w-sm min-w-[200px]">
                        <input ref={this.imagenInputRef} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" name="imagen" id="imagen"/>
                    </div>


                    <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Insert</button>
                </form>
            </div>
        )
    }
}