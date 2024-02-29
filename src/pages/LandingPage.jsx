import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    //navigate to home page
    navigate('/home')
  }
  return (
<>
      <div className='container mt-5'>
      <div className='header row align-items-center m-5'>
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita dicta nam quis praesentium tempore nesciunt saepe vel ad, rem omnis debitis! Ratione eveniet ducimus, ut perferendis architecto voluptatibus eligendi?</p>
          <button onClick={handleNavigate} className='btn btn-info'>Get started</button>      
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing Image" />
        </div>
      </div>
      <div className='features'>
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card >
      <Card.Img variant="top" src="https://i.gifer.com/1fTO.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          <div className="col-lg-4">
            <Card >
      <Card.Img variant="top" src="https://th.bing.com/th/id/R.406d962ed28627553d3c14be8a4c82e8?rik=JDKOQdgPcdi4sA&riu=http%3a%2f%2fbestanimations.com%2fMusic%2fcrazy-lightshow-rave-concert-animated-gif-4.gif&ehk=uivFr%2fbdbcfL5QUesJZEgA48Vs56uE8LSsqwhhNyEdc%3d&risl=&pid=ImgRaw&r=0" />
      <Card.Body>
        <Card.Title>Categorised Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          <div className="col-lg-4">
          <Card >
      <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.cae90c1cddc14d57d730b5e58701868d?pid=1.7&rurl=http%3a%2f%2fmedia.giphy.com%2fmedia%2f8OnSxR7qfDtZe%2fgiphy.gif&ehk=ZFVyCZ%2b4CaV6zWS4Y4q9Znkfcb2Kkaac7ywSmsHV1mU%3d" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      <div className='row video border p-5 mt-5 rounded mb-5 align-items-center'>
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Faast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit laudantium exercitationem est assumenda ipsam veritatis commodi animi beatae fugit dignissimos eaque in corporis accusamus delectus, molestias nemo sapiente iure.</p>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorise Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit laudantium exercitationem est assumenda ipsam veritatis commodi animi beatae fugit dignissimos eaque in corporis accusamus delectus, molestias nemo sapiente iure.</p>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit laudantium exercitationem est assumenda ipsam veritatis commodi animi beatae fugit dignissimos eaque in corporis accusamus delectus, molestias nemo sapiente iure.</p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3P-t4WRoW5c?si=wCld-rc9FVDIRiSh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <hr />
  
</>  )
}

export default LandingPage