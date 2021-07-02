import React from 'react'
import { StyledButton } from './button.styles'

const Button = ({ children, type, outlined }) => {
    return (
        <StyledButton type={type} outlined={outlined}>
            {children}
        </StyledButton>
    )
}

export default Button
