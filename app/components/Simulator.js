export default function Simulator() {
   return (
       <section id="simulator">
           <div className="flex flex-col w-100 pt-10 justify-center">
               <h1 className="text-5xl w-100 text-center text-[#0077ff] font-bold">¿Cual es la carrera de tu futuro?</h1>

               <div className="flex justify-center w-100 mt-10">
                   <input type="text" id="first_name" class="w-5/12 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-3.5 pl-10" placeholder="Elige tu carrera" />
               </div>
               <div className="flex justify-center w-100 mt-10">
                   <p className="w-5/12 text-lg font-bold text-[#0077ff]">Contabilidad</p>
               </div>
               <div className="flex justify-center w-100 mt-2">
                   <p className="w-5/12 text-justify">
                       Interpreta y maneja la informacion financiera de las empresas, manejando estrategicamente la informacion
                       financiera de las empresas contribuyendo con su desarrollo.
                   </p>
               </div>
           </div>


           <div className="flex flex-row justify-center w-full mt-20">
               <div className="flex w-8/12">
                   <ol class="items-center sm:flex w-100 justify-start">
                       <li class="relative mb-6 sm:mb-0">
                           <div class="mt-3 sm:pe-8 h-10">
                               <p class="text-base text-3xl text-[#ef0721]">2024</p>
                           </div>
                           <div class="flex items-center ps-5">
                               <div class="z-10 flex items-center justify-center min-w-8 h-8 bg-[#ef0721] rounded-full"></div>
                               <div class="hidden sm:flex w-full bg-[#ef0721] h-1.5"></div>
                           </div>
                           <div class="mt-3 sm:pe-8 h-10">
                               <p class="text-base text-sm text-[#0077ff]"></p>
                           </div>
                       </li>
                       <li class="relative mb-6 sm:mb-0">
                           <div class="mt-3 sm:pe-8 h-10">
                               <p class="text-base text-sm text-[#0077ff]">2027</p>
                           </div>
                           <div class="flex items-center">
                               <div class="z-10 flex items-center justify-center min-w-8 h-8 bg-[#0077ff] rounded-full"></div>
                               <div class="hidden sm:flex w-full bg-[#0077ff] h-1.5"></div>
                           </div>
                           <div class="mt-3 sm:pe-8 h-10">
                               <p class="text-base text-sm text-[#0077ff]">3er año en la UCV</p>
                           </div>
                       </li>
                       <li class="relative mb-6 sm:mb-0">
                           <div class="mt-3 sm:pe-8 h-10">
                               <p class="text-base text-sm text-[#0077ff]">2029</p>
                           </div>
                           <div class="flex items-center">
                               <div class="z-10 flex items-center justify-center min-w-8 h-8 bg-[#0077ff] rounded-full"></div>
                               <div class="hidden sm:flex w-full bg-[#0077ff] h-1.5"></div>
                           </div>
                           <div class="mt-3 sm:pe-8 h-10">
                               <p class="text-base text-sm text-[#0077ff]">Terminaste tu carrera, es momento para tu maestria en finanzas</p>
                           </div>
                       </li>
                       <li class="relative mb-6 sm:mb-0">
                           <div class="mt-3 h-10">
                               <p class="text-base text-3xl text-[#0077ff]">2040</p>
                           </div>
                           <div class="flex items-center">
                               <div class="z-10 flex items-center justify-center min-w-8 h-8 bg-[#0077ff] rounded-full"></div>
                               {/* <div class="hidden sm:flex w-full bg-[#0077ff] h-1.5"></div> */}
                           </div>
                           <div class="mt-3 sm:pe-8 h-10">
                               <p class="text-base text-sm text-[#0077ff]"></p>
                           </div>
                       </li>
                   </ol>
               </div>


               <button type="button" class="inline-flex items-center text-white bg-[#ef0721] font-medium rounded-full text-lg px-5 py-2.5">
                   Simular
                   <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                   </svg>
               </button>
           </div>
       </section>
   );
}