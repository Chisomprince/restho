export default function ExperienceSection() {
  return (
    <div className="container mx-auto mt-12 lg:mt-[100px] px-8 lg:px-0">
      <div className="flex gap-2 ">
        <img
          className="left-vec"
          src="assets/images/icon/sub-title-vec.svg"
          alt="sub-title-vec"
        />
        <span className="font-jost text-lg text-[#bf9444]">
          Introduction of Restho
        </span>
        <img
          className="right-vec"
          src="assets/images/icon/sub-title-vec.svg"
          alt="sub-title-vec"
        />
      </div>
      <h2 className="text-3xl lg:text-[60px] font-cormorant font-bold">
        We Are Experienced Restaurant.
      </h2>

      <div className="flex flex-wrap lg:flex-nowrap gap-8 mt-12">
        <div className="lg:w-4/12 ">
          <img
            class=" w-full object-cover rounded-br-lg rounded-tl-lg"
            src="/assets/images/bg/h1-intro-left-img.png"
            alt="h1-intro-left-img"
          />
        </div>
        <div className="lg:w-8/12">
          <div className="flex items-center gap-4  flex-wrap lg:flex-nowrap ">
            <div className="border rounded-tl-xl rounded-br-xl p-4 py-6 w-48 min-w-[192px]">
              <img src="assets/images/icon/mission.svg" alt="" />
              <span className="font-jost text-2xl font-medium ">
                Our Mission
              </span>
            </div>
            <div className="">
              <p className="text-lg font-medium text-zinc-800 font-jost">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="flex gap-8 flex-wrap lg:flex-nowrap  mt-8">
            <div className="lg:w-4/6">
              <ul className="grid lg:grid-cols-2 font-medium gap-2">
                <li className="flex gap-2 text-lg text-gray-700 ">
                  <i class="bi bi-check-circle text-primary"></i>Delicious Food.
                </li>
                <li className="flex gap-2 text-lg text-gray-700 ">
                  {" "}
                  <i class="bi bi-check-circle text-primary"></i>Expert Chef.
                </li>
                <li className="flex gap-2 text-lg text-gray-700 ">
                  {" "}
                  <i class="bi bi-check-circle text-primary"></i>Cost Effective.
                </li>
                <li className="flex gap-2 text-lg text-gray-700 ">
                  {" "}
                  <i class="bi bi-check-circle text-primary"></i>Letraset
                  Sheets.
                </li>
                <li className="flex gap-2 text-lg text-gray-700 ">
                  {" "}
                  <i class="bi bi-check-circle text-primary"></i>Clean
                  Environment.
                </li>
                <li className="flex gap-2 text-lg text-gray-700 ">
                  {" "}
                  <i class="bi bi-check-circle text-primary"></i>Quality Food.
                </li>
              </ul>

              <div>
                <div className="border p-4 py-8 px-8 lg:px-16 rounded-lg mt-6">
                  <p className="text-xl lg:text-2xl  text-gray-600">
                    “Welcome our restaurant! Our Restaurant is the best as like
                    delicious food, nutrition food etc in world-wide.”
                  </p>
                </div>
                <div class="author-img flex lg:justify-center  gap-2 mt-4">
                  <img
                    className="rounded-full"
                    src="assets/images/bg/h1-intro-author.png"
                    alt=""
                  />{" "}
                  <div>
                    <p>Mr. Hamilton</p>
                    <p>CEO &Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="hidden lg:block w-2/6 object-cover rounded-br-lg rounded-tl-lg mt-16"
              src="assets/images/bg/h1-intro-right-img.png"
              alt="h1-intro-right-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
