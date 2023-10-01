import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Dev", path: "/dev" },
    { label: "Bricolage", path: "/brico" },
    { label: "Jv", path: "/video-games" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="text-lime-300 text-center ">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.path}
          className="mx-2 hover:text-lime-500"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
