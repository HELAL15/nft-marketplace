import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

interface IProps {
  cx?:string;
  action?: string | ((formData: FormData) => void | Promise<void>);
  children:ReactNode;
}

const FormContainer:FC<IProps> = ({cx , action,children}) => {
  return (
    <>
    <form action={action} 
    className={clsx(`space-y-5 mt-8 
    md:max-w-[270px] 
    lg:max-w-[400px] 
    xl:max-w-[500px] 
    ${cx} `)}>
      {children}
    </form>
    </>
  )
}

export default FormContainer