'use client'

import { useClerk } from '@clerk/nextjs';

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    // Clicking on this button will sign out a user
    // and reroute them to the "/" (home) page.
    <button className='text-base' onClick={() => signOut({ redirectUrl: '/' })}>
      Sign out
    </button>
  );
};