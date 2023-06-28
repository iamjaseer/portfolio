import Blogs from './components/Blogs'
import Hero from './components/Hero'
import ScrollText from './components/ScrollText'
import About1 from './components/About1'
import About2 from './components/About_2'
import Cases from './components/HomeCases'

export default function Home() {
  return (
    <>
      {/* HERO START */}
      <Hero />
      {/* HERO END */}
      {/* SCROLL TEXT START */}
      <ScrollText />
      {/* SCROLL TEXT END */}
      {/* CASES START */}
      <Cases/>
      {/* CASES END */}
      {/* ADDITION TEXT START */}
      <About1 />
      {/* ADDITION TEXT END */}
      {/* BLOG START */}
      <Blogs type="1"/>
      {/* BLOGEND */}
      {/* ABOUT START */}
      <About2 />
      {/* ABOUT END */}
    </>
  )
}



