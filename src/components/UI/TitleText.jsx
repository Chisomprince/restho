export default function TitleText({ children }) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <img
        className="left-vec"
        src="assets/images/icon/sub-title-vec.svg"
        alt="sub-title-vec"
      />
      <span className="font-jost text-lg text-[#bf9444]">{children}</span>
      <img
        className="right-vec"
        src="assets/images/icon/sub-title-vec.svg"
        alt="sub-title-vec"
      />
    </div>
  );
}
