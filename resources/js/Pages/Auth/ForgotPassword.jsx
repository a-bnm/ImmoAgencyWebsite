import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/inertia-react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <div className='min-vw-100 min-vh-100 d-flex justify-content-center align-items-center'>
            <div className='min-vw-25 max-vw-25  p-5  rounded bg-dark'>
            <Head title="Forgot Password" />

            <p className="mb-4 fs-6 text-white ">
                Forgot your password? Just give us your email adress.<br/>
                An e-mail will be sent to you. 
            </p>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 "
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="">
                    <PrimaryButton className="mt-4" processing={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </div>    
        </div>

        
    );
}
