import Image from "next/image";
import demo from "../../public/profile.jpg";

const ProfilePicture = ({ from } : { from: string }) => {
  let dimensions = 0;

  if (from === "likes") {
    dimensions = 15;
  } else if (from === "blog") {
    dimensions = 16;
  } else if (from === "profile") {
    dimensions = 30;
  }

  return (
    <div className={`w-${dimensions} h-${dimensions} rounded-full overflow-hidden mr-7`}>
      <Image width={dimensions*4} height={dimensions*4} src={demo} alt="profilePicture"  />
    </div>
  );
};

export default ProfilePicture;