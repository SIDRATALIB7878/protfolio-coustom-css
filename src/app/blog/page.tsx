import Link from "next/link";
import Image from "next/image";
// import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
   <header className="blog">
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
   
      {/* Card Section */}
      
      <div className="cards">
          <div className="card">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURW5DSfaOpdDfJC0_yQWQyATQ92uQy8WATg&s"}alt=""className="cardImage"/>
            <h1>BURGER</h1>
            <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
            <Link href="/card1"><button className="cardButton">ReadMore</button></Link>
          </div>
      
      {/* <div className="cards"> */}
        
          <div className="card">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5dwKp1McRLdpaT2n0SmrcN1-HTVo9jQN8A&s"}alt="" className="cardImage"/>
            <h1>PIZZA</h1>
            <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
            <Link href="/card2"><button className="cardButton">ReadMore</button></Link>
          </div>
      {/* </div> */}
      
      {/* <div className="cards"> */}
        
        <div className="card">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPNgNLJQ43n4GroJybmjCMev7u90YZvM5LA&s"}alt="" className="cardImage"/>
          <h1>SALAD</h1>
          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.
          </p>
          <Link href="/card3">
            <button className="cardButton">ReadMore</button>
          </Link>
        </div>
    </div>
    
    <div className="cards">
        
        <div className="card">
          <img src={"https://t4.ftcdn.net/jpg/06/09/35/79/360_F_609357995_9f5MTF73kiu6UYAtpJZRT9BFWet4l3fX.jpg"}alt="" className="cardImage"/>
          <h1>CHICKEN FRIED RICE</h1>
          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
          <Link href="/card4"><button className="cardButton">ReadMore</button> </Link>
        </div>
    {/* </div> */}

    {/* <div className="cards"> */}
        
        <div className="card">
          <img src={"https://whatscookinchicago.com/wp-content/uploads/2024/02/620_ed1ac211-4a2e-422d-9a4d-b3ebbcc6b5cc.png"}alt="" className="cardImage"/>
          <h1>GRILLED SALMON </h1>
          <p className="cardText"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.</p>
          <Link href="/card5"><button className="cardButton">ReadMore</button></Link>
        </div>
    {/* </div> */}

     {/* <div className="cards"> */}
        
        <div className="card">
          <img src={"https://media.30seconds.com/tip/md/Chocolate-Pancakes-Recipe-Theyll-Come-Running-When-You-Ser-14932-b23b9a54c2-1627185580.jpg"}alt="" className="cardImage"/>
          <h1>PANCAKES</h1>
          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius dolorum doloribus, ipsa molestiae eum nihil totam vitae, architecto perspiciatis omnis velit magni aspernatur?fugit omnis velit magni aspernatur.
          </p>
          <Link href="/card6"><button className="cardButton">ReadMore</button></Link>
        </div>
    </div>
      </header>

      
  );
}
