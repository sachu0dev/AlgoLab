import React from 'react';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const index:React.FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className='dark:bg-black bg-slate-100'>
            <DialogHeader>
                <DialogTitle>Create Meeting</DialogTitle>
                <DialogDescription className='dark:text-white text-black'>create your upcoming meeting and solve your questions together</DialogDescription>
                <form className='p-2 flex flex-col space-y-3 '>
                    <div className='flex flex-col space-y-3'>
                      <Label htmlFor="meeting-name">Meeting Name</Label>
                      <Input type='text' id='meeting-name' placeholder='enter meeting name '/>
                    </div>

                    <div className='flex flex-col space-y-3'>
                      <Label htmlFor="date">Schedule Date</Label>
                      <Input type="date" id='date' placeholder='select date and time'/>
                    </div>

                    <div className='flex flex-col space-y-3'>
                      <Label htmlFor="number-of-user">Maxmimum User</Label>
                      <Input type="number" id='number-of-user' placeholder='enter maximum user can join do not worry it would be change'/>
                    </div>
                   
                    <DialogFooter>
                        <DialogClose className='mx-3'>Cancel</DialogClose>
                        <Button variant={"default"}  type="submit">Create</Button>
                    </DialogFooter>
                </form>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default index