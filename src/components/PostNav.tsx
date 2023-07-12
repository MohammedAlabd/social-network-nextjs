import blogIcon from "../../public/blog.svg";
import Image from "next/image";

const PostNav = () => {
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<button className="btn btn-square mr-3">
						<svg
							fill="#000000"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								<g data-name="Layer 2">
									<g data-name="collapse">
										<rect
											width="24"
											height="24"
											transform="rotate(180 12 12)"
											opacity="0"
										></rect>
										<path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"></path>{" "}
										<path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"></path>{" "}
									</g>
								</g>
							</g>
						</svg>
					</button>
					<div className="border-l border-gray-500 h-16"></div>

					<a className="btn btn-ghost normal-case text-xl">
						<Image src={blogIcon} alt="blogIcon" width={40} height={50} />
						المدونة
					</a>
				</div>
				<div className="flex-none">
					<button className="btn btn-outline btn-warning">Share</button>
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="inline-block w-5 h-5 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								></path>
							</svg>{" "}
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>share</a>
							</li>
							<li>
								<a>more</a>
							</li>
						</ul>
					</div>
					<div className="border-l border-gray-500 h-16"></div>
					<button className="btn btn-square ml-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
};

export default PostNav;
