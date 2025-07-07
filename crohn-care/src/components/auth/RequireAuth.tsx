import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import type { PropsWithChildren } from 'react'

export const RequireAuth = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
