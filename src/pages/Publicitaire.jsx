import React from "react";
const Publicitaire = () => {
return(
    <div class="font-sans bg-white text-[#333] py-12 px-4 bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3]">
    <div class="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
      <h2 class="lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl">The Most Modern Card Platform for Debit</h2>
      <div class="grid md:grid-cols-2 gap-12 mt-8">
       <div>
          <img src='https://readymadeui.com/readymadeui_banner.webp' class="shrink-0 w-full h-full rounded-md object-contain" />
        </div> <div>
          <p class="text-base leading-relaxed">Explore a curated collection of ready-to-use components and design blocks, empowering you to create stunning, responsive interfaces with ease. Streamline your workflow and discover the future of web development.</p>
          <div class="mt-12">
            <button type='button'
              class="bg-[#55F5A3] hover:bg-green-400 transition-all text-[#333] font-bold text-sm rounded-full px-5 py-3">Getting Started</button>
            <a href="javascript:void(0)" class="text-sm font-bold underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap">API Documentation</a>
          </div>
          <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <img src="https://readymadeui.com/google-logo.svg" class="w-28 mx-auto" alt="google-logo" />
            <img src="https://readymadeui.com/facebook-logo.svg" class="w-28 mx-auto" alt="facebook-logo" />
            <img src="https://readymadeui.com/linkedin-logo.svg" class="w-28 mx-auto" alt="linkedin-logo" />
            <img src="https://readymadeui.com/pinterest-logo.svg" class="w-28 mx-auto" alt="pinterest-logo" />
          </div>
        </div>
        
      </div>
    </div>
  </div>
)
}
export default Publicitaire;