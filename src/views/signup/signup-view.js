import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import InputField from "../../components/input-field/input-field-component"
import Button from '../../components/button/button-component'
// import { signInAction } from './signin-actions'
import { signUpAction } from "../signin/signin-actions"
import { SignUnWrapper, SignUnTitle, SubTitle, } from "./signup-styles"
const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleNamelChange = event => {
        setName(event.target.value)
    }
    const handleUsernameChange = event => {
        setUsername(event.target.value)
    }
    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited")
        dispatch(signUpAction({ email, password, name, username }))
        console.log("done")
        history.push("/profile")
    }

    return (
        <SignUnWrapper>
            <SignUnTitle>Create your Chari account</SignUnTitle>
            <form onSubmit={handleSubmit} >
                <InputField
                    type="text"
                    inputValue={name}
                    placehoder="Enter your name"
                    handleInputFiledChange={handleNamelChange}
                />
                <InputField
                    type="text"
                    inputValue={username}
                    placehoder="Enter your name"
                    handleInputFiledChange={handleUsernameChange}
                />

                <InputField i
                    type="email"
                    inputValue={email}
                    placehoder="Enter password"
                    handleInputFiledChange={handleEmailChange}
                />
                <InputField
                    type="password"
                    inputValue={password}
                    placehoder="Enter Phon number"
                    handleInputFiledChange={handlePasswordChange}
                />
                <Button type="submit"> Sign up</Button>
            </form>

            <SubTitle>Al ready have an account</SubTitle>
            <Button outlined={true} type="submit"> Sign in </Button>

        </SignUnWrapper>
    )
}

export default Signup
