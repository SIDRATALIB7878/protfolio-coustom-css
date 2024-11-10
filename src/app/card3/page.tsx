import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card3">
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
      <h1>SALAD</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit explicabo itaque sunt fuga, amet architecto perferendis? Ducimus voluptate quasi quas, aliquid tempore dolorem voluptatum iusto aut exercitationem maxime perferendis omnis dolor nulla eaque dignissimos enim laudantium? Explicabo praesentium corrupti facere minus, quisquam pariatur saepe odit, unde, fuga temporibus exercitationem soluta?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus optio, obcaecati unde facilis nisi. Accusamus nesciunt similique perferendis exercitationem natus blanditiis? Quos commodi tempora aperiam dolor. Aspernatur cumque repellendus suscipit nostrum modi. Eaque, nostrum. Officia consequuntur expedita incidunt? Eaque deleniti autem possimus eveniet similique culpa quidem maiores saepe fuga!</p>
     </div>
</header>
   )}