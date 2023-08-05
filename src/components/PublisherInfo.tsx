import Link from 'next/link';
import Image from 'next/image';
import { SectionData, UserData } from '@/schemas.tsx';
import ReactAvatar from './ReactAvatar.tsx';

function PublisherInfo({ userData, section }: { userData: UserData; section: SectionData }) {
  return (
    <div>
      <div className="flex">
        <button type="button">
          <ReactAvatar title="test" src={userData.profilePicture} size="60" round />
        </button>
        <div className="ml-3 flex flex-col">
          <Link href="/post" className="text-l mb-1">
            {userData.name}
          </Link>
          <Link href="/post" className="text-l">
            {userData.membership}
          </Link>
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <button
          type="button"
          className="w-18 btn-ghost flex h-5 items-center rounded-l bg-neutral-700 text-sm normal-case"
        >
          <Image src={section.SectionPhoto} alt={section.SectionName} width={18} height={18} className="mr-1" />
          {section.SectionName}
        </button>
        <div className="h-5 w-1.5 rounded-r bg-[#FBB03B]" />
      </div>
    </div>
  );
}

export default PublisherInfo;
