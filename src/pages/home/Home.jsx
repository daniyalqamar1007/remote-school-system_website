import HeroSection from "./landingPage/HeroSection";
import StatsSection from "./landingPage/StatsSection";
import PortalsSection from "./landingPage/PortalsSection";
import AnalyticsSection from "./landingPage/AnalyticsSection";
import MobileAppsSection from "./landingPage/MobileAppsSection";
import FAQSection from "./landingPage/FAQSection";
import SecuritySection from "./landingPage/SecuritySection";
import CTASection from "./landingPage/CTASection";

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <StatsSection/>
        <PortalsSection/>
        <AnalyticsSection/>
        <MobileAppsSection/>
        <FAQSection/>
        <SecuritySection/>
        <CTASection/>
    </div>
  )
}

export default Home;