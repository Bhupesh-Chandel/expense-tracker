import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/input';
import { validateEmail } from '../../utils/helper';

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("PLease Enter a valid Name");
      return
    }

    if (!validateEmail(email)) {
      setError("PLease Enter a valid Email");
      return
    }

    if (!password) {
      setError("Please input a password");
      return
    }

    if (password != confirmPassword) {
      setError("Password and Confirm Password does'nt Match");
      return
    }

    setError(null);

  }

  return (
    <AuthLayout>

      <div className='h-3/4 lg:w-[80%] md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-1.25 mb-6'>Join us today by entering your details below</p>


        <form onSubmit={handleLogin}>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


            <Input value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="First Name"
              placeholder="john"
              type="text">
            </Input>

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

          </div>

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Min 8 character"
            type="password"
          />

          <Input value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            placeholder="Min 8 character"
            type="password">
          </Input>


          {error && <p className='text-xs text-red-500 pb-2.5'>{error}</p>}

          <button type='submit' className="btn-primary">Signup</button>

          <p className='text-[13px] text-slate-800 mt-3'>Already have an account?{" "}
            <Link className='font-medium text-primary underline' to="/login">Login</Link>
          </p>

        </form>

      </div>

    </AuthLayout>
  )
}

export default Signup