import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { SignInWrapper, SignInTitle, SubTitle } from './signin-styles'
import InputField from "../../components/input-field/input-field-component"
import Button from '../../components/button/button-component'
import { signInAction } from './signin-actions'
import { useHistory } from 'react-router-dom'
const Signin = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submited")
        const user = {
            email: "elatigh@DS24.com",
            password: "atigh"
        }
        dispatch(signInAction({ email, password }))
        console.log("done")
        history.push("/")
    }
    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    return (
        <SignInWrapper>
            <SignInTitle>Sign in to your Chari account </SignInTitle>
            <form onSubmit={handleSubmit} >

                <InputField i
                    type="email"
                    inputValue={email}
                    placehoder="Enter your email"
                    handleInputFiledChange={handleEmailChange}
                />
                <InputField
                    type="password"
                    inputValue={password}
                    placehoder="Enter your password"
                    handleInputFiledChange={handlePasswordChange}
                />
                <Button type="submit"> Sign in</Button>
            </form>
            <SubTitle>Don't have an account?</SubTitle>
            <Button outlined={true} type="submit"> Sign up </Button>
        </SignInWrapper>
    )
}

export default Signin
