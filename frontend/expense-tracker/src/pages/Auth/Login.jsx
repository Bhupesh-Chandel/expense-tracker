import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState(null);

  const navigate = useNavigate();

  return (
    <AuthLayout>

      <div className='h-3/4 lg:w-[70%] md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back !</h3>
        <p className='text-xs text-slate-700 mt-1.25 mb-6'>Please enter your details to login in</p>
      </div>

      {/* <form action="" onSubmit={}></form> */}


    </AuthLayout>
  )
}

export default Login