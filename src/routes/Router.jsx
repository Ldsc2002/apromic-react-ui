import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import classes from '../style/Router.module.css'

function Router() {
    return (
        <>
            <nav className={classes.container}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Router
