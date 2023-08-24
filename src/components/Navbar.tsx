import LoginBtn from './LoginBtn';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getStaticProps } from '@/pages';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Bell from '../../public/media/icons/Bell.svg';
import { useSession } from 'next-auth/react';

const Navbar = function (
  _Props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { t } = useTranslation('common');
  const { data: session } = useSession();
  return (
    <div className="navbar bg-[#abd9e1] px-2 shadow-xl">
      <div className="logo flex-1">
        <a className="btn-ghost btn text-xl normal-case">
          <Image
            alt="Journey الرحلة logo"
            src="https://media1-production-mightynetworks.imgix.net/asset/56053552/JOURNEYUNCROPPED2-28.png?ixlib=rails-4.2.0&amp;auto=format&amp;w=150&amp;h=100&amp;fit=crop&amp;impolicy=Avatar&amp;crop=faces"
            width="60"
            height="60"
          />
        </a>
      </div>
      <div className="flex-none">
        <div className="bell dropdown-end dropdown">
          <label tabIndex={0} className="bell btn-ghost btn-circle btn">
            <div className="bell-num indicator">
              <Image priority src={Bell} alt="Follow us on Twitter" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabIndex={0} className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="text-m border-b p-2 font-normal">{session?.user?.name} {t('liked your post')}</span>
              <button className="text-info">{t('See more')}</button>
            </div>
          </div>
        </div>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <Image src="https://media1-production-mightynetworks.imgix.net/asset/56159004/IMG_6521_2.heic?ixlib=rails-4.2.0&fm=jpg&q=100&auto=format&w=2004&h=2004&fit=crop&crop=faces&impolicy=Avatar&mask=ellipse" alt="pofile" width="100" height="100" />
            </div>
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <p className="justify-between"> {t('Hello, ')} {session?.user?.name}</p>
            </li>
            <li>
              <a className="justify-between">{t('Profile')}</a>
            </li>
            <li>
              <a>{t('Settings')}</a>
            </li>
            <li>
              <LoginBtn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;