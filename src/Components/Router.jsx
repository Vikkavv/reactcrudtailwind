import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import Coche from './Coche';
import UpdateCoche from './UpdateCoche';
import DeleteCoche from './DeleteCoche';
import InsertCoche from './InsertCoche';

export default class Router extends Component {
  render() {

    function RouteParam(props){
      let params = useParams();
      let element = React.cloneElement(props.element, params);
      return element;
    }

    return (
      <BrowserRouter>
       <MenuComponent/>
        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/Coche/:id' element={<RouteParam element={<Coche/>} />} />
            <Route path='/CreateCoche' element={<InsertCoche/>}/>

            <Route path="/UpdateCoche/:id" element={<RouteParam element={<UpdateCoche/>}/>} />
            <Route path='/DeleteCoche/:id' element={<RouteParam element={<DeleteCoche/>}/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
