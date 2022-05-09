import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

     

    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img className="loginscreen_logo" src="https://i.im.ge/2021/07/25/DDZrF.png" alt="" />
                <button onClick = {() => setSignIn(true)} className="loginscreen_button">
                    Sign In
                </button>
                <div className="loginscreen_gradient" />
            </div>
            <div className="loginscreen_body">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV Programs and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="loginscreen_input">
                            <form>
                                <input type='email' placeholder="Address"/>
                                <button onClick = {() => setSignIn(true)} className="loginscreen_getstarted">
                                    GET STARTED
                                </button>
                            </form>
                        </div>

                    </>
                )}
                
            </div>
        </div>
    )
}

export default LoginScreen
