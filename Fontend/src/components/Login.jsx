import React from 'react'
import { useForm } from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className="font-bold text-lg">Login</h3>
                        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-4">
                            Email
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email."
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="flex text-xs text-red-400 pt-1">{errors.email && <span>Email is required</span>}</div>
                        </div>
                        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-4">
                            Password
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password."
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    {...register("password", { required: true })}
                                />
                            </div>
                            <div className="flex text-xs text-red-400 pt-1">{errors.password && <span>Password is required</span>}</div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <button className='bg-pink-500 text-white px-5 py-2 rounded-sm cursor-pointer hover:bg-pink-700 duration-300' onClick={handleSubmit(onSubmit)}>Login</button>
                            <div className='flex justify-between items-center'>
                                <p>Not registered? <button onClick={() => document.getElementById('my_modal_4').showModal()} className='btn btn-link btn-link-hover text-pink-500'>Signup</button></p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login