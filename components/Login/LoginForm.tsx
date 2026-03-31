'use client';

const LoginForm = () => {
  return (
    <form className='flex flex-col gap-6.25' onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder='Email Address *' className='px-6 py-4 placeholder:text-[15px] w-full h-12.5 border border-gray-400'/>
        <input type="password" placeholder='Password *' className='px-6 py-4 placeholder:text-[15px] w-full h-12.5 border border-gray-400'/>
        <div className="flex items-center gap-4.5">
            <input type="checkbox" className="w-7 h-7 cursor-pointer" />
            <p className='text-[14px]'>Keep me logged in. Applies to all options.
            <br /> <span className='underline cursor-pointer'>More info</span></p>
        </div>
        <button type='submit' className='uppercase font-extrabold text-[16px] px-2.5 py-1.25 bg-black border-b-[5px] border-r-[5px] border-white gap-2.5 flex items-center cursor-pointer text-white w-fit shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0.75 active:border-b-2 active:border-r-2 transition-transform duration-100 ease-out'>
            <span>Continue</span> 
            <img src='/icons/Right Arrow white.png' alt='arrow' className='w-10.5 h-8'/>
        </button>
    </form>
  )
}

export default LoginForm