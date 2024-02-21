export default function Signature() {
  return (
    <div className="signature flex flex-col p-4 md:flex-row text-xs justify-between">
      <div>
        Pohřební ústav Cibulka,
        <br className="md:hidden" /> Pohřební ústav Kralupy &copy; 2024
      </div>
      <div>
        vytvořil&nbsp;
        <a href="https://www.zbyneksvoboda.cz" target="_blank" className="">
          Zbyněk Svoboda
        </a>
      </div>
    </div>
  );
}
