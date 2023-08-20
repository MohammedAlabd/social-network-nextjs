import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FacebookIcon, LinkedInIcon, TwitterIcon, EmailIcon, SandwichButton } from './icons';
import { Post } from './usersDummyData';

type Props = {
  post: Post;
};
export default function PostListItem({ post }: Props) {
  const { t } = useTranslation('common');
  return (
    <div>
      <div key={post.id} className="mx-20 rounded-lg bg-white p-4 shadow">
        <div className="flex items-center">
          <Image
            src={post.userPhoto}
            alt="Landscape picture"
            width={800}
            height={500}
            className="mask mask-squircle w-14"
          />
          <div className="flex flex-col">
            <span className="ml-2">{post.username}</span>
            <span className="ml-2 text-sm text-red-500">{post.userRank}</span>
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
                  <Link href="/.">{t('save post')}</Link>
                </li>
                <li>
                  <Link href="/.">{t('mute post')}</Link>
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
                        <Link href="/.">{t('Hide from active feed')}</Link>
                      </li>
                      <li>
                        <Link href="/.">{t('Report post')}</Link>
                      </li>
                      <li>
                        <Link href="/.">
                          {t('Block')} {post.username}
                        </Link>
                      </li>
                      <li>
                        <Link href="/.">
                          {t('Report')} {post.username}
                        </Link>
                      </li>
                      <li>
                        <Link href="/.">{t('Hide space')}</Link>
                      </li>
                      <li>
                        <Link href="/.">{t('copy post ID')}</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2">{post.postText}</div>
        <Image
          src={post.postPhoto}
          alt="Landscape picture"
          width={800}
          height={500}
          className="mt-2 w-96 rounded-lg bg-base-100 shadow-xl"
        />
      </div>
    </div>
  );
}
