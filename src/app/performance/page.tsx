import Hero from '@/components/Hero'
import PerformImg from '/public/performance.jpg'

const page = () => {
  return (
    <Hero
      imgData={PerformImg}
      imgAlt="perform-img"
      title="Performance is a top priority"
    />
  );
}

export default page