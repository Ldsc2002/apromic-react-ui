import React from 'react'
import classes from '../style/Button.module.css'

function Button([link]) {
    return (
        <a className={classes.link} href={link}>
            This is a button
        </a>
    )
}

export default Button
