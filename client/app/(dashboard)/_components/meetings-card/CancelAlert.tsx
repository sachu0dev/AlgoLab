import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { AlertDialogPros } from '@/types'


  
  const CancelAlert:React.FC<AlertDialogPros> = ({children,name,id}) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent className='dark:bg-black bg-slate-100'>
        <AlertDialogHeader>
          <AlertDialogTitle>{`Are you sure to cancel/delete this ${name} meeting`}</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your this
            meeting and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  export default CancelAlert