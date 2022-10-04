import React from 'react'

function Contact() {
    return (
        <div>
            <h1 className='center'>Contact me!</h1>
            <form className="center" >
                <label>Name: </label>
                <input type='text' />
                <br/>
                <br/>
                <label>Email: </label>
                <input type='text' />
                <br/>
                <br/>
                <label>Subject: </label>
                <input type='text'/>
                <br/>
                <br/>
                <label>Message: </label>
                <input type="text" />
            </form>
        </div>
        
    );
}

export default Contact