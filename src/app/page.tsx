import HomeImg from "/public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero imgData={HomeImg} imgAlt="home-img" title="Professional Assembling"/>
    </>
  );
}
