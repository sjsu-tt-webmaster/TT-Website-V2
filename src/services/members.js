import dbConnect from "../services/dbConnect";
import Member from "../models/member";
import { NextResponse } from "next/server";

async function getMembers() {
    try {
      const members = await Member.find({}).sort({ class: 1 });
      
      // If no members are found, return null
      if (!members || members.length === 0) {
        return null;
      }
  
      return members;
    } catch (err) {
      console.error("Error fetching members:", err.message);
      return null; // Return null in case of an error
    }

}

async function createMember(className, name, email, phone) {
    try {
      const member = await Member.create({ class: className, name: name, email: email, phone: phone });
  
      return member;
    } catch (err) {
      console.error("Error fetching members:", err.message);
      return null; // Return null in case of an error
    }

}

export {getMembers, createMember};