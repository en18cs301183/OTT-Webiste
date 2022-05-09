import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from "../features/counter/userSlice"
import Nav from '../Nav'
import './ProfileScreen.css'
import auth from "../firebase"
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'

function ProfileScreen() {
    const user = useSelector(selectUser);
    const history = useHistory();
    function logout() {
        localStorage.clear();
        history.push('/')
        firebase.auth().signOut();
    }

    return (
        <div className="profilescreen">
            <Nav />
            <div className="profilescreen_body">
                <h1>Edit Profile</h1>
                <div className="profilescreen_info">
                    <img 
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
                        alt="" 
                    />
                    <div className="profilescreen_details">
                        <h2>{user.email}</h2>
                        <div className="profilescreen_plans">
                            <button onClick = {logout} className="profilescreen_signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileScreen
