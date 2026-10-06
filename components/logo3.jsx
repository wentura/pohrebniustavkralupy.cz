import CldImg from "./CldImg";

function Logo3() {
  return (
    <CldImg
      src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1706802637/pohrebniustavcibulka/logo_1_iqwfdk.png"
      alt="Logo Pohřební ústav Cibulka"
      width={256}
      height={256}
      className="img-responsive mt-0 mb-4 md:mt-8 md:mx-4 w-48 lg:w-64 h-auto"
      sizes="(max-width: 1024px) 12rem, 16rem"
    />
  );
}

export default Logo3;
