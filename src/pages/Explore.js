import React from "react";
import ProblemCard from "../components/ProblemCard";

const problems = [
    {
      title: "Depression",
      quote: "You're not alone. Better days are coming.",
      videoUrl: "https://www.youtube.com/embed/B5CE3xeyTUg", // Example: Motivational speech by Eric Thomas
    },
    {
      title: "Love Failure",
      quote: "Sometimes, a breakup is a breakthrough.",
      videoUrl: "https://www.youtube.com/embed/79lVYOA_shA", // Example: Motivational speech by Apollos Hester
    },
    {
      title: "Anxiety",
      quote: "Take a deep breath. You’re doing better than you think.",
      videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk", // Example: Motivational speech by Maya Gabeira
    },
    {
      title: "Family Pressure",
      quote: "You have the right to live your life your way.",
      videoUrl: "https://www.youtube.com/embed/NcPbL9xfn8c", // Example: Motivational speech by Deepika Padukone
    },
    {
      title: "Career Confusion",
      quote: "It's okay to take time to figure things out.",
      videoUrl: "https://www.youtube.com/embed/z8mFZ_nhKWU", // Example: Steve Jobs' motivational speech
    },
    {
      title: "Financial Struggles",
      quote: "Your hustle will pay off one day.",
      videoUrl: "https://www.youtube.com/embed/r9lcwI5iErE", // Example: Motivational speech by Denzel Washington
    },
    {
      title: "Fear of Failure",
      quote: "Failure is the first step to success.",
      videoUrl: "https://www.youtube.com/embed/ZtLk3x4kKYI", // Example: Speech by Yash (Rocky from KGF)
    },
    {
      title: "Social Anxiety",
      quote: "You don’t need to impress anyone, just be you.",
      videoUrl: "https://www.youtube.com/embed/siokbcoj0uM", // Example: Motivational speech by Brené Brown
    },
    {
      title: "Peer Pressure",
      quote: "Don’t change to fit in. Be proud of who you are.",
      videoUrl: "https://www.youtube.com/embed/lc0FMgqTmFs", // Example: Motivational speech by Eric Thomas
    },
    {
      title: "Low Self-Confidence",
      quote: "You are enough, just as you are.",
      videoUrl: "https://www.youtube.com/embed/8KXkiY2JTXM?si=vrG-fIPTHC-4UvBA", // Example: Speech by Shah Rukh Khan
    },
    {
      title: "Heartbreak",
      quote: "Pain shapes you into a stronger version of yourself.",
      videoUrl: "https://www.youtube.com/embed/nVk4XGa3fFE", // Example: Motivational speech by Sandeep Maheshwari
    },
    {
      title: "Lack of Motivation",
      quote: "Discipline beats motivation. Show up every day.",
      videoUrl: "https://www.youtube.com/embed/pyFQPBkdOZE", // Example: Speech by Gaur Gopal Das
    },
    {
      title: "Lazyness",
      quote: "Success is the sum of small efforts, repeated daily.",
  
      videoUrl: "https://www.youtube.com/embed/n2a8j-TiSEw", // Example: Speech by Gaur Gopal Das
    },
    {
      title: "Study",
      quote: "Success is the sum of small efforts, repeated daily.",
  
      videoUrl: "https://www.youtube.com/embed/_6qs2HR7F9M", // Example: Speech by Gaur Gopal Das
    },


  ];
  
const Explore = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
      {" "}
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Choose Your Struggle
      </h1>{" "}
      {problems.map((item, idx) => (
        <ProblemCard
          key={idx}
          title={item.title}
          quote={item.quote}
          videoUrl={item.videoUrl}
          caption={item.caption}
        />
      ))}{" "}
    </div>
  );
};

export default Explore;
