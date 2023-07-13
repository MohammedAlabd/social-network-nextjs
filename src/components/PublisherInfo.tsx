import Link from "next/link";
import ProfilePicture from "./ProfilePicture";
import Department from "./Department";

const PublisherInfo = () => {
	return (
		<div>
			{/* profile picture and name */}
			<div className="flex">
				<ProfilePicture from="blog" />
				<div className="flex flex-col mt-3">
					{/* name of publisher */}
					<Link href={"/post"} className="text-xl mb-1"> محمود عبدالباري </Link>
					{/* membership */}
					<Link href={"/post"} className="text-l"> member </Link>
				</div>
			</div>
			{/* department of publisher */}
			<Department from="publisher" />
		</div>
	);
};

export default PublisherInfo;
