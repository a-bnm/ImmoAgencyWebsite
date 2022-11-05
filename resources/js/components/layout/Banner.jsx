import React,{ useEffect } from 'react'
import {getLogo} from '../../Store/actions';
import {connect} from 'react-redux';
import { Link} from '@inertiajs/inertia-react';
import {motion} from 'framer-motion';
import MyDropDownMenu from './MyDropDownMenu';

function Banner(props) {
    useEffect(()=>{
        props.getLogo();       
    },[]);

  return (
    <div className="banner-container min-vw-100">
    <div className="row min-vw-100 text-white banner-secondary-container m-0">
        <div className='col-5 py-3'>
          <div className="row w-auto fs-5 ">
            <Link href='/' className="col-2 pl-5">
              <img src={props.logo} alt="Logo not found!!" className='header-logo'/>
            </Link>
            <Link href="/" className="col-2 text-white fw-bold text-decoration-none pt-3">Home</Link>
            <Link href="/Inventory" className="col-3 text-white text-decoration-none fw-bold pt-3">Inventory</Link>
            <Link href="/OurServices" className="col-3 text-white text-decoration-none fw-bold  pt-3">Our services</Link>

          </div>
        </div>
        
        <div className="col-6 d-flex fs-5 justify-content-end align-items-center">
        {props.auth.user ? (
            <MyDropDownMenu user={props.auth.user} />
          ) : (
            <>
              <Link href={route('login')} className="mr-5 text-white text-decoration-none fw-bold  pt-3">
                Log in
              </Link>
                <Link
                  href={route('register')}
                  className="text-white fw-bold text-decoration-none pt-3"
                >
                  Register
                </Link>
              </>
          )}
        </div>
    </div>
    <div className='row min-vw-100 max-vw-100  m-0 p-0 '>
        <div className="banner-secondary-container row pt-5 pb-5 min-vw-100 m-0">
            <div className="col-5 ps-5 d-block">
                <div className='mb-5 d-flex justify-content-center'>
                    <motion.img  
                      animate={{rotate:360}} 
                      transition={{ duration:4 }}
                      src={props.logo} 
                      className='image-banner' 
                      alt="Logo not found!!" 
                    />
                </div>
                <div className='d-flex justify-content-center'>
                    <motion.p initial={{ x:-350 }} animate={{ x:50 }} transition={{ duration:4 }}  className='text-white fw-bold fs-1 mb-5 me-5'>
                        Our job is to help you acheive your real estate dream.
                    </motion.p>
                </div>
                
            </div>
        </div>
        
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      logo: state.logo
    }
}

export default connect(mapStateToProps,{getLogo})(Banner);