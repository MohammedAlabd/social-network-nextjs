import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, LinkedInIcon, TwitterIcon, EmailIcon, SandwichButton } from './icons';
import { User } from './usersDummyData';

type Props = {
  user: User;
};
export default function PostListItem({ user }: Props) {
  return (
    <div>
      <div key={user.id} className="mx-20 rounded-lg bg-white p-4 shadow">
        <div className="flex items-center">
          <Image
            src={user.userPhoto}
            alt="Landscape picture"
            width={800}
            height={500}
            className="mask mask-squircle w-14"
          />
          <div className="flex flex-col">
            <span className="ml-2">{user.username}</span>
            <span className="ml-2 text-sm text-red-500">{user.userRank}</span>
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
                  <Link href="/.">save post</Link>
                </li>
                <li>
                  <Link href="/.">mute post</Link>
                </li>
                <li>
                  <details>
                    <summary>share</summary>
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
                    <summary>more</summary>
                    <ul className="bg-base-100 p-2">
                      <li>
                        <Link href="/.">Hide from active feed</Link>
                      </li>
                      <li>
                        <Link href="/.">Report post</Link>
                      </li>
                      <li>
                        <Link href="/.">Block {user.username}</Link>
                      </li>
                      <li>
                        <Link href="/.">Report {user.username}</Link>
                      </li>
                      <li>
                        <Link href="/.">Hide space</Link>
                      </li>
                      <li>
                        <Link href="/.">copy post ID</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2">{user.text}</div>
        <Image
          src={user.photo}
          alt="Landscape picture"
          width={800}
          height={500}
          className="mt-2 w-96 rounded-lg bg-base-100 shadow-xl"
        />
      </div>
    </div>
  );
}
