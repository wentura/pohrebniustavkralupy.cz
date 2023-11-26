import Link from "next/link";

export default function Menu({ klas }) {
  klas ? klas : "";
  return (
    <div className={`flex ${klas}`}>
      <ul className="flex gap-8">
        <li>
          <Link
            href="/pohrby"
            className="hover:underline hover:underline-offset-2 hover:decoration-natyzlata hover:text-natyzlata transition ease-in-out delay-150"
          >
            pohřby
          </Link>
        </li>
        <li>
          <Link
            href="/parte"
            className="hover:underline hover:underline-offset-2 hover:decoration-natyzlata hover:text-natyzlata transition ease-in-out delay-150"
          >
            parte
          </Link>
        </li>
        <li>informace pro pozůstalé</li>
        <li>smuteční katalog</li>
        <li>galerie</li>
        <li>o nás</li>
        <li>
          <Link
            href="/kontakt"
            className="hover:underline hover:underline-offset-2 hover:decoration-natyzlata hover:text-natyzlata transition ease-in-out delay-150"
          >
            kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
}
