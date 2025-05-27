import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
        {/* Promotional Banner */}
        <div className="bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] text-black text-center py-2 px-4">
          <div className="flex items-center justify-center gap-2 text-[22px] font-medium">
            <span className="hidden sm:inline font-bold text-[#fff]"> <span className="text-[#00E7F9] font-extrabold">
              🚀FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
            </span>
            <span className="sm:hidden">FRESH BEGINNINGS SALE: Extra 25% OFF</span>
          </div>
        </div>

      <div className="px-6 lg:px-[211px] mt-[35px]">
        {/* Navigation */}
        <nav className="flex items-center justify-between">
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
        <div className="container mx-auto mt-[57px]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Want to Turn Social Media Into a Profitable Career?
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">
                  Discover your way to success with Fametonic:
                </h2>
              </div>

              {/* Feature List */}
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg lg:text-xl mt-1 flex-shrink-0">✨</span>
                  <span className="text-base lg:text-lg">Start growing your influence right away—no waiting required!</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg lg:text-xl mt-1 flex-shrink-0">✨</span>
                  <span className="text-base lg:text-lg">Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg lg:text-xl mt-1 flex-shrink-0">✨</span>
                  <span className="text-base lg:text-lg">Use a Personal AI Worker to boost your content</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-lg lg:text-xl mt-1 flex-shrink-0">✨</span>
                  <span className="text-base lg:text-lg">Learn from expert-led courses designed for aspiring influencers</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-3 lg:space-y-4">
                <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-lg text-base lg:text-lg transition-all duration-300 transform hover:scale-105">
                  GET STARTED ›
                </button>
                <p className="text-sm text-gray-400">1-minute quiz for personalized insights</p>
              </div>

              {/* Legal Text */}
              <div className="text-xs text-gray-500 space-y-1">
                <p>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                <p>Fametonic 2025 ©All Rights Reserved.</p>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}
