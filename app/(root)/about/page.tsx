import React from "react";

const About = () => {
  return (
    <div className="px-20 text-xl">
      <p className="text-2xl font-semibold">Welcome to Last24hr,</p>
      <h3>
        {`Your go-to source for streamlined, concise news summaries designed to fit into your busy lifestyle. Our mission is to make it effortless for you to stay informed about the world around you, without the need to sift through lengthy articles or spend hours reading.

At Last24hr, we understand that in today's fast-paced world, time is of the essence. That's why we've committed ourselves to delivering the most important news stories in a format that is quick, easy to read, and highly informative. Our dedicated team of journalists and editors works around the clock to bring you the latest updates, ensuring you never miss out on critical information.`}
      </h3>
      <h3>{`Our Approach`}</h3>
      <ul>
        <li>
          <b>Concise Summaries:</b> We distill complex news stories into short,
          digestible summaries, giving you the key points and essential details
          without overwhelming you with information.
        </li>
        <li>
          <b>Timely Updates:</b>{" "}
          {`Our platform is continuously updated with the
          latest news, so you can be confident that you're getting the most
          current information available.`}
        </li>
        <li>
          <b>Wide Coverage:</b> From global events and politics to technology
          advancements and lifestyle trends, we cover a broad spectrum of topics
          to keep you well-rounded and informed.
        </li>
        <li>
          <b>User-Friendly Design:</b> Our website and mobile app are designed
          for ease of use, allowing you to quickly navigate through different
          news categories and find the stories that matter most to you.
        </li>
        <li>
          <b>Personalized Experience:</b> With features like personalized feeds
          and breaking news alerts, we tailor the news to your interests and
          preferences, making your reading experience more relevant and
          engaging.
        </li>
      </ul>
      <h3 className="font-semibold">{`Why Choose Last24hr?`}</h3>
      <p>
        {`In a world inundated with information, Last24hr stands out by cutting through the noise and delivering news that is both impactful and easy to consume. Whether you're catching up on the headlines during your morning commute, taking a quick break at work, or winding down at the end of the day, Last24hr is here to ensure you stay informed without sacrificing your valuable time.`}
      </p>
      <p>
        {`Join us at Last24hr and discover a more efficient way to keep up with the news. Because staying informed shouldn't be a time-consuming chore—it should be a seamless part of your daily routine.`}
      </p>
    </div>
  );
};

export default About;
