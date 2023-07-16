/* eslint-disable no-shadow */
import Image from 'next/image';

export default function CreatPost() {
  interface User {
    id: number;
    userPhoto: string;
  }

  const user: User[] = [
    {
      id: 1,
      userPhoto: 'https://i.pinimg.com/236x/da/c5/f8/dac5f861cf4a5d0cfbe8f310016bea28.jpg',
    },
  ];
  return (
    <>
      <div className="space-y-4">
        {user.map((user) => (
          <div key={user.id} className="mx-20 rounded-lg bg-white  shadow">
            <div className="flex items-center ">
              <div className="p-4">
                <Image
                  src={user.userPhoto}
                  alt="Landscape picture"
                  width={800}
                  height={500}
                  className="mask mask-squircle w-14"
                />
              </div>
              <div className="px-24 text-center">
                <div className=" flex flex-col px-24 align-top ">
                  <p className="px-24 ">Lets GET STARTED WITH A QUESTION</p>
                  <h3 className="px-24">What Would you Like to find in this community?</h3>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <button type="button">
                    <span className="#ef4444 px-19 text-6xl font-bold text-red-600">&times;</span>
                  </button>
                </div>
                <div className="py-20">
                  <button type="button" className="btn-warning btn">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      ;
    </>
  );
}
