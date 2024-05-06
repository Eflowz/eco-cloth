import React from "react";
import FormInput from "../form-input/form-input.component";
import { auth, googleProvider, signInWithEmail} from '../Firebase/firebase.utils';
import { signInWithPopup } from "firebase/auth";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
handleSubmit =  async event => {
        event.preventDefault();
        console.log("Form submitted");
        const {email, password} = this.state;
        try {
            await signInWithEmail(auth, email, password);
            console.log("sign in successfully")
            this.setState({ email:'', password: ''});
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        label='Email' 
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label='Password' 
                        handleChange={this.handleChange} 
                        required 
                        />
                        <div className="button">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={() => signInWithPopup(auth, googleProvider)} isGoogleSignIn >Sign in with Google</CustomButton>
                        </div>
                </form>
            </div>
        );
    }
}
export default SignIn;