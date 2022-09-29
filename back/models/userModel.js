import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    images: {
        before: String,
        after: String
    },
  },
  {
    minimize: false,
    typestamps: true,
  }
);

userSchema.methods.matchPassword = async(enteredPassword) => {
    return await bcrypt.compare(enteredPassword, this.password) //this?
}

userSchema.pre('save', async (next) => {
    if(!this.isModified('password')){//isModified & next
        next()
    }

    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema);
export default User;

