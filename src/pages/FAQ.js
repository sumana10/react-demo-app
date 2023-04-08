import React from "react";
import InnerNav from "../components/InnerNav";
import Accordion from "../components/Accordion";


const FAQ = () => {
  const sections = [
    {
      title: "What is a huddle community?",
      content:
        "A huddle community is a group of people who come together to provide emotional support, encouragement, and advice to one another. They often share similar experiences or interests and aim to create a safe and inclusive space for members to connect and communicate.",
    },
    {
      title: "How can I join a huddle community?",
      content:
        "There are various ways to join a huddle community, depending on the type of community and its organization. You can search online for existing communities that align with your interests or needs, or create your own community and invite like-minded people to join. Many huddle communities also exist on social media platforms or through online forums.",
    },
    {
      title: "What are the benefits of joining a huddle community?",
      content:
        "Joining a huddle community can provide a sense of belonging and connection, as well as emotional support and encouragement. It can also be a great way to network with like-minded people and learn from others who may have similar experiences or expertise. Huddle communities can also offer opportunities for personal and professional growth, as well as a platform for advocacy and activism.",
    },
    {
      title: "How can huddle communities promote inclusivity and diversity?",
      content:
        "Huddle communities can promote inclusivity and diversity by actively creating a safe and welcoming space for members of all backgrounds and identities. This can be achieved through establishing and enforcing clear guidelines and expectations for behavior and communication, as well as actively seeking out and welcoming diverse perspectives and experiences. Additionally, huddle communities can prioritize education and awareness-building around issues of diversity, equity, and inclusion.",
    },
    {
      title: "What are some common activities in huddle communities?",
      content:
        "Activities in huddle communities can vary widely depending on the type of community and its goals, but some common activities include group discussions, networking events, mentorship or coaching programs, educational workshops or seminars, and social outings or events. Many huddle communities also engage in advocacy or activism work around issues relevant to their members or the wider community.",
    },
  ];

  return (
    <>
      <InnerNav />
      <main>
      <div className="container">
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h1>Do You Have Questions ⁉</h1>
        </div>
        <Accordion sections={sections} />
      </div>
      </main>
    </>
  );
};

export default FAQ;



