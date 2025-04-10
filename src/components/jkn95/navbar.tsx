import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  //  { name: "About", href: "/about" },
   { name: "Tools", href: "/techstack" },
  { name: "Demos", href: "/demos" },
];

export default function Navbar() {
  var keycount = 0;
  return (
    <nav className="pt-16 animate-fade-in">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item, index) => (
          
          <Link
            key={item.href}
            href={item.href}
            className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
          >
            {item.name}
          </Link>
          
        ))}
      </ul>
    </nav>
  );
}
