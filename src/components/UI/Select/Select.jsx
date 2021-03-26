import React from 'react'
import classes from './Select.module.scss'

const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`

    return (
        <div className={classes.select}>
            <label htmlFor={htmlFor} className={classes['select__label']}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                className={classes['select__select']}
                >
                {props.options.map((option, index) => {
                    return (
                        <option
                          value={option.value}
                          key={option.value + index}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
export default Select