import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import {connect} from 'react-redux';
import {getLogo} from '../Store/actions';
import '../components/layout/layout.css';

function Guest(props) {
    return (
        <div className="container min-vw-100 d-flex justify-content-center align-items-center">
            <div className='row py-2 bg-dark row d-block bg-dark'>
                <Link href="/" className='d-flex justify-content-center'>
                    <img src={props.logo} alt="" className='footer-logo' />
                </Link>
            </div>

            <div className="row w-50">
                {props.children}
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      logo: state.logo
    }
}
  
export default connect(mapStateToProps,{getLogo})(Guest);