import React, { useEffect } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/input';
import { validateEmail } from '../../utils/helper';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  // useEffect for error message pull back
  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000)

  }, [error])


  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("PLease Enter a valid Email");
      return;
    }

    if (!password) {
      setError("Please input a password");
      return;
    }

    setError(null);

  }


  return (
    <AuthLayout>

      {/* <div className='h-3/4 lg:w-[80%] md:h-full flex flex-col justify-center items-center'> */}
      <div className='h-3/4 lg:w-[80%] md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back !</h3>
        <p className='text-xs text-slate-700 mt-1.25 mb-6'>Please enter your details to login in</p>


        <form action="" onSubmit={handleLogin}>

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Min 8 character"
            type="password"
          />

          {error && <p className='text-xs text-red-500 pb-2.5'>{error}</p>}

          <button type='submit' className="btn-primary">LOGIN</button>

          <p className='text-[13px] text-slate-800 mt-3'>Don't have an account?{" "}
            <Link className='font-medium text-primary underline' to="/signup">SignUp</Link>
          </p>


        </form>

      </div>


    </AuthLayout>
  )
}

export default Login

