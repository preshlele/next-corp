import Hero from '@/components/Hero'
import reliableImg from '/public/reliability.jpg'

const page = () => {
  return (
   <Hero imgData={reliableImg} imgAlt='reliability-img' title='Super High Reliable Products'/>
  )
}

export default page