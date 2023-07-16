/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Input } from "antd";

const InputComponent = ({
    // eslint-disable-next-line react/prop-types
    className,
    size,
    classNameInput,
    placeholder,
    type = "text",
    value,
    onChange,
    children,
}) => {
    return (
        <div className={className}>
            {" "}
            <Input
                size={size}
                className={classNameInput}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default InputComponent;
