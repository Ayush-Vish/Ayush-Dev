import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

function Submitbtn() {
  const {pending} = useFormStatus() ;

  return (
    <button disabled={pending} type='submit' className='group disabled:bg-opacity-50  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 text-white/90 flex items-center justify-center  gap-2  h-[3rem] w-[8rem] dark:bg-white dark:text-black  dark:hover:text-white   bg-gray-900 rounded-full outline-none transition-all'
    
    > 
    {
        pending ? 
        <span className='h-5 w-5 animate-spin rounded-full border-b-2 border-white '> </span> 
        :
        (
            <>

                Submit <span className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 '>   <  FaPaperPlane  /> </span> 
            </>
        )


    }
    
    
    </button>
  )
}

export default Submitbtn