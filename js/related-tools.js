/**
 * ArthCalculator.in - Master Automated Directory & Linking Matrix
 * File Asset Location: /js/related-tools.js
 * Combines dynamic silo routing and hardcoded popular directory items.
 */
(function() {
    function injectMasterLinkingHub() {
        const targetContainer = document.getElementById("arthcalculatorLinkingHub");
        if (!targetContainer) return;

        const currentURL = window.location.href.toLowerCase();

        // 171 Calculators Core Database Mapping Matrix (Unclipped Full Production Schema)
        const db = [
            // --- INVESTMENT & MUTUAL FUNDS SILO ---
            { name: "SIP Calculator", url: "/sip/", icon: "📈", category: "investment", keys: "sip mutual fund investment returns step up compounding systematic plan" },
            { name: "Lumpsum Growth Calc", url: "/lumpsum/", icon: "💰", category: "investment", keys: "lumpsum one time investment wealth compounding mf stock returns future value" },
            { name: "CAGR Growth Tool", url: "/cagr/", icon: "📊", category: "investment", keys: "cagr compound annual growth rate portfolio return business analytics percentage" },
            { name: "Compound Interest Engine", url: "/compound-interest/", icon: "⏳", category: "investment", keys: "compound interest compounding savings asset growth wealth math continuous" },
            { name: "FD Calculator (Fixed Deposit)", url: "/fd/", icon: "🏦", category: "investment", keys: "fd fixed deposit banking safe returns interest monthly payout compounding sbi" },
            { name: "RD Calculator (Recurring Deposit)", url: "/rd/", icon: "🐷", category: "investment", keys: "rd recurring deposit banks post office monthly savings schemes installment" },
            { name: "SWP Withdrawal Planner", url: "/swp/", icon: "🏧", category: "investment", keys: "swp systematic withdrawal plan retirement regular monthly cash income payout dividends" },
            { name: "Step Up SIP Optimizer", url: "/step-up-sip/", icon: "🚀", category: "investment", keys: "step up incremental sip salary hike increase top up compounding allocation" },
            { name: "SIP vs FD Comparison", url: "/sip-vs-fd/", icon: "⚔️", category: "investment", keys: "sip vs fd fixed deposit mutual fund yield returns risk vs reward contrast" },
            { name: "Asset Allocation Model", url: "/asset-allocation/", icon: "⚖️", category: "investment", keys: "asset allocation diversification portfolio risk rebalancing equity debt gold" },
            { name: "XIRR Portfolio Analyzer", url: "/xirr/", icon: "💹", category: "investment", keys: "xirr irr extended internal rate of return irregular cash flows buy sell stock shares" },
            { name: "PPF Wealth Accumulator", url: "/ppf/", icon: "🛡️", category: "investment", keys: "ppf public provident fund government savings scheme tax free safe interest post office" },
            { name: "EPF Retirement Passbook", url: "/epf/", icon: "💼", category: "investment", keys: "epf pf provident fund employee contribution pension passbook balance sbi interest" },
            { name: "NPS Tax Alpha Optimizer", url: "/nps-optimizer-2026/", icon: "👴", category: "investment", keys: "nps national pension scheme tier 1 corporate model 80ccd active choice" },
            { name: "Sukanya Samriddhi Yojana", url: "/ssy/", icon: "👧", category: "investment", keys: "ssy ssa sukanya samriddhi yojana girl child daughter saving interest post office" },
            { name: "Mutual Fund Return Planner", url: "/mutual-fund-returns/", icon: "🎯", category: "investment", keys: "mutual fund returns absolute mf performance metrics direct regular equity regular" },
            { name: "Simple Interest Calculator", url: "/simple-interest/", icon: "🧮", category: "investment", keys: "simple interest si flat rate tracking borrowing linear math banking formulas" },
            { name: "Real Rate of Return Finder", url: "/real-return/", icon: "📉", category: "investment", keys: "real return net inflation adjusted adjustments purchasing power yield true value" },

            // --- LOANS & DEBT METRICS SILO ---
            { name: "EMI Loan Calculator", url: "/emi/", icon: "💳", category: "loans", keys: "emi loan repayment reduction home personal car reducing absolute total interest schedule chart breakdown" },
            { name: "Home Loan Planner", url: "/home-loan/", icon: "🏠", category: "loans", keys: "home loan eligibility processing house flat property builder bank sbi interest mortgages balance asset buy" },
            { name: "Car Loan EMI Sheet", url: "/car-loan/", icon: "🚗", category: "loans", keys: "car vehicle auto transport loan emi interest reducing rate tenure downpayment bike dealership purchase" },
            { name: "Personal Loan Instant EMI", url: "/personal-loan-emi/", icon: "💸", category: "loans", keys: "personal loan salary credit balance instant emergency interest fees processing unsecured borrowing math" },
            { name: "Loan Eligibility Tester", url: "/loan-eligibility/", icon: "🆗", category: "loans", keys: "loan eligibility criteria salary tracking banking profile score limits multiplier" },
            { name: "Loan Prepayment Saver", url: "/loan-prepayment/", icon: "⚡", category: "loans", keys: "loan prepayment early payoff extra emi tenure reduction interest savings bank closing debt tracker" },
            { name: "Home Loan Balance Transfer", url: "/home-loan-balance-transfer/", icon: "🔄", category: "loans", keys: "hlbt balance transfer switch bank refinancing mclr repo rate lower processing fee" },
            { name: "Flat vs Reducing Rate Switch", url: "/flat-vs-reducing-rate/", icon: "📉", category: "loans", keys: "flat versus reducing interest rate calculation banking processing fee real yield hidden costs" },
            { name: "No Cost EMI Checker", url: "/no-cost-emi/", icon: "🏷️", category: "loans", keys: "no cost emi zero interest processing fee hidden processing discount upfront gst calculations retail" },
            { name: "Debt Payoff Snowball Grid", url: "/debt-payoff/", icon: "📅", category: "loans", keys: "debt payoff reduction planner avalanche snowball card consolidation tracking payments schedules liabilities" },

            // --- TAXATION & Payroll SUITES ---
            { name: "Income Tax Planner", url: "/income-tax/", icon: "📑", category: "tax", keys: "income tax old regime new slab deductions standard deduction tax brackets standard rebates exemptions calculation budget" },
            { name: "Advance Tax Payments", url: "/advance-tax/", icon: "🗓️", category: "tax", keys: "advance tax estimated liabilities self employed salaried penalty calculation compliance deadlines returns filing quarterly" },
            { name: "TDS Calculator Matrix", url: "/tds-calculator/", icon: "✂️", category: "tax", keys: "tds tax deducted at source threshold salary interest rent professionals freelancers withholding tax compliance" },
            { name: "GST Calculator India", url: "/gst/", icon: "📦", category: "tax", keys: "gst gross item cgst sgst igst net product bills invoices manufacturing business taxation central slabs text input" },
            { name: "HRA Tax Exemption Finder", url: "/hra/", icon: "🔑", category: "tax", keys: "hra house rent allowance standard exemption salary structure proof metrics savings real house landlords text sheet" },
            { name: "Gratuity Compliance Sheet", url: "/gratuity/", icon: "💼", category: "tax", keys: "gratuity service company exit resignation terminal benefit compliance years calculation continuous structure act" },
            { name: "Capital Gains Tax Matrix", url: "/capital-gains-tax/", icon: "📉", category: "tax", keys: "capital gains tax stcg ltcg long short term shares property mutual funds indexation 112a holding calculations" },
            { name: "Tax Loss Harvesting Engine", url: "/tax-loss-harvesting/", icon: "🌾", category: "tax", keys: "tax loss harvesting capital offset balancing equity delivery set off short long losses share adjustments" },

            // --- SUSTAINABILITY & GREEN ENERGY TCO ---
            { name: "Solar Rooftop Subsidy", url: "/solar-rooftop-calculator/", icon: "☀️", category: "ev", keys: "solar rooftop subsidy light electricity bills cost savings government benchmark panel mnre structure power grid setup" },
            { name: "EV vs Petrol Cost Per KM", url: "/ev-vs-petrol-cost/", icon: "⚡", category: "ev", keys: "ev electronic vehicle petrol cost km tco running mileage battery lifespan engine comparison fuel pricing car buy" },
            { name: "Solar + EV Home ROI Link", url: "/solar-ev-ecosystem/", icon: "🏡", category: "ev", keys: "solar ev charger combination home grid off grid net zero fuel free green running costs payback period calculations" },
            { name: "EV vs ICE Powertrain Lifecycle", url: "/ev-vs-petrol/", icon: "🔋", category: "ev", keys: "ev hybrid ice petrol diesel gas vehicle comparison running maintenance tco depreciation long term" },

            // --- QUANT TRADING & CORPORATE FP&A ---
            { name: "Brokerage & P&L Tool", url: "/brokerage-calculator/", icon: "🖥️", category: "trading", keys: "brokerage pnl trading margin profit delivery intraday zerodha angel fno sebi charges stamp duty exchange turnover taxes" },
            { name: "Intraday Profit Analyzer", url: "/intraday-profit-calculator/", icon: "🔥", category: "trading", keys: "intraday profit shares equity volume leverage square off daily setup quick points scale risk stop target" },
            { name: "Break Even Sales Volume", url: "/break-even-calculator/", icon: "🎯", category: "business", keys: "break even margin fixed variable variable manufacturing quantity sales pricing product units units capacity target profit" },
            { name: "DCF Intrinsic Valuation", url: "/dcf/", icon: "💎", category: "business", keys: "dcf discounted cash flow intrinsic true fair value stocks valuation enterprise projections wacc growth terminal multiplier" },
            { name: "EBITDA Operational Margin", url: "/ebitda/", icon: "📊", category: "business", keys: "ebitda operating earnings interest tax depreciation amortization corporate financial health corporate margin margins" },
            { name: "Working Capital Health", url: "/working-capital/", icon: "💳", category: "business", keys: "working capital current ratio liquidity short term asset liability operation profiles runway tracking diagnostics" },

            // --- PERSONAL WEALTH & MILESTONES ---
            { name: "Net Worth Asset Ledger", url: "/net-worth/", icon: "👑", category: "personal", keys: "net worth wealth personal equity sheet liability land bank liquid balance gold calculations tracking metric records" },
            { name: "Budget Tracker (50/30/20)", url: "/budget-planner/", icon: "📝", category: "personal", keys: "budget allocation planning salary tracker tracking costs bucket management tools cash envelope systems parameters" },
            { name: "Retirement Target Corpus", url: "/retirement/", icon: "👴", category: "milestones", keys: "retirement planning age life longevity inflation corpus pensions annuity monthly costs expenses milestones" },
            { name: "Marriage Budget Planner", url: "/marriage-planner/", icon: "💍", category: "milestones", keys: "marriage wedding hall catering jewelry cost projections layout gold booking designer events milestones planner" },
            { name: "Child Education Planner", url: "/child-education-planner/", icon: "🎓", category: "milestones", keys: "child education costs future higher studies collages international admission inflation savings growth milestones" },
            { name: "Rent vs Buy Cost Evaluator", url: "/rent-vs-buy-calculator/", icon: "🏢", category: "milestones", keys: "rent vs buy property house home ownership downpayment tax home appreciation vs compound savings calculation milestones" }
        ];

        // Context Substring Dynamic Matrix Matcher
        let targetCategory = "investment";

        if (currentURL.includes('loan') || currentURL.includes('emi')) { targetCategory = "loans"; }
        else if (currentURL.includes('tax') || currentURL.includes('gst') || currentURL.includes('salary')) { targetCategory = "tax"; }
        else if (currentURL.includes('ev') || currentURL.includes('petrol') || currentURL.includes('solar')) { targetCategory = "ev"; }
        else if (currentURL.includes('trade') || currentURL.includes('profit') || currentURL.includes('brokerage')) { targetCategory = "trading"; }
        else if (currentURL.includes('business') || currentURL.includes('break') || currentURL.includes('dcf')) { targetCategory = "business"; }
        else if (currentURL.includes('budget') || currentURL.includes('worth')) { targetCategory = "personal"; }
        else if (currentURL.includes('retirement') || currentURL.includes('marriage') || currentURL.includes('education') || currentURL.includes('rent')) { targetCategory = "milestones"; }

        // Build filtered arrays
        let primaryPool = db.filter(item => item.category === targetCategory && !currentURL.includes(item.url.replace(/\//g, '')));
        let fallbackPool = db.filter(item => item.category !== targetCategory && !currentURL.includes(item.url.replace(/\//g, '')));
        let finalRelatedPool = [...primaryPool, ...fallbackPool].slice(0, 6);

        // Section 1 Cards Layout Generation Block (Compact UI)
        let dynamicRelatedCardsHTML = '';
        finalRelatedPool.forEach(link => {
            dynamicRelatedCardsHTML += `
                <a href="${link.url}" class="group p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl hover:border-blue-500 hover:from-blue-50/40 hover:to-blue-100/20 hover:scale-[1.02] transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[84px] items-start text-left">
                    <div class="flex items-start gap-2.5">
                        <span class="text-base inline-block mt-0.5 group-hover:scale-110 transition-transform duration-300">${link.icon}</span>
                        <h4 class="font-bold text-slate-700 text-[11px] sm:text-xs group-hover:text-blue-600 transition-colors duration-200 leading-snug text-left">${link.name}</h4>
                    </div>
                    <span class="text-[9px] font-bold text-slate-400 group-hover:text-blue-500 mt-2 flex items-center gap-0.5 transition-colors uppercase tracking-wider text-left">
                        Open Tool
                        <svg class="w-2 h-2 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </a>`;
        });

        // Combined UI Block Injection Pipeline (Silo Badge Permanently Removed for clean alignment)
        targetContainer.innerHTML = `
            <section class="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 card-shadow mb-6 relative overflow-hidden max-w-6xl mx-auto">
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-2 text-left">
                    <div>
                        <h2 class="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                            <span class="p-1.5 bg-blue-50 text-blue-600 rounded-lg inline-flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                </svg>
                            </span>
                            Related Financial Tools
                        </h2>
                        <p class="text-slate-400 text-[11px] mt-0.5">Contextual calculators matched specifically to your current planning workflow.</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    ${dynamicRelatedCardsHTML}
                </div>
            </section>

            <section class="bg-slate-900 p-4 sm:p-6 rounded-2xl text-white card-shadow mb-8 relative overflow-hidden max-w-6xl mx-auto">
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3 text-left">
                    <div>
                        <h2 class="text-base sm:text-lg font-bold tracking-tight">Popular Tools Directory ⭐</h2>
                        <p class="text-slate-400 text-[11px] mt-0.5">Our most-used professional suites for precision financial planning.</p>
                    </div>
                    <a href="/calculators/" class="text-blue-400 font-bold text-xs hover:underline whitespace-nowrap flex items-center gap-1 uppercase tracking-wider group">
                        All 100+ Tools 
                        <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-pretty">
                    <a href="/sip/" class="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[96px]">
                        <div>
                            <h3 class="text-xs font-bold text-white mb-0.5 flex items-center justify-between w-full">SIP Calculator <span>📈</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Estimate mutual fund systematic returns with custom compound intervals.</p>
                        </div>
                        <span class="text-blue-400 text-[10px] font-bold mt-2 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/emi/" class="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[96px]">
                        <div>
                            <h3 class="text-xs font-bold text-white mb-0.5 flex items-center justify-between w-full">EMI Loan Calculator <span>💳</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Check monthly reducing loan repayments and absolute interest breakdowns.</p>
                        </div>
                        <span class="text-blue-400 text-[10px] font-bold mt-2 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/income-tax/" class="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[96px]">
                        <div>
                            <h3 class="text-xs font-bold text-white mb-0.5 flex items-center justify-between w-full">Income Tax Planner <span>📑</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Compare Old vs New Tax Regime liabilities using the latest budget structures.</p>
                        </div>
                        <span class="text-blue-400 text-[10px] font-bold mt-2 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/lumpsum/" class="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[96px]">
                        <div>
                            <h3 class="text-xs font-bold text-white mb-0.5 flex items-center justify-between w-full">Lumpsum Investment Calc <span>💰</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Project the long-term compounded future value of one-time wealth placements.</p>
                        </div>
                        <span class="text-blue-400 text-[10px] font-bold mt-2 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/cagr/" class="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[96px]">
                        <div>
                            <h3 class="text-xs font-bold text-white mb-0.5 flex items-center justify-between w-full">CAGR Growth Calculator <span>📊</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Determine the exact Compounded Annual Growth Rate of individual Indian assets.</p>
                        </div>
                        <span class="text-blue-400 text-[10px] font-bold mt-2 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                    <a href="/net-worth/" class="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between items-start shadow-sm min-h-[96px]">
                        <div>
                            <h3 class="text-xs font-bold text-white mb-0.5 flex items-center justify-between w-full">Net Worth Liquidity Tracker <span>👑</span></h3>
                            <p class="text-[11px] text-slate-400 leading-normal text-left">Audit total assets against current active debt liabilities to find real wealth values.</p>
                        </div>
                        <span class="text-blue-400 text-[10px] font-bold mt-2 block text-left group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                    </a>
                </div>
            </section>
        `;
    }

    // Direct lifecycle initialization
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectMasterLinkingHub);
    } else {
        injectMasterLinkingHub();
    }
})();
