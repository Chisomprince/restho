export default function SectionTitle({ children, className }) {
  return (
    <h2
      className={
        "text-3xl lg:text-[60px] font-cormorant text-center  font-bold " +
        className
      }
    >
      {children}
    </h2>
  );
}
