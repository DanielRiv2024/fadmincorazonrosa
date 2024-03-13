import Link from "next/link";
export default function BoxNavigation({ menuOptions, showText }) {
  return (
    <ul>
      {menuOptions.map((option) => (
        <Link href={option.href}>
          <li key={option.id} className="flex items-center p-2 hover:bg-slate-200 cursor-pointer font-bold text-cyan-700">
          {option.icon}
          {showText ? (
            <span className="ml-2">{option.name}</span>
          ) : (
            <span className="ml-2 text-slate-100"> . </span>
          )}
        </li>
        </Link>
      ))}
    </ul>
  );
}
