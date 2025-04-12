import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return(
        <div className="flex w-screen h-30 bg-blue-400 justify-evenly items-center">
            <h1 className="text-2xl text-white font-sans">Meu Site</h1>
            <Menu/>
        </div>
    )
}