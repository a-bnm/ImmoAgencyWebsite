import React from 'react';
import './layout.css';
import {getLogo} from '../../Store/actions';
import {connect} from 'react-redux';

function Footer(props) {
  return (
    <div className='row min-vw-100 text-white pb-5 m-0 footer'>
        <div className="col-12 d-flex justify-content-center align-items-center min-vw-100 my-5">
            <img src={props.logo} alt="" className='footer-logo' />
        </div>
        <div className="col-3 ps-5 ms-5">
            <h3>Contact us</h3>
            <ul>
                <li>number</li>
                <li>number</li>
            </ul>
        </div>
        
        <div className="col-3 ps-5">
            <h3>Our locations</h3>
            <ul>
                <li>adress 1</li>
                <li>adress 2</li>
            </ul>
        </div>
        <div className="col-3 ps-5">
            <h3>About us</h3>
            <ul>
                <li>Who are we?</li>
                <li>Our clients</li>
                <li>Our portfolio</li>
            </ul>
        </div>
        <div className="col-2 ps-5">
            <h3>Terms of use</h3>
            <ul>
                <li>Confidentiality</li>
                <li>Security</li>
            </ul>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      logo: state.logo
    }
}
  
export default connect(mapStateToProps,{getLogo})(Footer);