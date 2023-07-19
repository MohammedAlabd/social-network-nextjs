import React from "react";

const PostBody = ({ content }: { content: string[] }) => {
	return (
		<div className="ml-3 mr-3 mt-10">
			{content.map((item, index) => {
				const isRtl = /[^\u0000-\u007F]/.test(item);
				return (
					<div
						key={index}
						dir={isRtl ? "rtl" : "ltr"}
						dangerouslySetInnerHTML={{ __html: item }}
						className="mb-4"
					/>
				);
			})}
		</div>
	);
};
export default PostBody;