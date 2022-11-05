import React, { useEffect,Component } from 'react'
import './layout.css';


export default class ServicesDisplay extends Component {
    
    render(){
  return (
    <div className='row min-vw-100 max-vw-10 py-5 services-container'>
        
        <h2 className='fw-bold fs-1 mb-5 ms-5 ps-5 title-services'>Our services</h2>
        
        <div className="service-card">
            <div  className="service-img1 img1">
            </div>
            <div className="service-text py-4 px-5">
                <h3  className='fw-bold mb-4 text-white text-center'>Service 1</h3>
                <span  className='text-white text-center'>
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                </span>
            </div>
           
            
           
        </div>
        <div className="service-card">
            <div className="service-img img2">
            </div>         
            <div className="service-text py-4 px-5">
                <h3 className='fw-bold mb-4 text-white text-center'>Service 2</h3>
                <span className='text-white text-center'>
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                </span>
            </div>
            
        </div>
        <div className="service-card">
            <div  className="service-img1 img3">
            </div>
            <div className="service-text py-4 px-5">
                <h3  className='fw-bold mb-4 text-white text-center'>Service 3</h3>
                <span className='text-white text-center'>
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                    Mollitia, autem aperiam magnam cumque, placeat exercitationem blanditiis *
                    quidem earum quibusdam veritatis doloremque ullam ipsam commodi.
                </span>
            </div>
           
           
        </div>
    </div>
  )
}
}

