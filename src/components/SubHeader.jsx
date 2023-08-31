export default function SubHeader() {
  return (
    <div className="p-4 py-3 banner__hero text-white border-b border-gray-800">
      <div className="container mx-auto flex justify-center lg:justify-between items-center   ">
        <p>
          <span className="text-[#bf9444]">Opening Hour:</span> 9.00 am to 10.00
          pm
        </p>

        <div className="lg:flex gap-10  hidden">
          <p> info@example.com</p>
          <p>Road-01, Block-B, West London City</p>
        </div>
      </div>
    </div>
  );
}
