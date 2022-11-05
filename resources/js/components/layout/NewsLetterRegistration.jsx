import React,{Component} from 'react';
import {addSubscriber} from '../../Store/actions';
import {connect} from 'react-redux';
import '../layout/layout.css';

class NewsLetterRegistration extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.preventDefault()
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addSubscriber(this.state)
    }

    render(){
        return (
            <div className='row min-vw-100 m-0 py-5 d-flex align-items-center news-letter-form-container'>
                <div className="col-2"></div>
                <div className="col-4 text-white">
                    <h1 className='fs-1 fw-bold'>Join our news letter!</h1>
                    <p className='fs-3'>Register to our news letter to get the latest news and stock we have!</p>
                </div>
                <div className="col-4 fw-bold">
                <form method="post" className='pt-5 pb-3 px-5 rounded news-letter-form'>
                    <h3 className='text-white fw-bold mb-3'>Register!</h3>
                    <div className="form-floating mb-3">
                        <input type="text" id="floatingInput" placeholder="Name" name='name' onChange={this.handleChange} className="form-control form-contol-sm" />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" id="floatingInput" placeholder="Email" name="email" onChange={this.handleChange} className="form-control" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <button type="submit" className=' btn btn-lg btn-card' onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                </div>
            <div className="col-2"></div>
            </div>
        )
    }    
}



export default connect(null,{addSubscriber})(NewsLetterRegistration);
