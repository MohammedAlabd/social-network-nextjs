import { SectionData } from '@/schemas.tsx';
import Image from 'next/image';

function PostNav({ section }: { section: SectionData }) {
  return (
    <nav className="navbar sticky top-0 z-10 h-10 bg-base-100">
      <div className="flex-1">
        <button type="button" className="mr-4 h-10 w-10">
          <Image src="/media/icons/collapse.svg" alt="Icon for collapse" width={34} height={34} />
        </button>
        <div className="h-10 border-l border-gray-500" />
        <button type="button" className="btn-sm ml-2 flex items-center text-xl normal-case">
          <Image
            src={section.SectionPhoto}
            alt={`Photo of ${section.SectionName}`}
            width={30}
            height={20}
            className="mr-2"
          />
          {section.SectionName}
        </button>
      </div>
      <div className="flex-none">
        <button type="button" className="btn-warning btn-outline btn-sm btn">
          Share
        </button>
        <div className="dropdown">
          <div className="btn-ghost btn-circle btn ml-2 mr-2">
            <Image src="/media/icons/more.svg" alt="Icon for more options" width={15} height={15} />
          </div>
          <ul className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a href="#top">share</a>
            </li>
            <li>
              <a href="#top">more</a>
            </li>
          </ul>
        </div>
        <div className="h-10 border-l border-gray-500" />
        <button type="button" className="ml-4 h-10 w-10">
          <Image src="/media/icons/close.svg" alt="collapse" width={34} height={34} />
        </button>
      </div>
    </nav>
  );
}
export default PostNav;
