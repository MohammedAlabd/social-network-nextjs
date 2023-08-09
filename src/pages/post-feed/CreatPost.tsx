/* eslint-disable no-shadow */
import Image from 'next/image';
import React from 'react';
import { UserType } from './usersDummyData';

type Props = {
  user: UserType;
};

export default function CreatPost({ user }: Props) {
  return (
    <>
      <div className="space-y-4">
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
                <p className="">Lets GET STARTED WITH A QUESTION</p>
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
      </div>
      ;
    </>
  );
}
