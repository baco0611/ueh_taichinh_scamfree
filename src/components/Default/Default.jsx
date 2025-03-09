import React from 'react'
import { Outlet } from 'react-router-dom'
import DefaultHeader from '../DefaultHeader/DefaultHeader'

export default function Default() {
    return (
        <div>
            <DefaultHeader/>

            <Outlet/>
        </div>
    )
}
