import Image from "next/image";
const PostNav = ({
	section,
	id,
}: {
	section: { SectionName: string; SectionUrl: string; SectionPhoto: string };
	id: number;
}) => {
	return (
			<div className="navbar sticky top-0 z-10 h-10 bg-base-100">
				<div className="flex-1">
					<button className="mr-4 h-10 w-10">
						<Image src="/collapse.svg" alt="collapse" width={34} height={34} />
					</button>
					<div className="h-10 border-l border-gray-500"></div>
					<button
						className={"btn-sm ml-2 flex items-center text-xl normal-case"}
						onClick={() => alert("return to feed")}
					>
						<Image
							src={section.SectionPhoto}
							alt={section.SectionName}
							width={30}
							height={20}
							className="mr-2"
						/>
						{section.SectionName}
					</button>
				</div>
				<div className="flex-none">
					<button className="btn-warning btn-outline btn-sm btn">Share</button>
					<div className="dropdown">
						<label tabIndex={0} className="btn-ghost btn-circle btn ml-2 mr-2">
							<Image src="/more.svg" alt="collapse" width={15} height={15} />
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
						>
							<li>
								<a>share</a>
							</li>
							<li>
								<a>more</a>
							</li>
						</ul>
					</div>
					<div className="h-10 border-l border-gray-500"></div>
					<button className="ml-4 h-10 w-10">
						<Image src="/close.svg" alt="collapse" width={34} height={34} />
					</button>
				</div>
			</div>
	);
};
export default PostNav;
