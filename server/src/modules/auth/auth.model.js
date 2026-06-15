import mangoose from "mongoose";

const userSchema = new mangoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.index({ username: 1 }, { unique: true });

export default userSchema;
