import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card1">
   <nav> 
     <a href=""><img src="https://png.pngtree.com/png-clipart/20230319/original/pngtree-restaurant-logo-design-png-image_8995745.png" alt="" className="logo"/></a>
     <div className="nav-link">
       <ul><li><Link href="/">HOME</Link></li>
       <li><Link href="about">ABOUT</Link></li>
         <li><Link href="/blog">BLOG</Link></li>
          <a className="bton" href="/contact">CONTACT ME</a>
       </ul>
       </div>
   </nav>
   
   <div className="text-box">
      <h1>BURGER</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eligendi ab, iste sapiente perspiciatis nam veritatis dolore sunt eaque incidunt aut illo enim accusamus debitis, voluptas et! Quo quisquam ducimus dolore dolores eos praesentium temporibus commodi natus, quidem perspiciatis explicabo eligendi, molestiae similique aliquam voluptatem illum? Rerum deleniti tenetur inventore?</p>
     </div>
</header>
   )}