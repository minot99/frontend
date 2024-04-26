export default function Carrousel() {
    return (
        <section id="home-banner">
            <div className="relative w-100 h-[500px] bg-[url('/carrousel/fondo.png')]">
                {/* <div className="absolute top-0 left-0 w-full h-full">
                    <img src="/carrousel/fondo.png" alt="" className="w-full h-full object-cover" />
                </div> */}
                <div class="bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#000000] via-transparent to-[#000000]">
                    <div class="mx-auto flex max-w-7xl bottom-0 left-0 grid grid-cols-2 grid-rows-2 w-full h-full">
                        <div className="pl-6 pt-20">
                            <img src="/carrousel/Simulador.png" width="50%" alt="" className="self-align-end" />
                        </div>
                        <div className="row-span-2 flex justify-end pr-6 pt-10">
                            <img src="/carrousel/persona.png" alt="" className="h-full" />
                        </div>
                        <div className="pl-6 pt-5 text-white">
                            <h2 className="text-2xl font-bold">¿Sabes hasta cuánto podría ganar <br /> un profesional de tu carrera? </h2>
                            <div className="pt-10">Si tu respuesta es no, descúbrelo simulando tu profesión aquí.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row w-100 h-2">
                <div class="basis-3/4 bg-[#0077ff]"></div>
                <div class="basis-1/4 bg-[#ef0721]"></div>
            </div>
        </section>
    );
}