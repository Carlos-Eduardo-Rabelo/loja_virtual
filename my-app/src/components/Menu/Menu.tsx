import Link from "next/link";

export default function Menu() {
    return(
        <nav>
            <ul className="flex flex-col md:flex-row md:mr-40">
                <Link href="/">
                    <li className="m-2 md:m-5 w-20 h-8 md:h-10 text-center content-center text-white rounded-lg md:rounded-xl border-solid border-white border-2 ">
                        Inicio
                    </li>
                </Link>
                <li className="m-2 md:m-5 w-20 h-8 md:h-10 text-center content-center text-white rounded-lg md:rounded-xl border-solid border-white border-2">
                    Produtos
                </li>
                <li className="m-2 md:m-5 w-20 h-8 md:h-10 text-center content-center text-white rounded-lg md:rounded-xl border-solid border-white border-2">
                    Contato
                </li>
            </ul>
        </nav>
    )
}