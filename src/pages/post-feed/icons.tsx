import Image from 'next/image';
import facebook from '../../../public/media/icons/facebook.svg';
import Linkedinicon from '../../../public/media/icons/LinkedInIcon.svg';
import Twittericon from '../../../public/media/icons/TwitterIcon.svg';
import Email from '../../../public/media/icons/Email.svg';
import sandwichbutton from '../../../public/media/icons/sandwichButton.svg';

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
