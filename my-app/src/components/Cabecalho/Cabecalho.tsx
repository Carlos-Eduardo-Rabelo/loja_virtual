import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <div className="relative w-full bg-linear-to-tl from-fuchsia-500 to-violet-500">
      <div className="flex w-full h-40 justify-around md:justify-between items-center relative z-10">
        <h1 className="md:ml-40 text-2xl text-white no-underline hover:underline font-sans">
          Meu Site
        </h1>
        <Menu />
      </div>
    </div>
  );
}
