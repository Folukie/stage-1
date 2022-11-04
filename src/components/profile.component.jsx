import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center flex-col space-y-5 my-5">
  <div>
  <img src="/images/hero.svg" alt="hero" id="profile__img"/>
  </div>
      <p className="font-bold text-lg" id="twitter">Foluke Odus</p>
      <p className="font-bold text-lg hidden" id="slack">FolukeOdus</p>

    </div>
  );
};

export default Profile;
