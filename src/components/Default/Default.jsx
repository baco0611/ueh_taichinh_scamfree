import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DefaultHeader from '../DefaultHeader/DefaultHeader'
import DefaultFooter from '../DefaultFooter/DefaultFooter'

export default function Default() {
    const APP_SCRIPT_URL = import.meta.env.VITE_APP_SCRIPT_URL

    useEffect(() => {
        const form = new FormData();
        form.append("action", "traffic");
        form.append("sheet", "TRAFFIC");
      
        fetch(APP_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: form,
        });
      }, []);

    return (
        <div>
            <DefaultHeader/>

            <Outlet/>

            <DefaultFooter/>
        </div>
    )
}
