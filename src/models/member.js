import mongoose from "mongoose";
import { getClass } from "../helpers/class";

const memberSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  class: {
    type: Number,
    required: true,
    get: getClass,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    select: false,
  },
  phone: {
    type: String,
    required: false,
    select: false,
  },
});

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export default Member;
