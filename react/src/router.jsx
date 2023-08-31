import { Children } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import GeustLyout from "./components/GuestLayout";
import DefaultLaout from "./components/defaultLayout";

import HeroSection from "./components/heroSection";
import Login from "./views/login";
import Signup from "./views/signup";
import Dashboard from "./components/dashboard";
import Creatos from "./components/creators";
import About from "./components/About";
import Contact from "./components/contact";
import Premium from "./components/premium";
import Messages from "./components/messages";
import CheckOut from "./components/checkOut";
import ProductPage from "./components/productsPage";
const router = createBrowserRouter([

{

    path: '/',
    element : <DefaultLaout />,
    children : [
        {
            path: '/products',
            element : <Navigate to='/' />
        },
        {
            path: '/',
            element : <ProductPage />
        },
        {
            path: '/creators',
            element : <Creatos />
        }
        ,
        {
            path: '/About',
            element : <About />
        }
        ,
        {
            path: '/contact',
            element : <Contact />
        }
        ,
        {
            path: '/premium',
            element : <Premium />
        }
    ]
    },
    {
        path : '/',
        element : <GeustLyout />,
        children : [
            {

                path: 'login',
                element : <Login />
                
                },
                {
        
                    path: 'signup',
                    element : <Signup />
                    
                    }
        ]

        
    },
    {
        path : '/messages',
        element : <Messages />
    }
    ,
    {
        path : '/checkOut',
        element : <CheckOut />
    }
   
    ,
    {
        path : '/dashboard',
        element : <Dashboard />
    }
   


])
export default router