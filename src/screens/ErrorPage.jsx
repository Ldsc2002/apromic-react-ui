import React from 'react'
import classes from '../style/ErrorPage.module.css'

function ErrorPage() {
    return (
        <div className={classes.container}>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    )
}

export default ErrorPage
