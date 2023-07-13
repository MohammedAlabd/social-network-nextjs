import Image from "next/image";
import blogIcon from "../../public/blog.svg";

const Department = ({ from }: { from: string }) => {
	let txtSize;
	let height;
	let width;
	let border;
    let bgColor
    let ghost
	if (from === "nav") {
		txtSize = "xl ml-4";
		height = 50;
		width = 40;
		border = "";
        bgColor = ""
        ghost = ""
	} else if (from === "publisher") {
		txtSize = "l mt-3";
		height = 30;
		width = 20;
		border = "border-4 border-green-600 h-6";
        bgColor = "bg-base-300" 
        ghost = "btn-ghost"
	}
	return (
		<button
			className={`${ghost} normal-case text-${txtSize} w-${width} h-${height} ${bgColor} flex`}
		>
			<Image
				src={blogIcon}
				alt="blogIcon"
				width={width}
				height={height}
				className="mr-2"
			/>
			المدونة
			<div className={border}></div>
		</button>
	);
};

export default Department;
