import Link from "next/link";
import { Facebook, Twitter, Twitch, Instagram } from "lucide-react";

const Footer = () => {
  const socialMediaList = [
    {
      label: "Facebook",
      path: "/",
      icon: <Facebook className="text-gray-700 transition hover:opacity-75" />,
    },
    {
      label: "Instagram",
      path: "/",
      icon: <Instagram className="text-gray-700 transition hover:opacity-75" />,
    },
    {
      label: "Twitter",
      path: "/",
      icon: <Twitter className="text-gray-700 transition hover:opacity-75" />,
    },
    {
      label: "Twitch",
      path: "/",
      icon: <Twitch className="text-gray-700 transition hover:opacity-75" />,
    },
  ];

  const siteLinks = [
    { label: "Terms & Conditions", path: "/" },
    { label: "Privacy Policy", path: "/" },
    { label: "Cookies", path: "/" },
  ];

  return (
    <footer className="w-full bg-gray-900">
      <div className="max-w-screen-xl pt-16 pb-8 mx-auto sm:px-6 lg:pt-24">
        <div className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            {siteLinks.map((link) => (
              <Link
                href={link.path}
                className="text-gray-500 transition hover:opacity-75"
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
            {socialMediaList.map((media) => (
              <Link key={media.label} href={media.path}>
                {media.icon}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
