import React from "react";
import { Button } from "antd";

const ButtonComponent = ({ size, type, onClick, children }) => {
    return (
        <Button size={size} type={type} onClick={onClick}>
            {children}
        </Button>
    );
};

export default ButtonComponent;
