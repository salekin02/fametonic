import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Promotional Banner */}
      <div className="bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] text-black text-center py-2 px-4">
        <div className="flex items-center justify-center gap-2 text-[22px] font-medium">
          <span className="font-bold text-[#fff]"> <span className="text-[#00E7F9] font-extrabold">
            🚀FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>
      </div>

      <div className="px-6 pb-21 md:px-6 xl:px-[211px] mt-[35px] relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between relative z-9">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <Image src="/assets/images/brand.svg" width={173.122} height={74} alt="Fametonic Logo" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-white hover:text-cyan-400 transition-colors">About us</button>
            <button className="text-white hover:text-cyan-400 transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Main Content */}
        <Image className="absolute right-53.5 top-1.5 z-1" src="/assets/images/hero-section.png" width={666} height={679} alt="Hero Image" />
        <div className="container mx-auto mt-[57px]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-9">
            {/* Left Content */}
            <div className="space-y-2 lg:space-y-4 order-2 lg:order-1">
              <div className="font-[urbanist]">
                <h1 className="text-3xl sm:text-4xl lg:text-[35px] font-bold leading-tight">
                  Want to Turn Social Media Into a Profitable Career?
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-[35px] font-bold text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
                  Discover your way to success with Fametonic:
                </h2>
              </div>

              {/* Feature List */}
              <div className="space-y-3 lg:space-y-4 text-base">
                <div className="flex items-center gap-2.5">
                  <span className="">✨</span>
                  <span>Start growing your influence right away—no waiting required!</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="">✨</span>
                  <span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="">✨</span>
                  <span>Use a Personal AI Worker to boost your content</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="">✨</span>
                  <span>Learn from expert-led courses designed for aspiring influencers</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-2.5 my-7.5 w-[313px]">
                <button className="font-[figtree] w-full flex gap-2.5 items-center justify-center px-10 py-2 rounded-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9] text-white font-figtree text-[20px] font-bold normal-leading">
                  GET STARTED
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875L2.21094 12.7607C1.79676 13.1024 1.19607 13.078 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.543678 11.6826 0.54827 11.6578 0.555664 11.6338L0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L0.818359 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z" fill="white" stroke="white" />
                  </svg>
                </button>
                <p className="text-sm text-white text-center">1-minute quiz for personalized insights</p>
              </div>

              {/* Legal Text */}
              <div className="text-[#ABABAB] font-medium space-y-3 max-w-[516px]">
                <p className="text-xs">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                <p className="text-[10px]">Fametonic 2025 ©All Rights Reserved.</p>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}
