import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button className="block px-4 py-2 text-sm text-gray-700" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="block px-4 py-2 text-sm text-gray-700" onClick={() => signIn()}>
          Sign in
        </button>
      </>
    );
  }
}
