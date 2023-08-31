import SectionTitle from "./UI/SectionTitle";
import TitleText from "./UI/TitleText";

export default function MenuItem() {
  return (
    <div className="border bg-gray-100 relative">
      <img
        className="absolute top-0 left-0"
        src="assets/images/icon/menu-top-left.svg"
        alt="menu-top-left"
      />
      <img
        className="absolute top-0 right-0"
        src="assets/images/icon/menu-top-right.svg"
        alt="menu-top-right"
      />
      <img
        className="absolute bottom-0 right-0"
        src="assets/images/icon/menu-btm-right.svg"
        alt="menu-btm-right"
      />
      <img
        className="absolute bottom-0 left-0"
        src="assets/images/icon/menu-btm-left.svg"
        alt="menu-btm-left"
      />
      <div className="mt-12">
        <TitleText>Welcome to Restho</TitleText>
        <SectionTitle>Indian Menu</SectionTitle>
      </div>
      <ul className="space-y-4 mt-6">
        {Array.from({ length: 7 }).map((_, index) => (
          <li
            key={index}
            className="px-6 lg:px-16 flex justify-center gap-2 font-jost w-full"
          >
            <div className="">
              <span className="font-medium text-lg">0{index + 1}.</span>
            </div>
            <div className="">
              <div className="flex justify-between items-center font-medium text-lg">
                <h4 className="whitespace-nowrap">Paneer Butter</h4>
                <span className="dot">
                  <img src="assets/images/icon/dot.svg" alt="" />
                </span>
                <span className="price">$10</span>
              </div>
              <p>
                To much delicious food in our restaurant.Visit us &amp; taste it
                early.
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center my-6">
        <p>
          <span className="text-red-700">N.B:</span> All food are available in
          restauarnt & don’t waste your food.
        </p>
        <p>Address: Mirpur DOHS, House No-167/170, Avenue-01.</p>
      </div>
    </div>
  );
}
