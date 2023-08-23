import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FacebookIcon, LinkedInIcon, TwitterIcon, EmailIcon, SandwichButton } from './icons';
import { UserType } from './usersDummyData';

type Props = {
  post: UserType;
};
export default function PostListItem({ post }: Props) {
  const { t } = useTranslation('common');
  return (
    <div>
      <div key={post.creator.id} className="mx-20 rounded-lg bg-white p-4 shadow">
        <div className="flex items-center">
          <Image
            src={post.creator.avatar}
            alt="Landscape picture"
            width={800}
            height={500}
            className="mask mask-squircle w-14"
          />
          <div className="flex flex-col">
            <span className="ml-2">{post.creator.fullName}</span>
            <span className="ml-2 text-sm text-red-500">{post.creator.userRank}</span>
          </div>
          <div className="navbar justify-end">
            <div className="dropdown-end dropdown">
              <div className="btn m-1">
                <button tabIndex={0} type="button">
                  <SandwichButton />
                </button>
              </div>
              <ul className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow">
                <li>
                  <button type="button">{t('save post')}</button>
                </li>
                <li>
                  <button type="button">{t('mute post')}</button>
                </li>
                <li>
                  <details>
                    <summary>{t('share')}</summary>
                    <ul className="bg-base-100 p-2">
                      <li>
                        <Link href="/.">
                          <FacebookIcon />
                        </Link>
                      </li>
                      <li>
                        <Link href="/.">
                          <LinkedInIcon />
                        </Link>
                      </li>
                      <li>
                        <Link href="/.">
                          <TwitterIcon />
                        </Link>
                      </li>
                      <li>
                        <Link href="/.">
                          <EmailIcon />
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>{t('more')}</summary>
                    <ul className="bg-base-100 p-2">
                      <li>
                        <button type="button">{t('Hide from active feed')}</button>
                      </li>
                      <li>
                        <button type="button">{t('Report post')}</button>
                      </li>
                      <li>
                        <button type="button">
                          {t('Block')} {post.creator.fullName}
                        </button>
                      </li>
                      <li>
                        <button type="button">
                          {t('Report')} {post.creator.fullName}
                        </button>
                      </li>
                      <li>
                        <button type="button">{t('Hide space')}</button>
                      </li>
                      <li>
                        <button type="button">{t('copy post ID')}</button>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2">{post.title}</div>
        <div className="mt-2">{post.body}</div>
        <Image
          src={post.image}
          alt="Landscape picture"
          width={800}
          height={500}
          className="mt-2 w-96 rounded-lg bg-base-100 shadow-xl"
        />
      </div>
    </div>
  );
}
