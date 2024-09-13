import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Button.module.css'

function Button({ link }) {
    return (
        <a className={classes.link} href={link}>
            This is a button
        </a>
    )
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
}

export default Button
