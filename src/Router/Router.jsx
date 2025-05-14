import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import ErrorElement from '../Pages/ErrorElement'
import Home from '../Pages/Home';
import MainLayouts from '../Layouts/MainLayouts';
import AddCoffee from '../Pages/AddCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee';
import Coffee_details from '../Pages/Coffee_details';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayouts,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
          index: true,
          path:'/',
          loader: ()=> fetch('http://localhost:3000/coffees'),
          Component: Home
        },
        {
          path: '/add-coffee',
          Component: AddCoffee
        },
        {
          path: '/coffee-details/:id',
          loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
          Component: Coffee_details
        },
        {
          path: '/update-coffee/:id',
          loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
          Component: UpdateCoffee
        }
      ]
    },
  ]);