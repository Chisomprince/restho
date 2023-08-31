import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import MenuList from "@/components/MenuList";
import NewItemSection from "@/components/NewItemSection";
import PopularItem from "@/components/PopularItem";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ExperienceSection />
      <NewItemSection />
      <PopularItem />
      <MenuList />
      {/* <Footer /> */}
    </main>
  );
}
