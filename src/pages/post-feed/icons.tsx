import Image from 'next/image';
import facebook from '../../../public/feedPostIcons/facebook.svg';
import Linkedinicon from '../../../public/feedPostIcons/LinkedInIcon.svg';
import Twittericon from '../../../public/feedPostIcons/TwitterIcon.svg';
import Email from '../../../public/feedPostIcons/Email.svg';
import sandwichButton from '../../../public/feedPostIcons/SandwichButton.svg';

export function FacebookIcon() {
  return <Image src={facebook} alt="Facebook Icon" width={24} height={24} />;
}

export function LinkedInIcon() {
  return <Image src={Linkedinicon} alt="Facebook Icon" width={24} height={24} />;
}

export function TwitterIcon() {
  return <Image src={Twittericon} alt="Facebook Icon" width={24} height={24} />;
}

export function EmailIcon() {
  return <Image src={Email} alt="Facebook Icon" width={24} height={24} />;
}
export function SandwichButton() {
  return (
    <div tabIndex={0} className="btn m-1">
      <Image src={sandwichButton} alt="Facebook Icon" width={24} height={24} />
    </div>
  );
}
