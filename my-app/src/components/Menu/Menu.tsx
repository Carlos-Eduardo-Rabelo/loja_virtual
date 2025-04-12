import Link from "next/link";

export default function Menu() {
    return(
        <nav>
            <ul className="flex">
                <Link href="/">
                    <li className="m-5 w-20 h-10 text-center content-center text-white rounded-xl border-solid border-white border-2 ">
                        Inicio
                    </li>
                </Link>
                <li className="m-5 w-20 h-10 text-center content-center text-white rounded-xl border-solid border-white border-2">
                    Produtos
                </li>
                <li className="m-5 w-20 h-10 text-center content-center text-white rounded-xl border-solid border-white border-2">
                    Contato
                </li>
            </ul>
        </nav>
    )
}