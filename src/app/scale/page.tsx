import Hero from "@/components/Hero";
import ScaleImg from "/public/scale.jpg";

const page = () => {
  return (
    <Hero
      imgData={ScaleImg}
      imgAlt="scale-img"
      title="Highly Scalable applications"
    />
  );
};

export default page;
