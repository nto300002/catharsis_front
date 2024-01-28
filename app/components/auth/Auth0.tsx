'use client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
type Props = {
  children?: React.ReactNode;
};
const Auth0 = ({ children }: Props) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Auth0;
