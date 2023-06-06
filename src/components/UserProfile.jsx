import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  const navigate = useNavigate();

  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl"> Michael Roberts </p>
          <p className="text-gray-500 text-sm">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold"> info@shop.com </p>
        </div>
      </div>
      <div className="mt-5" onClick={handleLogout}>
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
          />
      </div>
    </div>

  );
};

export default UserProfile;