import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register =(e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn =(e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            
        })
        .catch((error) => {
            alert(error.message);
        });
    };



    return (
        <div className="signupscreen">
          <form>
              <h1>Sign In</h1>
              <input ref={emailRef} placeholder="Email" type="email" />
              <input ref={passwordRef} placeholder='Password' type="password" />
                <button tupe="submit" onClick={signIn}>Sign In</button>
                <h4><span className="signupscreen_gray">New to Bingepix?</span>
                <span className="signupscreen_link" onClick={register}>Sign Up now.</span></h4>
              </form>  
        </div>
    )
}

export default SignUpScreen
