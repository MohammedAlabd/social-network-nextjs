import PostNav from "@/components/PostNav";
import PostTitle from "@/components/PostTitle";
import PublisherInfo from "@/components/PublisherInfo";

const post = () => {
	return (
		<div className="bg-base-100">
			<PostNav />
			<div className="ml-72 mt-16 mb-10">
				<PublisherInfo />
				<PostTitle />
			</div>
		</div>
	);
};

export default post;
