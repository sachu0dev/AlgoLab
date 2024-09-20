import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

import Message from "./messages"

 const index:React.FC = () => {
   return (
    <div className='flex borde px-5 py-9'>
        <aside className='p-2 border border-green flex-[0.5] shadow-md rounded-md'>
            <form className='flex flex-col p-2 space-y-2'>
            <h1 className='text-center'>Join Immediatly</h1>
                <Input type="text" placeholder='Enter meeting id'/>
                <Input type="text" placeholder='Enter joinig name'/>
                <Button type="submit">Join</Button>
            </form>
        </aside>
        <div className='bg-background px-2 pt-3 flex-[0.5] ml-16 rounded-md'>
            <h1>{"#"} ASK TO GPT</h1>
            <div className='overflow-y-auto h-[7.2rem] max-h-[7.3rem] flex flex-col'>
            </div>
            <form className='flex items-center space-x-2 my-[5px] '>
            <Input type="text" className='dark:bg-gray-900 bg-slate-900' placeholder='you have any doubt if yes feel free to ask me'/>
            <Button className='p-4' type="submit">Join</Button>
            </form>
        </div>
    </div>
   )
 }
 
 export default index