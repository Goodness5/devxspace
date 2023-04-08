import React, { useState } from 'react';
import avatarImage from '../../../images/avatar.png';

const UpdateProfileCard = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(avatarImage);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated profile information to the server
    console.log(`Name: ${name}, Avatar: ${avatar}`);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="mb-4 flex items-center rounded-full">
          <label className="block text-gray-700 font-bold mr-2" htmlFor="avatar">
            Avatar
          </label>

          <img className="rounded-full " src={avatar} alt="Default profile picture" />
          <input
            type="file"
            id="avatar"
            className="hidden"
            // accept="image/png, image/jpeg"
            onChange={handleAvatarChange}
          />
        </div>

        <button type="submit" className='p-4 bg-regal-blue rounded-lg hover:bg-white hover:border-solid to-fair-blue'>Update profile</button>
      </form>
    </div>
  );
};

export default UpdateProfileCard;
