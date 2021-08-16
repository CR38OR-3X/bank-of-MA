import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Member Services</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                       <CardItem
                        src='images/undrawWorking.png'
                        text='Services'
                        label='services'
                        path='/services'
                       />
                       <CardItem
                        src='images/blue-bg.jpg'
                        text='Products'
                        label='products'
                        path='/products'
                       />
                       <CardItem
                        src='images/blur-bg-mobile.jpg'
                        text='Sign Up'
                        label='sign up'
                        path='/sign-up'
                       />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
