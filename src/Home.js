import React from "react";
import { useHistory } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom'

export default function Home() {
  
    const history = useHistory();
    const routeToPizza = () => {
    history.push('/pizza');
    }
    // const routeToHome = () => {
    // history.push('/');
    // }
    return (
        <>
        <div className='home-header'>
            <h1>Lambda Eats</h1>
            <Link to='/'>Home</Link>
            <p>Eat what you want!  as long as its pizza</p>
            <button
            onClick={routeToPizza}
            className='pizza-button'>
            Start Pizza Order
            </button>
        </div>
            <h3>What's Close</h3>
            <img 
            className='close-spots'
            alt=''
            ></img>
        <div>

        </div>
        </>
    );
};
