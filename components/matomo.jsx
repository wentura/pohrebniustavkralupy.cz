export default function Matomo() {
  return (
    <div>
      {/* Tracking pixel — raw img is intentional */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        referrerPolicy="no-referrer-when-downgrade"
        src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=12&rec=1"
        className="border-0"
        alt=""
        width={1}
        height={1}
      />
    </div>
  );
}
