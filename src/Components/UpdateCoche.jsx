import React, { Component } from "react";
import CochesService from "../Services/CochesService";
import { Navigate, NavLink, redirect } from "react-router-dom";

export default class UpdateCoche extends Component{

    service = new CochesService();
    inputRefs = React.createRef();

    state = {
        coche: null,
        redirect: false
    }

    async getCocheById(){
        this.setState({
            coche: await this.service.getCocheById(this.props.id)
        })
    }

    sendFormInfo = async (e) => {
        e.preventDefault();
        let imgFile = this.inputRefs.current['imagen'].files[0];
        let img64 = this.state.coche.imagen;
        const img64Converter = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
        img64 = imgFile ? await img64Converter(imgFile) : img64;
        let coche = {
            idCoche: parseInt(this.props.id),
            marca: this.inputRefs.current['marca'].value,
            modelo: this.inputRefs.current['modelo'].value,
            conductor: this.inputRefs.current['conductor'].value,
            imagen: img64
        }

        let result = await this.service.updateCoche(coche);
        if(result) this.setState({ redirect: true });
    }


    componentDidMount() {
        this.inputRefs.current = [];
        this.getCocheById();
    }

    render(){
        return(
            <div className="flex flex-direction-column flex-wrap align-content-center">
                {this.state.redirect && <Navigate to="/"/>}
                <br /><br /><br />
                <h1 className="text-center text-[40px] w-fitContent">
                    Editar Coche
                </h1>
                <br />
                {
                    this.state.coche &&
                    <form className="flex w-fitContent flex-wrap flex-direction-column justify-content-center align-content-center gap1" onSubmit={this.sendFormInfo}>
                        <label htmlFor="modelo">Modelo</label>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input ref={(el) => this.inputRefs.current["modelo"] = el} defaultValue={this.state.coche.modelo} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" name="modelo" id="modelo"/>
                        </div>

                        <label htmlFor="marca">Marca</label>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input ref={(el) => this.inputRefs.current["marca"] = el} defaultValue={this.state.coche.marca} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" name="marca" id="marca"/>
                        </div>

                        <label htmlFor="conductor">Conductor</label>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input ref={(el) => this.inputRefs.current["conductor"] = el} defaultValue={this.state.coche.conductor} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="text" name="conductor" id="conductor"/>
                        </div>

                        <label htmlFor="imagen">Imagen</label>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input ref={(el) => this.inputRefs.current["imagen"] = el} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="file" name="imagen" id="imagen"/>
                        </div>


                        <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Update</button>
                    </form>
                }
            </div>
        )
    }
}