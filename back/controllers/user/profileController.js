
//@desc user profile
//@route get /api/users/profile
//@access private
export const getUserProfile = (req, res) => {
    const user = {
        name: 'Mc Valera',
        age: 20
    }

    res.json(user)
}