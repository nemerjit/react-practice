import React from 'react'
import nemerPicture from '../images/nemer_img.jpg'
import switzerland from '../images/switzerland.jpg'
import boba from '../images/boba.jpg'
import tabletennis from '../images/table_tennis.jpg'

function Home() {
    return (
        <div id='home-wrapper'>
            <h1 className='center'>Welcome to Nemer's website!</h1>
            <img id='nemer-pic' src={nemerPicture} alt="nemer"/>
            <div id="img-wrapper">
                <img id='table-tennis' className="too-big" src={tabletennis} alt="table tennis"/>
                <img id='boba' className="too-big" src={boba} alt="boba"/>
                <img id='switzerland'className="too-big" src={switzerland} alt="switzerland"/>
            </div>
        </div>

        
    );
}

export default Home