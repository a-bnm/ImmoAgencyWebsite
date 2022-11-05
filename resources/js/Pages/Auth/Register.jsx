import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import {connect} from 'react-redux';
import {getLogo} from '../../Store/actions';
import '../../components/layout/layout.css';

function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        title:'',
        username:'',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        console.log(data.username);
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className="container min-vw-100 min-vh-100 p-0 m-0 d-flex justify-content-center align-items-center ">
            <div className='row gy-0 min-vw-100 mt-5 d-flex justify-content-center align-items-center '>
                <div className='col-12  min-vw-100 d-flex justify-content-center '>
                    <Link href="/" className='col-12 w-25 bg-dark d-flex justify-content-center'>
                        <img src={props.logo} alt="" className='header-logo my-2' />
                    </Link>
                </div>
                <div className='col-12  min-vw-100 d-flex justify-content-center'>
                    <div className='w-25 bg-dark p-4 '>
                        <form onSubmit={submit}>
                            <div className='my-2 '>
                                <InputLabel forInput="name" value="Name" className="text-white pb-2" />

                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="w-100"
                                    autoComplete="name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />

                                <p className="fs-6 my-2 text-danger" >{errors.name? errors.name : null}</p>
                            </div>

                            <div className="my-2">
                                <InputLabel forInput="email" value="Email" className="text-white pb-2" />

                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-100"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <p className="fs-6 my-2 text-danger" >{errors.email? errors.email : null}</p>
                            </div>

                            <div className="my-2">
                                <InputLabel forInput="title" value="Title" className="text-white pb-2" />

                                <select 
                                    name="title" 
                                    value={data.title} 
                                    className='w-100 rounded' 
                                    onChange={onHandleChange}
                                >
                                    <option value="Manager">Manager</option>
                                    <option value="Agent">Agent</option>
                                    <option value="Client">Client</option>
                                </select>

                                <p className="fs-6 my-2 text-danger" >{errors.title? errors.title : null}</p>
                            </div>

                            <div className="my-2">
                                <InputLabel forInput="username" value="Username" className="text-white pb-2" />

                                <TextInput
                                    type="text"
                                    name="username"
                                    value={data.username}
                                    className="w-100"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <p className="fs-6 my-2 text-danger" >{errors.username? errors.username : null}</p>
                            </div>

                            <div className="my-2">
                                <InputLabel forInput="password" value="Password" className="text-white pb-2" />

                                <TextInput
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="w-100"
                                    autoComplete="new-password"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <p className="fs-6 my-2 text-danger" >{errors.password? errors.password : null}</p>
                            </div>

                            <div className="mt-2 mb-5">
                                <InputLabel forInput="password_confirmation" value="Confirm Password" className="text-white pb-2" />

                                <TextInput
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="w-100"
                                    handleChange={onHandleChange}
                                    required
                                />
                                <p className="fs-6 my-2 text-danger" >{errors.password_confirmation? errors.password_confirmation : null}</p> 
                                
                            </div>

                            <div className="my-2">
                                <Link href={route('login')} className="text-white text-decoration-none pr-5 mr-2">
                                    Already registered?
                                </Link>

                                <PrimaryButton className="" processing={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      logo: state.logo
    }
}
  
export default connect(mapStateToProps,{getLogo})(Register);