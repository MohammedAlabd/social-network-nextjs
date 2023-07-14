import Image from "next/image"
import demo from "../../public/profile.jpg";


const PostImage = ({image}:{image:string }) => {
  return (
    <Image width={800} className="m-2" src={demo} alt="photo" />
  )
}

export default PostImage