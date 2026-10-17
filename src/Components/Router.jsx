import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import Coche from './Coche';
import UpdateCoche from './UpdateCoche';

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
            <Route path="/UpdateCoche/:id" element={<RouteParam element={<UpdateCoche/>}/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
