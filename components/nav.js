import Link from "next/link";

const links = [
  { href: "https://github.com/ricardocanelas", label: "GitHub" },
  { href: "https://twitter.com/ricardocanelas", label: "Twitter" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-xl text-blue-700 font-medium no-underline">
              Ricardo Canelas
            </a>
          </Link>
        </li>

        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
