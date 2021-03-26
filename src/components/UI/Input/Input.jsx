import React from 'react'
import classes from './Input.module.scss'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [classes.input]
    const htmlFor = `${inputType}-${Math.random()}`
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor} className={classes['input__label']} >{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                className={classes['input__input']}
            />
            {
                isInvalid(props)
                 ? <span className={classes['input__span']}>{props.errorMessage || 'Введите верное значение'}</span>
                 : null
            }
        </div>
    )
}

export default Input