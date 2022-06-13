import React from "react";
import Header from './Header';
import Diary from './Diary';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import Image1 from './images/my-diary.png';

function Home(){
    return (
        <div>
           <Header />
           <br />
           <Container>
                <figure class="position-relative">
                    <img src={Image1} alt="Diary" class="img-fluid" />
                </figure>`
           </Container>
           <br />
           <Diary />
        </div>
    );
    
}

export default Home;