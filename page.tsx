import Image from "next/image";
import Hero from "./components/hero";
import Blog from "./components/blog";
import Blog2 from "./components/blog2";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Blog/>
      <Blog2/>
    </div>
  );
}
