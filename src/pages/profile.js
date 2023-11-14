const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    defaultAddress: "",
  });

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div>
        <p className="mb-2">
          <strong>Full Name:</strong> {userProfile.fullName}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {userProfile.email}
        </p>
        <p className="mb-2">
          <strong>Phone Number:</strong> {userProfile.phoneNumber}
        </p>
        <p className="mb-2">
          <strong>Default Address:</strong> {userProfile.defaultAddress}
        </p>
      </div>
    </div>
  );
};

export default Profile;
