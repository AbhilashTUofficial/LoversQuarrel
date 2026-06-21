import mangoose from "mongoose";

const userSchema = new mangoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
});

userSchema.index({ username: 1 }, { unique: true });

const User = mangoose.model("User", userSchema);

export default User;
