import React, { useContext } from "react";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfilePageForm from "../../components/profile/ProfilePageForm";
import { VendorContext } from "../../VendorContext";

export default function ProfilePage() {
  const { user } = useContext(VendorContext);
  return (
    <div>
      <ProfileHeader user={user} />
      <ProfilePageForm user={user} />
    </div>
  );
}
