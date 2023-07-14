import PostBody from "@/components/PostBody";
import PostNav from "@/components/PostNav";
import PublisherInfo from "@/components/PublisherInfo";

const post = () => {
	return (
		<div className="bg-base-100">
			<PostNav />
			<div className="ml-72 mt-16 mb-10">
				<PublisherInfo />
				<PostBody />
			</div>
		</div>
	);
};

export default post;
