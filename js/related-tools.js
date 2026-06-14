<section class="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 card-shadow mb-8 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
    
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2">
        <div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <span class="p-2 bg-blue-50 text-blue-600 rounded-xl inline-flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                </span>
                Related Financial Tools
            </h2>
            <p class="text-slate-400 text-xs mt-1">Contextual calculators matched specifically to your current planning workflow.</p>
        </div>
        <div class="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider border border-slate-200/60 shadow-sm self-start sm:self-center">
            Silo Suggestions: <span class="text-blue-600" id="siloBadgeCount">Loading...</span>
        </div>
    </div>
    
    <div id="dynamicRelatedLinks" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        </div>
</section>


<section class="bg-slate-900 p-6 sm:p-10 rounded-2xl text-white card-shadow mb-12 relative overflow-hidden">
    <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
            <h2 class="text-xl sm:text-2xl font-bold tracking-tight">Popular Tools Directory ⭐</h2>
            <p class="text-slate-400 text-xs sm:text-sm mt-1">Our most-used professional suites for precision financial planning.</p>
        </div>
        <a href="/calculators/" class="text-blue-400 font-bold text-xs hover:underline whitespace-nowrap flex items-center gap-1 uppercase tracking-wider group">
            All 100+ Tools 
            <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-pretty">
        <a href="/sip/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    SIP Calculator <span class="text-base">💰</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal text-left">Estimate mutual fund systematic returns with custom compound intervals.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/emi/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    EMI Loan Calculator <span class="text-base">💳</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal text-left">Check monthly reducing loan repayments and absolute interest breakdowns.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/income-tax/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    Income Tax Regime Planner <span class="text-base">📑</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal text-left">Compare Old vs New Tax Regime liabilities using the latest budget structures.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/lumpsum/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    Lumpsum Investment Calc <span class="text-base">💵</span>
                </h3>
