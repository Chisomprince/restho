import MenuItem from "./MenuItem";
import SectionTitle from "./UI/SectionTitle";
import TitleText from "./UI/TitleText";

export default function MenuList() {
  return (
    <div>
      <div className="container mx-auto mt-[150px]">
        <TitleText>Menu List</TitleText>
        <SectionTitle>Our Menu List</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-8 p-4 lg:p-0 mt-12">
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </div>
  );
}
