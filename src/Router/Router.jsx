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
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import AllUsers from '../Pages/AllUsers';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayouts,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
          index: true,
          path:'/',
          loader: ()=> fetch('https://coffey-house-backend.vercel.app/coffees'),
          Component: Home
        },
        {
          path: '/add-coffee',
          Component: AddCoffee
        },
        {
          path: '/coffee-details/:id',
          loader: ({params})=> fetch(`https://coffey-house-backend.vercel.app/coffees/${params.id}`),
          Component: Coffee_details
        },
        {
          path: '/update-coffee/:id',
          loader: ({params})=> fetch(`https://coffey-house-backend.vercel.app/coffees/${params.id}`),
          Component: UpdateCoffee
        },
        {
          path: '/sign-up',
          Component: SignUp
        },
        {
          path: '/sign-in',
          Component: SignIn
        },
        {
          path: '/all-users',
          loader: ()=>fetch('https://coffey-house-backend.vercel.app/users'),
          Component: AllUsers
        },
      ]
    },
  ]);