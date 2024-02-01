// LoginPage.js

import React from 'react';
import Header from "../components/Header";
import Login from "../components/Login";
import './gradient.css'; // Import Tailwind CSS and custom styles

export default function LoginPage() {
    return (
        <>
            
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Register"
                    linkUrl="/registration"
                />
                <Login />
            
        </>
    );
}
