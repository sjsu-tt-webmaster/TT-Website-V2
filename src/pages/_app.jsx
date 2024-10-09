import { Inter, Lora } from "next/font/google";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Login from "../components/login";
import "../styles/styles.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Lora({ subsets: ["latin"], variable: "--font-serif" });

const metadata = {
  title: "Theta Tau | Omega Epsilon Chapter",
  description: "The Omega Epsilon Chapter of Theta Tau at San José State University",
};

function App({ Component, pageProps }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-start justify-start">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <style>{`
      :root {
        --font-sans: ${sans.variable};
        --font-serif: ${serif.variable};
      }
      `}</style>
      <Header />
      <section className="w-full grow px-6 pt-28">
        <Login />
        <Component {...pageProps} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
