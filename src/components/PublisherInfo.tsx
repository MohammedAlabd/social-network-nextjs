import Link from "next/link";
import Avatar from "react-avatar";
import Image from "next/image";

const PublisherInfo = ({
	userData,
	section,
}: {
	userData: {
		id: number;
		name: string;
		username: string;
		profilePicture: string;
		membership: string;
	};
	section: { SectionName: string; SectionUrl: string; SectionPhoto: string };
}) => {
	return (
		<div>
			<div className="flex">
				<button onClick={() => alert("go to profile")}>
					<Avatar
						title="test"
						src={userData.profilePicture}
						onClick={() => alert("work")}
						size="60"
						round={true}
					/>
				</button>
				<div className="ml-3 flex flex-col">
					<Link href={"/post"} className="text-l mb-1">
						{userData.name}
					</Link>
					<Link href={"/post"} className="text-l">
						{userData.membership}
					</Link>
				</div>
			</div>
			<div className="mt-3 flex items-center">
				<button
					className={
						"w-18 btn-ghost flex h-5 items-center rounded-l bg-neutral-700 text-sm normal-case"
					}
					onClick={() => alert("return to feed")}
				>
					<Image
						src={section.SectionPhoto}
						alt={section.SectionName}
						width={18}
						height={18}
						className="mr-1"
					/>
					{section.SectionName}
				</button>
				<div className="h-5 w-1.5 rounded-r bg-[#FBB03B]" />
			</div>
		</div>
	);
};

export default PublisherInfo;