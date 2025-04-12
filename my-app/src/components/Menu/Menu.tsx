import Link from "next/link";

export default function Menu() {
    return(
        <nav>
            <ul className="flex">
                <Link href="/">
                    <li className="m-5 p-2 border-solid border-gray-600 border-2 ">
                        Inicio
                    </li>
                </Link>
                <li className="m-5 p-2 border-solid border-gray-600 border-2">
                    Produtos
                </li>
                <li className="m-5 p-2 border-solid border-gray-600 border-2">
                    Contato
                </li>
            </ul>
        </nav>
    )
}