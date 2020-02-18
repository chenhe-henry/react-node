const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  googleDisplayName: String,
  googleGivenName: String,
  googlePhoto: String
});

mongoose.model("users", userSchema);
