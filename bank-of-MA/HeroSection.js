import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Bank of Merit America</h1>
      <p>Welcome to Online Banking</p>
      <div className='hero-btns'>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          LOG IN
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={console.log('hello')}
        >
          SIGN UP <i className='fas fa-sign-in-alt' />
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;