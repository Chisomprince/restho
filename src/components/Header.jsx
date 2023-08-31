const navLinks = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "About",
    path: "#",
  },
  {
    title: "Menu",
    path: "#",
  },
  {
    title: "Pages",
    path: "#",
  },
  {
    title: "Blog",
    path: "#",
  },
  {
    title: "Contact",
    path: "#",
  },
];

export default function Header() {
  return (
    <header className="px-8 lg:p-4 lg:px-32 banner__hero">
      <div className="container flex justify-between items-center lg:h-16 lg:mx-auto">
        <a href="/">
          <img
            alt="image"
            class="w-28 lg:w-auto"
            src="/assets/images/icon/header1-logo.svg"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {navLinks.map((nav) => (
            <li className="flex" key={nav.title}>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-[#bf9444] uppercase font-medium"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3  bg-[#bf9444] f text-gray-50 rounded-tl-lg rounded-br-lg font-medium text-lg">
            Connect Now
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
