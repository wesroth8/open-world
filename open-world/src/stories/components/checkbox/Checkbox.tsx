import React from "react";

export interface CheckboxProps {
    checked: boolean,
    onClick: () => void,
    label: string,
}


export const Checkbox = ({
    checked,
    onClick,
    label,
    ...props
}: CheckboxProps) => {
    return (
        <div>
            <label>
                {label}
            </label>
            <input 
            type="checkbox"
            checked={checked}
            onClick={onClick}
            />
        </div>
    )
}