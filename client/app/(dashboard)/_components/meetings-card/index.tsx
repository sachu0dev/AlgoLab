import React from 'react'

import { CardProps } from '@/types'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { EllipsisVertical } from 'lucide-react'
  
  
const index:React.FC<CardProps> = ({name,id,time}) => {
  return (
    <Card className='min-w-[18rem] max-w-[18rem] relative bg-white dark:bg-black'>
        <CardContent className=''>
            <CardHeader>
                <CardTitle className='capitalize'>{name}</CardTitle>
                <CardDescription>{`Start on ${time}`}</CardDescription>
            </CardHeader>
            <button className='absolute right-2 top-2'><EllipsisVertical/></button>
            <div className='flex justify-end items-center space-x-2 mt-3'>
            <button className=" px-4 py-2 text-black dark:text-white backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
                Cancel
            </button>
            <button className="px-4 py-2 text-white backdrop-blur-sm border rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-purple-500 text-sm transition duration-200">
                Join
            </button>

            </div>
        </CardContent>
    </Card>
  )
}

export default index