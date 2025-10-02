import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import {Input,Button, Logo, Logoutbtn } from './index'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useForm } from 'react-hook-form'


function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const create = async (data) => {
        setError('');
        try {
            const userData = await authService.createAccount(data);
            if(userData){
               const userData = await authService.getCurrentUser();
               if(userData){
                   dispatch(login(userData));
                   navigate('/');
               }
            }
        } catch (error) {
            setError(error.message);
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-lg`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Create a new account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Already have an account?&nbsp; 
                <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>Sign in</Link>
            </p>
            {error && <p className='text-red-600 text-center mt-2'>{error}</p>}
            <form onSubmit={handleSubmit(create)} className='mt-8'>
                <Input
                    label='Name'
                    placeholder='Enter your name'
                    type='text'
                    {...register('name', {
                        required: true,
                })}>               
                </Input>
                <Input 
                    label='Email'
                    placeholder='Enter your email'
                    type='email'
                    {...register('email', {
                        required: true,
                        validate: {
                            matchpatern: (value) => {/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(value) || 'Invalid email format'}
                        }
                    })}
                ></Input>
                <Input 
                    label='Password'
                    placeholder='Enter your password'
                    type='password'
                    {...register('password', {
                        required: true,
                        minLength: 6
                    })}
                ></Input>
                <Button type='submit' className='w-full mt-4'>Sign up</Button>
            </form>
        </div>
    </div>
  )
}

export default Signup