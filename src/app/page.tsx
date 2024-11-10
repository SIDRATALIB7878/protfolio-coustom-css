import Link from 'next/link';
import Footer from "./components/footer";
import Image from "next/image";
// import Header from "./components/header";

// import Home from "./page";

export default function Home() {
  return (
   <header className="header">
   <nav> 
     <a href=""><img src="https://png.pngtree.com/png-clipart/20230319/original/pngtree-restaurant-logo-design-png-image_8995745.png" alt="" className="logo"/></a>
     <div className="nav-link">
       <ul><li><Link href="/">HOME</Link></li>
       <li><Link href="/about">ABOUT</Link></li>
         <li><Link href="/blog">BLOG</Link></li>
          <a className="bton" href="/contact">CONTACT ME</a>
       </ul>
       </div>
   </nav>
   <div className="text-box">
      <h1>HELLO EVERYONE </h1>
         <h1>Welcome to Sidra's Bistro</h1>
      <p>Experience fine dining with a modern twist.<br/>Sidra's Bistro is known for its fresh ingredients and unique recipes.</p>
      <a href=""><img src="http://pluspng.com/img-png/png-for-food-eating-well-is-always-in-season-950.png"
         alt="" className="imagee"/></a>
      <a className="btn" href="/blog">GET START</a>
    </div>
       <Footer />
       </header>
   )
  }
