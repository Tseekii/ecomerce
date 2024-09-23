import { Schema } from "mongoose";

const userSchema = new Schema<IUser>({
  updated_at: {
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.pre ("save", async function (next) {
// if(!this.isModified("password")) { // өөрчлөгдсөн эсэхийг шалгах is modified
// next();
// } else {
//  const hashedPassword= bcrypt.hashSync(this.password.toString(),10);
// this.password=hashedPassword;
// next();
// }
// });

// const User=model ("User", user Schema);

// export default User;
