import React from 'react'
import { Outlet } from 'react-router-dom'
import DefaultHeader from '../DefaultHeader/DefaultHeader'
import DefaultFooter from '../DefaultFooter/DefaultFooter'

export default function Default() {
    return (
        <div>
            <DefaultHeader/>

            <Outlet/>

            <DefaultFooter/>
        </div>
    )
}
