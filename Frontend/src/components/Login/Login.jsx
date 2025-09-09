import React from 'react'

function Login() {
  return (
    <div>
      
<button className="btn text-2xl md:text-2xl font-bold text-indigo-600 bg-white border-none" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login </button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-slate-200">
    <form method="dialog">
      
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className=" font-bold text-lg ">Login </h3>
    <div className='mt-4 space-x-2'>
     
      
      <input type="email" placeholder='Enter Your email'  className='w-80 px-3 rounded-md outline-none'/>
    </div>
     <div className='mt-4 space-x-2 '>
      
      
      <input type="password" placeholder='Enter Your Password'  className='w-80 px-3 rounded-md outline-none'/>
    </div>

    <div className='mt-4 space-x-2 flex items-center'>
      <div className='flex '> 
         <button className='btn ml-16 '>Login </button> 
      <p className='py-2 ml-16'>Not registered? </p><a href='# ' className='text-cyan-500 py-2'>Signup</a>
      </div>
     
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login