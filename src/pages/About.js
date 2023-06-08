import illustation from "../assets/images/illustration-grow-together.svg";
import communities from "../assets/images/icon-communities.svg";
import messages from "../assets/images/icon-messages.svg";
import { Hero, Feature } from '../components';

const AboutPage = () => {
  return (
    <>
      <main>
        <div className="container">

          <Hero title="About Us" illustation={illustation} />
          
          <section className="features">
            <Feature
              title="Community First"
              featureicon={communities}
              desc="Community First is a philosophy or approach to building communities that prioritizes the needs, interests, and perspectives of the community members above all else. It emphasizes the importance of fostering a strong sense of community, collaboration, and inclusivity, and encourages community members to be actively involved in shaping the direction and goals of the community."
            />
            <Feature
              title="Your Security"
              featureicon={communities}
              desc="Huddle, like most community-building platforms, typically uses encryption to protect user data during transmission. This ensures that user data is secure while being transferred between devices or over the internet. This includes features such as two-factor authentication, access restrictions, and role-based permissions."
            />
            <Feature
              title="Instant Messages"
              featureicon={messages}
              desc="Instant messaging is a feature offered by many community-building platforms, including Huddle. This feature allows users to communicate with each other in real-time, either one-on-one or in groups. Instant messaging can be a powerful tool for building community, fostering collaboration, and facilitating communication between members."
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
