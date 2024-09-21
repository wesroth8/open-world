import React from "react";
import './input.css';
import { Rounding } from "../../../types/Rounding";

export interface InputProps {
    placeholder?: string,
    label?: string,
    rounding: Rounding,
}


export const Input = ({
    placeholder,
    label,
    rounding,
    ...props
}: InputProps) => {

    const InputStyle = {
        borderRadius: rounding.valueOf(),
    }
    
    return (
        <div className="input">
            <label>
                {label}
            </label>
            <input 
                type="text"
                placeholder={placeholder}
                style={InputStyle}
            />
        </div>
    )
}