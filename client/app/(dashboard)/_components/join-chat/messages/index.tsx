import React from 'react'

const index = ({me}:{me:boolean}) => {
  return (
    <div className={`${me?"self-end":"self-start"} dark:bg-zinc-800 bg-slate-500 w-fit max-w-[20rem] text-wrap rounded-md p-2 my-1`}>
        {">"}  suscipit nemo aut doloribus nobis?
    </div>
  )
}

export default index