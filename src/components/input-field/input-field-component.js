import { useState } from 'react'
import { Input, IputWrapper, } from "./input-styles"

const InputField = ({ type, placehoder, inputValue, handleInputFiledChange }) => {

    return (
        <IputWrapper>
            <Input type={type}
                onChange={handleInputFiledChange}
                value={inputValue}
                placeholder={placehoder}
            />
        </IputWrapper>
    )
}

export default InputField
