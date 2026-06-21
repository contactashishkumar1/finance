/**
 * ArthCalculator.in - Master Automated Navigation Matrix
 * File Asset Location: /js/related-tools.js
 * Automatically renders both sections beautifully with zero race conflicts
 */
(function() {
    function injectMasterLinkingHub() {
        const targetContainer = document.getElementById("arthcalculatorLinkingHub");
        if (!targetContainer) return;

        const currentURL = window.location.href.toLowerCase();

        // 171 Calculators Core Database Mapping Matrix
        const db = [
            { name: "SIP Calculator", url: "/sip/", icon: "💰", category: "investment" },
            { name: "Lumpsum Growth", url: "/lumpsum/", icon: "💵", category: "investment" },
            { name: "CAGR Tool", url: "/cagr/", icon: "📊", category: "investment" },
            { name: "Compound Interest", url: "/compound-interest/", icon: "⏳", category: "investment" },
            { name: "FD Calculator", url: "/fd/", icon: "🏦", category: "investment" },
            { name: "RD Calculator", url: "/rd/", icon: "🏦" , category: "investment" },
            { name: "SWP Planner", url: "/swp/", icon: "🏧", category: "investment" },
            { name: "Step Up SIP", url: "/step-up-sip/", icon: "📈", category: "investment" },
            { name: "SIP vs FD Comparison", url: "/sip-vs-fd/", icon: "⚔️", category: "investment" },
            { name: "Asset Allocation", url: "/asset-allocation/", icon: "⚖️", category: "investment" },
            { name: "XIRR Analyzer", url: "/xirr/", icon: "💹", category: "investment" },
            { name: "EMI Calculator", url: "/emi/", icon: "💳", category: "loans" },
            { name: "Home Loan Planner", url: "/home-loan/", icon: "🏠", category: "loans" },
            { name: "Car Loan EMI", url: "/car-loan/", icon: "🚗", category: "loans" },
            { name: "Personal Loan EMI", url: "/personal-loan-emi/", icon: "💸", category: "loans" },
            { name: "Loan Eligibility", url: "/loan-eligibility/", icon: "🆗", category: "loans" },
            { name: "Loan Prepayment", url: "/loan-prepayment/", icon: "⚡", category: "loans" },
            { name: "Income Tax Planner", url: "/income-tax/", icon: "📑", category: "tax" },
            { name: "Advance Tax Payments", url: "/advance-tax/", icon: "🗓️", category: "tax" },
            { name: "TDS Calculator", url: "/tds-calculator/", icon: "📑", category: "tax" },
            { name: "GST Calculator India", url: "/gst/", icon: "📦", category: "tax" },
            { name: "HRA Tax Exemption", url: "/hra/", icon: "🏠", category: "tax" },
            { name: "Solar Rooftop Subsidy", url: "/solar-rooftop-calculator/", icon: "☀️", category: "ev" },
            { name: "EV vs Petrol Cost", url: "/ev-vs-petrol-cost/", icon: "🚗", category: "ev" },
            { name: "Solar + EV Home ROI", url: "/solar-ev-ecosystem/", icon: "🏠", category: "ev" },
            { name: "EV vs ICE Lifecycle", url: "/ev-vs-petrol/", icon: "🚗", category: "ev" },
            { name: "Brokerage & P&L Tool", url: "/brokerage-calculator/", icon: "⚖️", category: "trading" },
            { name: "Intraday Profit Analyzer", url: "/intraday-profit-calculator/", icon: "⚡", category: "trading" },
            { name: "Break Even Sales Volume", url: "/break-even-calculator/", icon: "⚖️", category: "business" },
            { name: "DCF Intrinsic Valuation", url: "/dcf/", icon: "💎", category: "business" },
            { name: "Net Worth Asset Ledger", url: "/net-worth/", icon: "💎", category: "personal" },
            { name: "Budget Planner Tracker", url: "/budget-planner/", icon: "📝", category: "personal" },
            { name: "Retirement Target Corpus", url: "/retirement/", icon: "👴", category: "milestones" },
            { name: "Marriage Budget Planner", url: "/marriage-planner/", icon: "💍", category: "milestones" },
            { name: "Child Education Planner", url: "/child-education-planner/", icon: "🎓", category: "milestones" },
            { name: "Rent vs Buy Cost Evaluator", url: "/rent-vs-buy-calculator/", icon: "⚖️", category: "milestones" }
        ];

        // Context Substring Dynamic Matrix Matcher
        let targetCategory = "investment";
        let moduleName = "Investment Options";

        if (currentURL.includes('loan') || currentURL.includes('emi')) { targetCategory = "loans"; moduleName = "Loan Analytics"; }
        else if (currentURL.includes('tax') || currentURL.includes('gst') || currentURL.includes('salary')) { targetCategory = "tax"; moduleName = "Tax & Payroll"; }
        else if (currentURL.includes('ev') || currentURL.includes('petrol') || currentURL.includes('solar')) { targetCategory = "ev"; moduleName = "Green Energy TCO"; }
        else if (currentURL.includes('trade') || currentURL.includes('profit') || currentURL.includes('brokerage')) { targetCategory = "trading"; moduleName = "Quant & Derivatives"; }
        else if (currentURL.includes('business') || currentURL.includes('break') || currentURL.includes('dcf')) { targetCategory = "business"; moduleName = "Corporate FP&A"; }
        else if (currentURL.includes('budget') || currentURL.includes('worth')) { targetCategory = "personal"; moduleName = "Wealth Architecture"; }
        else if (currentURL.includes('retirement') || currentURL.includes('marriage') || currentURL.includes('education') || currentURL.includes('rent')) { targetCategory = "milestones"; moduleName = "Life Milestones"; }

        // Build filtered arrays
        let primaryPool = db.filter(item => item.category === targetCategory && !currentURL.includes(item.url.replace(/\//g, '')));
        let fallbackPool = db.filter(item => item.category !== targetCategory && !currentURL.includes(item.url.replace(/\//g, '')));
        let finalRelatedPool = [...primaryPool, ...fallbackPool].slice(0, 6);

        // Render Cards markup for Section 1 (White Container)
        let dynamicRelatedCardsHTML = '';
        finalRelatedPool.forEach(link => {
            dynamicRelatedCardsHTML += `
                <a href="${link.url}" class="group p-5 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl hover:border-blue-500 hover:from-blue-50/40 hover:to-blue-100/20 hover:scale-[1.03] transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[96px] items-start text-left">
                    <div class="flex items-start gap-3">
                        <span class="text-xl inline-block mt-0.5 group-hover:scale-110 transition-transform duration-300">${link.icon}</span>
                        <h4 class="font-bold text-slate-700 text-xs group-hover:text-blue-600 transition-colors duration-200 leading-snug text-left">${link.name}</h4>
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 group-hover:text-blue-500 mt-3 flex items-center gap-0.5 transition-colors uppercase tracking-wider text-left">
                        Open Tool
                        <svg class="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </a>`;
        });

        // Assemble the full premium visual dashboard output markup directly
        targetContainer.innerHTML = `
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
                        Silo Suggestions: <span class="text-blue-600">${moduleName} Module</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    ${dynamicRelatedCardsHTML}
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
                            <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between w-full">SIP Calculator <span class="text-base">💰</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Estimate mutual fund systematic returns with custom compound intervals.</p>
                        </div>
                        <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/emi/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
                        <div>
                            <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between w-full">EMI Loan Calculator <span class="text-base">💳</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Check monthly reducing loan repayments and absolute interest breakdowns.</p>
                        </div>
                        <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/income-tax/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
                        <div>
                            <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between w-full">Income Tax Regime Planner <span class="text-base">📑</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Compare Old vs New Tax Regime liabilities using the latest budget structures.</p>
                        </div>
                        <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/lumpsum/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
                        <div>
                            <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between w-full">Lumpsum Investment Calc <span class="text-base">💵</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Project the long-term compounded future value of one-time wealth placements.</p>
                        </div>
                        <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/cagr/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
                        <div>
                            <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between w-full">CAGR Growth Calculator <span class="text-base">📊</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Determine the exact Compounded Annual Growth Rate of individual Indian assets.</p>
                        </div>
                        <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/net-worth/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[110px]">
                        <div>
                            <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between w-full">Net Worth Liquidity Tracker <span class="text-base">💎</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Audit total assets against current active debt liabilities to find real wealth values.</p>
                        </div>
                        <span class="text-blue-400 text-[11px] font-bold mt-4 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                </div>
            </section>
        `;
    }

    // Direct initialization bypasses script execution order issues completely
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectMasterLinkingHub);
    } else {
        injectMasterLinkingHub();
    }
})();
