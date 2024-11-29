import BlogsCard from "@/components/BlogsCard";
import programming from '../../../public/images/programing.jpg'
import Ai from '../../../public/images/Ai.webp'
import nextjs from '../../../public/images/nextjs15.png'
import jsvsts from '../../../public/images/jsvstscompare.jpg'
import python from '../../../public/images/python.webp'
import AGI from '../../../public/images/AGI.jpg'

export default function Blogs() {
  return (
    <div className="flex ">
  <div className="flex justify-center gap-6 flex-wrap my-10">
    
    <BlogsCard 
    image={programming}
    title='Programming Fundamentals'
    content="Programming is a skill that powers our digital age, forming the backbone of websites, mobile apps, software, and countless devices we use daily. Whether you are a budding coder or..."
    button="/blog/programming"
    />
    
    
    <BlogsCard 
    image={Ai}
    title='Artificial Intelligence'
    content="Artificial Intelligence (AI) is no longer just a futuristic concept from science fiction; it is an integral part of our daily lives, shaping industries, revolutionizing technologies, and redefining human interaction..."
    button="/blog/ai"
    />
    
    
    <BlogsCard 
    image={nextjs}
    title='Next JS 15'
    content="Next.js has long been the go-to framework for building fast, scalable, and SEO-friendly React applications. With the release of Next.js 15, the framework has taken a giant leap forward..."
    button="/blog/nextjs15"
    />
    
    
    <BlogsCard 
    image={jsvsts}
    title='JavaScript vs Typescript'
    content="JavaScript and TypeScript are two of the most popular programming languages in modern web development. While JavaScript has been a cornerstone of web applications for decades..."
    button="/blog/javascriptvstypescript"
    />
    <BlogsCard 
    image={python}
    title='Python Programming'
    content="Python is one of the most popular and versatile programming languages in the world today. Renowned for its simplicity and readability, Python has become a favorite among beginners and.."
    button="/blog/python"
    />
    <BlogsCard 
    image={AGI}
    title='Artificial General Intelligence'
    content="Artificial General Intelligence (AGI) is one of the most ambitious goals in the field of artificial intelligence. While current AI systems excel at specific tasks, AGI aims to create machines capable of..."
    button="/blog/artificial-genral-intelligence"
    />
    
 
    
  </div>
  </div>
  );
}
