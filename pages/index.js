import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HOME</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
