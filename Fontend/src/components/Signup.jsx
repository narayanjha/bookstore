import React from 'react'

const Signup = () => {
  return (
    <>
    <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Sign</h3>
                        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-4">
                            Email
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <input
                                    id="price"
                                    name="price"
                                    type="text"
                                    placeholder="Enter your email."
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-4">
                            Password
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <input
                                    id="price"
                                    name="price"
                                    type="password"
                                    placeholder="Enter your password."
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between mt-4'>
                        {/* <p className='flex justify-between'>Not registered? <Link to="/signup" className='bg-black text-white px-3 py-2 ml-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer'>Signup</Link></p> */}
                        </div>
                        
                    </div>
                </dialog>
    </>
  )
}

export default Signup