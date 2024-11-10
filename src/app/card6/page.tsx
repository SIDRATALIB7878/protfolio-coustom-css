import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="card6">
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
      <h1>PANCAKES</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illo tenetur id vel. Aut ipsum sapiente facilis facere ipsam quia doloremque voluptates ea molestias ex eum sint necessitatibus reprehenderit molestiae fugit corporis repellat animi, non culpa. Nisi mollitia porro sit incidunt pariatur rem, similique beatae nemo, minima tempora, fuga earum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, amet, quo, pariatur aut magni quasi rem vel ea ad culpa explicabo! Voluptatibus ipsam placeat quasi magnam deleniti omnis ullam corporis neque alias suscipit est odio, assumenda autem a. Esse, nesciunt illo. Odit voluptas, nostrum iste amet quaerat tenetur obcaecati quisquam!</p>
     </div>
</header>
   )}