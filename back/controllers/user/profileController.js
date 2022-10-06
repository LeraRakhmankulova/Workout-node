//@desc user profile
//@route get /api/users/profile
//@access private
export const getUserProfile = async (req, res, next) => {
  const user = {
    name: "Mc Valera",
    age: 20,
  };

  await res.json(user);
};
