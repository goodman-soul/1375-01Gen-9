import { NavLink, Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "首页" },
  { to: "/learning", label: "学习路线" },
  { to: "/performances", label: "演出信息" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-ink-line-soft">
      <div className="container flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-serif text-xl text-ink tracking-widest1 hover:text-cinnabar transition-colors duration-400"
        >
          琴 韵
        </Link>
        <nav>
          <ul className="flex items-center gap-8 md:gap-10">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `relative text-[15px] tracking-wider1 py-1 transition-colors duration-300 ${
                      isActive
                        ? "text-cinnabar"
                        : "text-ink-soft hover:text-pine"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute left-0 -bottom-0.5 h-px bg-cinnabar transition-all duration-400 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
