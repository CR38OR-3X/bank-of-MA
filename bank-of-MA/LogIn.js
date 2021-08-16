import React from 'react';
import '../../App.css';


function LogIn (){
    return (
    <div className='log-in'>
        <h1 className='log-in'>LOG IN</h1>
        <input type='text' placeholder="Username..."/>
        <input type='password' placeholder="Password..."/>
        <button>Log In</button>
    </div>
    )
}
    export default LogIn; 
