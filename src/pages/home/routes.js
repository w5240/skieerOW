import React from 'react';
import Container from './container';
import Home from './components/home';
import Project from './components/project';
import About from './components/about';


import notFind from '../other/notFind';

const routes = [{
  path:'/',
  component:Container,
  childRoutes:[{
    indexRoute:{
      onEnter:({ params }, replace) => replace('/home')
    }
  },{
    path:'home',
    name:'home',
    component:Home
  },{
    path:'project',
    name:'Project',
    component:Project
  },{
    path:'about',
    name:'About',
    component:About
  }]
},{
  path:'*',
  component:notFind,
}]
export default routes;
