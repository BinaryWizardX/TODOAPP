'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Navigate() {

    const router = useRouter();

    useEffect(() => {
      router.push('/sign-in');
    }, [router]);
  return (
    <div>
      
    </div>
  )
}

export default Navigate;