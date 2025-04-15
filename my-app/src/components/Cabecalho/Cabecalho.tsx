import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <div className="relative w-full bg-pink-400">
      <div className="flex w-full h-40 justify-around md:justify-between items-center relative z-10">
        <h1 className="md:ml-40 text-2xl text-white no-underline hover:underline font-sans">
          Meu Site
        </h1>
        <Menu />
      </div>

        <svg
            className="absolute -bottom-9 left-0 w-2/6 h-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            >
            <path
                d="M100,0 Q80,100 0,100 L0,0 Z"
                fill="#f466b6"
            />
        </svg>


    </div>
  );
}
