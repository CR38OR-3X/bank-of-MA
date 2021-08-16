import React from 'react';
import '../../App.css';
import '../Cards.css';


function SignUp (){
return (
    <div className='sign-up'>
        <h1 className='sign-up'>SIGN UP</h1>
        <input type='text' placeholder="Username..."/>
        <input type='password' placeholder="Password..."/>
        <button>Create Account!</button>
    </div>
    )
  
  };

export default SignUp; 
