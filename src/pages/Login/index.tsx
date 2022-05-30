import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../context/AuthContext'

type State = {
  email: string
  password: string
}

export function Login() {
  const { signIn } = useContext(AuthContext)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data: State) => {
    signIn(data)
  }

  return (
    <form className="m-auto p-6 rounded-lg shadow-lg bg-white max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-6">
        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">
          Email address
        </label>
        <input
          type="email"
          className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          autoFocus
          placeholder="E-Mail"
          {...register('email', { required: true })}
        />
        {errors.email && <span className="text-normal text-red-500">This field is required</span>}
      </div>
      <div className="form-group mb-6">
        <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">
          Password
        </label>
        <input
          type="password"
          className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300 
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        {errors.password && <span className="text-normal text-red-500">This field is required</span>}
      </div>
      <button
        type="submit"
        className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">
        Sign in
      </button>
    </form>
  )
}
