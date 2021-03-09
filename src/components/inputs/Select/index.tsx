import React, { SelectHTMLAttributes } from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    name: string,
    options: Array<string>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-component" key={name} >
            <label htmlFor={`select-${name}`}>{label}</label>
            <select name={name} id={`select${name}`} {...rest} >
                <option value="">Selecione</option>
                {options.map((_option, index) => (
                    <option key={index} value={_option}>{_option}</option>
                ))}

            </select>
        </div>
    )
}

export default Select;