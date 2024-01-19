export default function Signature() {
  return (
    <div className="signature flex flex-col py-4 md:flex-row text-xs justify-between">
      <div>
        Pohřební ústav Cibulka,
        <br className="md:hidden" /> Pohřební ústav Kralupy &copy; 2024
      </div>
      <div>
        <a
          href="https://www.zbyneksvoboda.cz"
          target="_blank"
          className="underline underline-offset-4"
        >
          vytvořil Zbyněk Svoboda
        </a>
      </div>
    </div>
  );
}
