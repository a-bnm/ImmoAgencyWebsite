import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className='container min-vw-100 min-vh-100'>
            <Head title="Log in" />

            {status && <div className="">{status}</div>}
            <div className="row min-vw-100 min-vh-100 d-flex justify-content-center align-items-center">
                <div className='w-25 h-25 bg-dark p-5'>
                  <form onSubmit={submit}>
                    <div>
                        <InputLabel forInput="email" value="Email" className="text-white" />

                        <TextInput
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <p className="fs-6 my-2 text-danger" >{errors.email? errors.email : null}</p>
                    </div>

                    <div className="mt-4">
                        <InputLabel forInput="password" value="Password" className="text-white"/>

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />
                        <p className="fs-6 my-2 text-danger" >{errors.password? errors.password : null}</p>
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                            <span className="ml-2 text-white">Remember me</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-white "
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ml-4" processing={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}
