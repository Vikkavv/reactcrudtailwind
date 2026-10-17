import React, { Component } from 'react'
import CochesService from '../Services/CochesService';
import { NavLink } from 'react-router-dom';


export let defImage = "data:image/png;base64,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";
 
export default class HomeComponent extends Component {

  service = new CochesService();
  imageRef = React.createRef();
  
  state = {
    coches: []
  }

  handleError = (model) => {
    this.imageRef.current[model].src = defImage
  }

  async getAllCoches(){
    this.setState({
      coches: await this.service.getAllCoches()
    });
  }

  componentDidMount(){
    this.imageRef.current = [];
    this.getAllCoches();
  }

  render() {
    return (
      <div className='flex flex-wrap flex-direction-column align-content-center justify-content-center'>
        <br /><br /><br />
          <div className='grid col4 gap1'>
              {
                this.state.coches.map((coche, i) => {
                  return(
                    <div key={i} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={(coche.imagen+"").startsWith("http") ? coche.imagen : defImage} onError={() => {this.handleError(coche.modelo)}} alt="card-image" ref={(el) => this.imageRef.current[coche.modelo] = el}/>
                      </div>
                      <div className="p-4">
                        <h5 className="mb-2 text-slate-800 text-xl font-semibold">{coche.marca}, {coche.modelo}</h5>
                        <p className="text-slate-600 leading-normal font-light">{coche.conductor}</p>
                    
                        <div className='flex gap1'>
                          <NavLink to={"/UpdateCoche/" + coche.idCoche} className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Edit
                          </NavLink>
                          <NavLink to={"/Coche/" + coche.idCoche} className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            View
                          </NavLink>
                          <button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
          <br /><br />
      </div>
    )
  }
}
