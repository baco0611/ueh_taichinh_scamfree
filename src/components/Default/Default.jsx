import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DefaultHeader from '../DefaultHeader/DefaultHeader'
import DefaultFooter from '../DefaultFooter/DefaultFooter'

export default function Default() {
    const APP_SCRIPT_URL = import.meta.env.VITE_APP_SCRIPT_URL

      useEffect(() => {
        const data = {
            action: "traffic",
            sheet: "TRAFFIC",
        }
      
        fetch(APP_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            // headers: {
            //     "Content-Type": "application/x-www-form-urlencoded"
            // },
            body: new URLSearchParams(data),
        })
      }, []);

    return (
        <div>
            <DefaultHeader/>

            <Outlet/>

            <DefaultFooter/>
        </div>
    )
}
