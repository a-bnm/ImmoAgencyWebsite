import React, { useEffect } from 'react';
import './layout.css';
import { Link} from '@inertiajs/inertia-react';
import {getLogo} from '../../Store/actions';
import {connect} from 'react-redux';
import MyDropDownMenu from './MyDropDownMenu';

function Header(props) {
  useEffect(()=>{
    props.getLogo();       
  },[]);

  return (
    <div className="row min-vw-100 header text-white m-0">
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
    

  )
}

const mapStateToProps = (state) => {
  return {
    logo: state.logo
  }
}

export default connect(mapStateToProps,{getLogo})(Header);