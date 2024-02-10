import Member from "../models/member";

const getMembers = () => Member.find({}).sort({ class: 1 });

export { getMembers };
