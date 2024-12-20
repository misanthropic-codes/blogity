import HeroSection from "./home/HeroSection";
import Posts from "./home/Posts";
import CalloutSection from "./home/CalloutSection";

export default function Home() {
  return (
    <>
      <div className="container">
        <HeroSection />
        <Posts />
      </div>
      <CalloutSection />
    </>
  );
}
