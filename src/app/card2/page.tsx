import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card2">
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
      <h1>PIZZA</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod beatae soluta praesentium obcaecati recusandae blanditiis corporis magni, molestias sequi ipsam, ullam ex. Vel rem ullam, doloremque odit quas quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem temporibus consequatur non dicta alias architecto, exercitationem repellat. Et, culpa.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempora ipsa praesentium aliquam ut est natus optio maiores alias totam? Obcaecati quod quos fuga provident dolores non eum facilis id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla maiores aliquid quaerat tempora asperiores. Sint magni neque quaerat unde?</p>
     </div>
</header>
   )}