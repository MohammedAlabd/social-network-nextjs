import Image from 'next/image';
import CreatPost from './CreatPost';
import { FacebookIcon, LinkedInIcon, TwitterIcon, EmailIcon, SandwichButton } from './icons';
import { User, users } from './usersDummyData';

export default function Index() {
  return (
    <div className="space-y-4">
      <CreatPost />
      {users.map((user: User) => (
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
                <div tabIndex={0} className="btn m-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow">
                  <li>
                    <a>save post</a>
                  </li>
                  <li>
                    <a>mute post</a>
                  </li>
                  <li>
                    <details>
                      <summary>share</summary>
                      <ul className="bg-base-100 p-2">
                        <li>
                          <a>
                            <FacebookIcon />
                          </a>
                        </li>
                        <li>
                          <a>
                            <LinkedInIcon />
                          </a>
                        </li>
                        <li>
                          <a>
                            <TwitterIcon />
                          </a>
                        </li>
                        <li>
                          <a>
                            <InstagramIcon />
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>more</summary>
                      <ul className="bg-base-100 p-2">
                        <li>
                          <a>Hide from active feed</a>
                        </li>
                        <li>
                          <a>Report post</a>
                        </li>
                        <li>
                          <a>Block {user.username}</a>
                        </li>
                        <li>
                          <a>Report {user.username}</a>
                        </li>
                        <li>
                          <a>Hide space</a>
                        </li>
                        <li>
                          <a>copy post ID</a>
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
      ))}
    </div>
  );
}
