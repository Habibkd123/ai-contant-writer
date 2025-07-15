import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center py-6 bg-background text-foreground'>
      <UserProfile />
    </div>
  )
}

export default page
