'use client'
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CommonLayout from "../layouts/commonLayout";
import ContactUs from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CommonLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/contect',
                element: <ContactUs/>
            }
        ]
    },
    
])

export default router