import React, { useEffect } from 'react'
import '../layout/layout.css';
import {motion} from 'framer-motion';

export default function DisplayProperties(props) {
  
  return (
    <div className='row min-vw-100 max-vw-10 pt-5 pb-5 d-flex justify-content-center properties-container' >
      
      <motion.h2 initial={{ x:-350 }} whileInView={{ x:30 }} transition={{ duration:4 }} className='fw-bold fs-1 ms-5 ps-5 mb-5 title-properties'>Discover some of our real estate</motion.h2>
      {props.properties?.map((property) => 
        <React.Fragment  key={property.id}>
          <div className="col-4 w-auto mx-5" >
            <motion.div initial={{ opacity:0}} whileInView={{ opacity:1 }}  transition={{ duration:3 }}  className="card property-card text-white"  >
              <img src={property.image}  alt="No image for this property was found" className="card-img-top" />
                <div className="card-body ">
                  <h5 className="card-title">{property.title}</h5>
                  <span>{property.city},{property.wilaya}</span>
                  <span className="card-text">
                    <p>Price: {property?.price} {property?.contract_type === 'sale'? 'DA' :'DA/Month'}</p>
                  </span>
                  <a href={ '/'+(property.id)+'/Details' }  className='btn btn-dark btn-card'>More info</a>
                </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}
