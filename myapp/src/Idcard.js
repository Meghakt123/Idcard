import React from 'react'
import './Idcard.css';
import {Card,CardImg} from 'react-bootstrap'

function Idcard() {
  return (
    <div className='container'>
        <Card className='card'>
            <Card.Title className='title'>
            <h1>FUTURA LABS  </h1>
            <p>*ENABLE *TRANSFORM *ACCELERATE</p>
            </Card.Title>

            <CardImg className="image"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU"/>
                   

                <Card.Title class="name">
                MEGHA K T
            </Card.Title>
            <Card.Title class="details">
                <h4 class="col">
                    <ul type="none">
                        <li>Intern:Python</li>
                        <li>ID:FUT583</li>
                        <li>DOB:11/01/2002</li>
                        <li>Contact No:9834521309</li>
                        <li>Email id:megha@gmail.com</li>
                    </ul>

                </h4>
            </Card.Title>



                


          
        </Card>


    </div>
  )
}

export default Idcard