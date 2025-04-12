import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return(
        <div className="flex w-[100%] h-40 bg-blue-400 justify-evenly items-center">
            <h1 className="text-2xl text-white no-underline hover:underline font-sans">Meu Site</h1>
            <Menu/>
        </div>
    )
}