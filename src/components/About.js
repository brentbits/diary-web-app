import React from "react";
import {Container} from 'react-bootstrap';
import Image1 from './images/my-diary.png';

function About(){
    return (
        <div class="center">
            <br />
            <h1>About us</h1>
            <br/><br/><br/><br/><br/>
            <Container>
                <figure class="position-relative">
                    <img src={Image1} alt="Diary" class="img-fluid" />
                </figure>
           </Container><br/><br/>
           <h2>
            This is an Electronic diary project by Brent Bernasol and Kaye Atenta through Web Application.
           </h2>
           <h2>You can Access this through any browser, so just write your diary away!</h2>
        </div>
    );
}

export default About;