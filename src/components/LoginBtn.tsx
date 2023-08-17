import { useSession, signIn, signOut } from 'next-auth/react';
import { useTranslation } from 'next-i18next';

export default function LoginBtn() {
  //Will be used in auth
  const { data: session } = useSession();
  const { t } = useTranslation("common");

  if (session) return (
    <>
      <button className="block py-2 text-sm justify-between" onClick={() => signOut()}>
       {t("Sign out")}
      </button>
    </>
  );
  
  return (
    <>
      <button className="block py-2 text-smjustify-between" onClick={() => signIn()}>
      {t("Sign in")}
      </button>
    </>
  );
}
