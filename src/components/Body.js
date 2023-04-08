import React from "react";
import grow from "../assets/images/illustration-grow-together.svg";
import conversation from "../assets/images/illustration-flowing-conversation.svg";
import users from "../assets/images/illustration-your-users.svg";

const Body = () => {
  return (
    <main>
      <div className="container">
        <div className="box flex">
          <div>
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
          <div>
            <img src={grow} alt="grow" />
          </div>
        </div>
        <div className="box flex box-mobile-reverse">
          <div>
            <img src={conversation} alt="conversation" />
          </div>
          <div>
            <h2>Flowing Conversations</h2>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </p>
          </div>
        </div>
        <div className="box flex">
          <div>
            <h2>Your Users</h2>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div>
            <img src={users} alt="users" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
