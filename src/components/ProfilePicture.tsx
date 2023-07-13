import Image from "next/image";
import demo from "../../public/profile.jpg";

const ProfilePicture = ({ from } : { from: string }) => {
  let dimensions;

  if (from === "likes") {
    dimensions = 15;
  } else if (from === "blog") {
    dimensions = 24;
  } else if (from === "profile") {
    dimensions = 30;
  }

  return (
    <div className={`w-${dimensions} h-${dimensions} rounded-full overflow-hidden mr-7`}>
      <Image className="w-full h-full" src={demo} alt="profilePicture"  />
    </div>
  );
};

export default ProfilePicture;