import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card4">
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
      <h1>CHICKEN FRIED RICE</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maxime, officia enim nobis illo sint iure obcaecati, eos quis veniam earum necessitatibus architecto officiis autem consectetur provident? Asperiores accusamus omnis quos? Aut quia incidunt et iure quisquam esse! Est earum reiciendis, minus nulla ea recusandae quia quas blanditiis velit debitis.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam in impedit voluptatem maxime debitis deleniti. Enim veritatis, est rerum sed commodi ex necessitatibus perspiciatis blanditiis consequuntur repellat explicabo praesentium ab eius quis hic officiis vitae! Possimus, maxime nulla veritatis excepturi ea magni eligendi voluptatibus eius architecto amet error autem fuga.</p>
     </div>
</header>
   )}