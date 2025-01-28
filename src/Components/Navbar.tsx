import TypeScript from "../assets/typescript";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm z-40 sticky top-0 rounded-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
        Manga
          <span className="-rotate-10">
            <TypeScript width={"40px"} height={"30px"} />
          </span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <label className="input ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow focus:w-full w-[20%] transition-all duration-200" placeholder="Search" />
              <kbd className="kbd kbd-sm">Ctrl</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export const Drawer = () => {
  return (
    <div className="drawer lg:drawer-open sticky top-2 hidden lg:flex">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Siguiendo</a>
          </li>
          <li>
            <a>Library</a>
          </li>
          <li>
            <a>MDList</a>
          </li>
          <li>
            <a>My Groups</a>
          </li>
          <li>
            <a>Reading History</a>
          </li>
          <li>
            <a>Random</a>
          </li>
          <li>
            <a>Rencently Added</a>
          </li>
          <li>
            <a>Latest updates</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
