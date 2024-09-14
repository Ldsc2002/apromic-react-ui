import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Routes = [
    {
        link: '/',
        page: 'Página Principal',
    },
    {
        link: '/nosotros',
        page: 'Quiénes Somos',
    },
    {
        link: '/contacto',
        page: 'Contacto',
    },
    {
        link: '/blog',
        page: 'Blog',
    },
]

function Router() {
    return (
        <>
            <NavBar navItems={Routes} title="APROMIC" />
            <Outlet />
        </>
    )
}

export default Router
