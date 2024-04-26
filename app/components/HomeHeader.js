import { Tinos } from 'next/font/google'
const tinos = Tinos({ subsets: ['latin'], weight: '400' })

export default function HomeHeader() {

    return (
        <header className="bg-[#0077ff] text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-12 w-auto" src="/logo-blanco.png" alt="" />
                </a>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="text-2xl font-semibold leading-6">
                        <span className={tinos.className}>
                            Licenciada por Sunedu<br />
                            para que puedas salir adelante</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}