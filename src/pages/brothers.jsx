import mongoose from "mongoose";
import { serialize } from "../utils/db";
import { getMembers } from "../services/members";
import { getClass } from "../helpers/class";

/**
 * @type {import('next').GetStaticProps}
 */
const getStaticProps = async () => {
  await mongoose.connect(process.env.DATABASE_URL);

  const members = await getMembers();

  return {
    props: { brothers: serialize(members) },
    revalidate: 60 * 60 * 24,
  };
};

/**
 * @type {import('next').NextPage}
 */
const Brothers = function Brothers({ brothers }) {
  const groupedByClass = brothers.reduce((acc, b) => {
    if (acc[b.class]) acc[b.class] = [];
    acc[b.class].push(b);

    return acc;
  });

  return (
    <section className="space-y-4">
      <h1 className="text-4xl">Brothers</h1>
      <ul>
        {brothers.map((b) => (
          <li key={b._id}>
            <h3 className="text-2xl">{b.name}</h3>
            <p className="capitalize text-gray-400">{getClass(b.class)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { getStaticProps };

export default Brothers;
