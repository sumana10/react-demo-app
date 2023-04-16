import React from 'react'
import InnerNav from '../components/InnerNav';
import users from "../assets/images/illustration-your-users.svg";
import grow from "../assets/images/illustration-grow-together.svg";
import conversation from "../assets/images/illustration-flowing-conversation.svg"
import Hero from '../components/Hero';
import Header from '../components/Header';
const Blog = () => {
  return (
    <>   <Header/>
    <main>
    <div className="container">
    {/* <div style={{margin:"60px auto"}}>
    <h1 class="text-center" style={{textAlign:"center"}} > Blog </h1>
    </div> */}
    <div style={{marginTop:"30px"}}>
    <Hero title="Blog"/>
    </div>
    <div class="blog-post flex"  style={{margin:"40px 0", padding:"20px 0"}}>
        <div>
            <img src={users} alt="" style={{width: "80%"}}/>
        </div>
        <div>
            <h2>The Importance of Building a Community</h2>
            <p style={{marginBottom:"40px"}}>
            Building a community can help individuals and organizations connect with others who share similar interests, goals, and challenges. This can provide a sense of support and encouragement, and can help individuals and organizations overcome obstacles and achieve their objectives.
            </p>
            <button class="btn">Read More</button>
        </div>
    </div>
    <div className="blog-post flex"  style={{margin:"40px 0", padding:"20px 0"}}>
        <div>
            <img src={grow} alt="" style={{width: "80%"}}/>
        </div>
        <div>
            <h2>Why Feedback Forms Are a Thing of the Past</h2>
            <p  style={{marginBottom:"40px"}}>
            While feedback forms have been a common tool for collecting feedback from customers and stakeholders, there are a number of reasons why they may be considered a thing of the past in some contexts. Here are a few possible reasons:
            <ul>
                <li>Low response rates</li>
                <li>Limited insights</li>
                <li>Inflexibility</li>
                <li>Lack of engagement</li>

            </ul>

            </p>
            <button className="btn">Read More</button>
        </div>
    </div>
    <div className="blog-post flex" style={{margin:"40px 0", padding:"20px 0"}}>
        <div>
            <img src={conversation} alt="" style={{width: "80%"}}/>
        </div>
        <div>
        <h2>How Huddle Makes Building Communities Easy</h2>
            <p  style={{marginBottom:"40px"}}>
            Huddle makes building communities easy by offering a range of features and tools that facilitate communication, collaboration, and engagement among members. Here are some ways in which Huddle makes building communities easy.
            </p>
            <button className="btn">Read More</button>
        </div>
    </div>
    <div style={{margin:"60px auto"}}>
    <h1 class="text-center" style={{textAlign:"center"}} > </h1>
    </div>
    </div>
   </main>
    </>

  )
}

export default Blog


// <h1 className={`${className} font-xl`}>StyleSheet</h1>
// create object