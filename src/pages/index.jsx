import Image from "next/image";

const PILLARS = [
  {
    name: "Brotherhood",
    caption:
      "We forge lifelong bonds of fraternal friendship, a journey that develops a network of lasting personal and professional relationships. We foster an inviting, safe, and social environment in which our members become lifelong friends.",
  },
  {
    name: "Professionalism",
    caption:
      "We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.",
  },
  {
    name: "Community Service",
    caption:
      "We are known for our service to our college, university and the larger community. Our service projects create a unifying environment for learning and personal growth for our members.",
  },
];

const Home = function Home() {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-28 text-center">
        <Image className="w-48" src="/tt.png" alt="" width={1500} height={2099} />
        <h2 className="mt-8 font-serif text-5xl font-semibold">Theta Tau</h2>
        <h3 className="mt-4 font-serif text-3xl font-medium">San José State University</h3>
      </section>
      <section className="flex w-full flex-col items-center justify-center bg-gray-700 px-8 py-16 text-center text-white">
        <div className="max-w-2xl">
          <h4 className="font-semibold uppercase tracking-widest">About Us</h4>
          <p className="mt-4 font-light">
            Theta Tau is a co-ed Engineering Fraternity here at San Jose State. The purpose of Theta Tau is to develop
            and maintain a high standard of professional interest among its members, and to unite them in a strong bond
            of fraternal fellowship.
          </p>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center px-8 py-16 text-center">
        <div className="max-w-6xl">
          <h4 className="font-semibold uppercase tracking-widest">Our Three Pillars</h4>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.name}
                className="rounded bg-gray-700 p-6 text-white transition hover:-translate-y-1 hover:bg-white hover:text-darkRed hover:shadow"
              >
                <h5 className="text-2xl font-semibold">{pillar.name}</h5>
                <p className="mt-4 font-light">{pillar.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
