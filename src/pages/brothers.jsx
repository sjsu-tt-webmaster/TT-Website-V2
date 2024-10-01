import dbConnect from "../services/dbConnect";
import { useState } from "react";
import { serialize } from "../utils/db";
import { getMembers, createMember } from "../services/members";
import { getClass } from "../helpers/class";
import BrotherForm from "../components/brotherform";

/**
 * @type {import('next').GetStaticProps}
 */
const getStaticProps = async () => {
  await dbConnect();

  const members = await getMembers();

  return {
    props: { brothers: serialize(members || []) }, // Default to an empty array if no members are found
    revalidate: 60 * 60 * 24,
  };
};

/**
 * @type {import('next').NextPage}
 */
const Brothers = function Brothers({ brothers }) {
  const noBrothersFound = brothers.length === 0;
  const groupedByClass = brothers.reduce((acc, b) => {
    if (!acc[b.class]) acc[b.class] = [];  // Initialize an array for each new class
    acc[b.class].push(b);  // Push the current brother into the array for their class
  
    return acc;  // Return the updated accumulator object
  }, {});
  

  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <section className="space-y-4">
      <h1 className="text-4xl">Brothers</h1>
      <button onClick={openForm}>Add Brother</button>
      
      {isFormOpen && <BrotherForm onClose={closeForm} />}
      {noBrothersFound ? (
        <p>No brothers found. Add a brother to get started!</p>
      ) : (
        <ul>
          {brothers.map((b) => (
            <li key={b._id}>
              <h3 className="text-2xl">{b.name}</h3>
              <p className="capitalize text-gray-400">{getClass(b.class)}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export { getStaticProps };

export default Brothers;
