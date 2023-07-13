import Image from "next/image";
import demo from "../../public/profile.jpg";

const ProfilePicture = ({ from } : { from: string }) => {
  let dimensions;

  if (from === "likes") {
    dimensions = 10;
  } else if (from === "blog") {
    dimensions = 16;
  } else if (from === "profile") {
    dimensions = 24;
  }

  return (
    <div className={`w-${dimensions} h-${dimensions} rounded-full overflow-hidden mr-3`}>
      <Image className={`w-${dimensions} h-${dimensions}`} src={demo} alt="profilePicture"  />
    </div>
  );
};

export default ProfilePicture;