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
            Silo Suggestions: <span class="text-blue-600" id="siloBadgeCount">6 Active</span>
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
        <a href="/sip/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    SIP Calculator <span class="text-base">💰</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal">Estimate mutual fund systematic returns with custom compound intervals.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/emi/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    EMI Loan Calculator <span class="text-base">💳</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal">Check monthly reducing loan repayments and absolute interest breakdowns.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/income-tax/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    Income Tax Regime Planner <span class="text-base">📑</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal">Compare Old vs New Tax Regime liabilities using the latest budget structures.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/lumpsum/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    Lumpsum Investment Calc <span class="text-base">💵</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal">Project the long-term compounded future value of one-time wealth placements.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/cagr/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    CAGR Growth Calculator <span class="text-base">📊</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal">Determine the exact Compounded Annual Growth Rate of individual Indian assets.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>

        <a href="/net-worth/" class="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-850 transition-all duration-300 group flex flex-col justify-between shadow-sm min-h-[110px]">
            <div>
                <h3 class="text-sm font-bold text-white mb-1 flex items-center justify-between">
                    Net Worth Liquidity Tracker <span class="text-base">💎</span>
                </h3>
                <p class="text-[11px] text-slate-400 leading-normal">Audit total assets against current active debt liabilities to find real wealth values.</p>
            </div>
            <span class="text-blue-400 text-[11px] font-bold mt-4 block group-hover:translate-x-1 transition-transform">Calculate Now →</span>
        </a>
    </div>
</section>


<script>
window.addEventListener("DOMContentLoaded", function() {
    // Isolate current URL folder pathname context
    const currentPath = window.location.pathname.replace(/^\/|\/$/g, '');
    let relatedHTML = '';

    // Complete Silo Database Architecture containing all 171 internal page link rules
    const silos = {
        investment: [
            { name: "SIP Calculator", url: "/sip/", icon: "💰" },
            { name: "Lumpsum Growth", url: "/lumpsum/", icon: "💵" },
            { name: "CAGR Tool", url: "/cagr/", icon: "📊" },
            { name: "Compound Interest", url: "/compound-interest/", icon: "⏳" },
            { name: "FD Calculator", url: "/fd/", icon: "🏦" },
            { name: "RD Calculator", url: "/rd/", icon: "🏦" },
            { name: "SWP Planner", url: "/swp/", icon: "🏧" },
            { name: "Step Up SIP", url: "/step-up-sip/", icon: "📈" },
            { name: "SIP vs FD Comparison", url: "/sip-vs-fd/", icon: "⚔️" },
            { name: "Asset Allocation", url: "/asset-allocation/", icon: "⚖️" },
            { name: "Portfolio Overlap", url: "/portfolio-overlap/", icon: "📂" },
            { name: "Expense Ratio Impact", url: "/expense-ratio/", icon: "📉" },
            { name: "Wealth Projection", url: "/wealth-projection/", icon: "🔮" },
            { name: "Real Return Finder", url: "/real-return/", icon: "📉" },
            { name: "XIRR Analyzer", url: "/xirr/", icon: "💹" },
            { name: "IRR Calculator", url: "/irr-calculator/", icon: "💹" },
            { name: "Simple Interest Calc", url: "/simple-interest/", icon: "🧮" },
            { name: "Future Value Tool", url: "/future-value/", icon: "📈" },
            { name: "Present Value Calc", url: "/present-value/", icon: "📉" },
            { name: "Time Value of Money", url: "/time-value-of-money/", icon: "⏳" }
        ],
        loans: [
            { name: "EMI Calculator", url: "/emi/", icon: "💳" },
            { name: "Home Loan Planner", url: "/home-loan/", icon: "🏠" },
            { name: "Car Loan EMI", url: "/car-loan/", icon: "🚗" },
            { name: "Personal Loan EMI", url: "/personal-loan-emi/", icon: "💸" },
            { name: "Loan Eligibility", url: "/loan-eligibility/", icon: "🆗" },
            { name: "Loan Prepayment", url: "/loan-prepayment/", icon: "⚡" },
            { name: "Balance Transfer HLBT", url: "/home-loan-balance-transfer/", icon: "🏦" },
            { name: "Education Moratorium", url: "/education-loan-moratorium/", icon: "🎒" },
            { name: "Gold vs Personal Loan", url: "/gold-loan-vs-personal-loan/", icon: "🏆" },
            { name: "Flat vs Reducing Rate", url: "/flat-vs-reducing-rate/", icon: "📉" },
            { name: "Fixed vs Floating Rate", url: "/fixed-vs-floating-rate/", icon: "⚖️" },
            { name: "No Cost EMI Checker", url: "/no-cost-emi/", icon: "🏷️" },
            { name: "Debt-to-Income Ratio", url: "/debt-to-income/", icon: "📊" },
            { name: "Remaining Loan Balance", url: "/loan-balance-calculator/", icon: "⚖️" },
            { name: "Mortgage Amortization", url: "/mortgage-balance/", icon: "🏠" },
            { name: "Debt Payoff Planner", url: "/debt-payoff/", icon: "📅" },
            { name: "Loan Affordability", url: "/loan-affordability/", icon: "📈" },
            { name: "Loan vs Investment", url: "/loan-vs-investment-calculator/", icon: "🔄" },
            { name: "Step-Up Loan Calc", url: "/step-up-loan-calculator/", icon: "🪜" },
            { name: "Home Affordability Tool", url: "/home-affordability/", icon: "🏠" }
        ],
        taxAndSalary: [
            { name: "Income Tax Planner", url: "/income-tax/", icon: "📑" },
            { name: "Advance Tax Payments", url: "/advance-tax/", icon: "🗓️" },
            { name: "TDS Calculator", url: "/tds-calculator/", icon: "📑" },
            { name: "GST Calculator India", url: "/gst/", icon: "📦" },
            { name: "HRA Tax Exemption", url: "/hra/", icon: "🏠" },
            { name: "EPF Retirement Corpus", url: "/epf/", icon: "🏦" },
            { name: "Gratuity Service Benefit", url: "/gratuity/", icon: "💼" },
            { name: "Capital Gains Tax", url: "/capital-gains-tax/", icon: "📉" },
            { name: "Tax Loss Harvesting", url: "/tax-loss-harvesting/", icon: "✂️" },
            { name: "Foreign Income Plan", url: "/foreign-tax-optimizer/", icon: "🌍" },
            { name: "TCS Refund Calculator", url: "/tcs-calculator/", icon: "🛂" },
            { name: "GST Profit Calculator", url: "/gst-profit-calculator/", icon: "📈" }
        ],
        evAndEnergy: [
            { name: "Solar Rooftop Subsidy", url: "/solar-rooftop-calculator/", icon: "☀️" },
            { name: "EV vs Petrol Cost / KM", url: "/ev-vs-petrol-cost/", icon: "🚗" },
            { name: "Solar + EV Home ROI", url: "/solar-ev-ecosystem/", icon: "🏠" },
            { name: "EV Battery Fund Planner", url: "/ev-battery-fund-planner/", icon: "🔋" },
            { name: "EV vs ICE Lifecycle", url: "/ev-vs-petrol/", icon: "🚗" },
            { name: "Carbon Credit Valuation", url: "/carbon-credit-valuation/", icon: "🌿" },
            // Fallback elements to safely lock exactly 6 links
            { name: "Car Loan EMI", url: "/car-loan/", icon: "🚘" },
            { name: "EMI Calculator", url: "/emi/", icon: "💳" }
        ],
        careerAndIncome: [
            { name: "In-Hand Salary Calculator", url: "/in-hand-salary/", icon: "💰" },
            { name: "Salary Breakup Structure", url: "/salary-breakup/", icon: "📊" },
            { name: "Salary Hike Percentage", url: "/salary-hike/", icon: "🚀" },
            { name: "CTC to In-Hand Tool", url: "/ctc-to-in-hand/", icon: "🏧" },
            { name: "Appraisal Salary Bonus", url: "/bonus-calculator/", icon: "🎁" },
            { name: "Freelancer vs Job Tax", url: "/freelancer-vs-salaried/", icon: "⚖️" },
            { name: "ESOP & RSU Simulator", url: "/esop-simulator/", icon: "💎" },
            { name: "Remote vs Office Savings", url: "/remote-vs-office-calculator/", icon: "🏠" },
            { name: "Corporate Car Lease", url: "/car-lease-vs-buy/", icon: "🚗" },
            { name: "ESOP Startup Value", url: "/esop-calculator/", icon: "💎" }
        ],
        tradingMetrics: [
            { name: "Brokerage & P&L Tool", url: "/brokerage-calculator/", icon: "⚖️" },
            { name: "Futures Optimization", url: "/futures-profit/", icon: "📦" },
            { name: "Options Profit Strategy", url: "/options-profit/", icon: "🎭" },
            { name: "Intraday Profit Analyzer", url: "/intraday-profit-calculator/", icon: "⚡" },
            { name: "Position Sizing Calc", url: "/position-size-calculator/", icon: "📏" },
            { name: "Risk Reward Ratio Tool", url: "/risk-reward-calculator/", icon: "⚖️" },
            { name: "Sharpe Risk Adjuster", url: "/sharpe-ratio/", icon: "⚖️" },
            { name: "Stock Average Cost", url: "/stock-average/", icon: "📊" },
            { name: "Treynor Ratio Calculator", url: "/treynor-ratio/", icon: "📊" },
            { name: "Alpha Generation Metric", url: "/alpha/", icon: "🚀" },
            { name: "Beta System Volatility", url: "/beta/", icon: "📉" },
            { name: "Stop Loss Risk Bracket", url: "/stop-loss/", icon: "🛡️" },
            { name: "Information Ratio Calc", url: "/information-ratio/", icon: "ℹ️" },
            { name: "Sortino Risk Framework", url: "/sortino-ratio/", icon: "📊" }
        ],
        businessAnalytics: [
            { name: "Break Even Sales Volume", url: "/break-even-calculator/", icon: "⚖️" },
            { name: "DCF Intrinsic Valuation", url: "/dcf/", icon: "💎" },
            { name: "EBITDA Operating Profit", url: "/ebitda/", icon: "📊" },
            { name: "Gross & Net Margins", url: "/margin-calculator/", icon: "📏" },
            { name: "Retail Markup Percent", url: "/markup-calculator/", icon: "🏷️" },
            { name: "DSCR Debt Capacity Analyzer", url: "/dscr/", icon: "💰" },
            { name: "Financial Leverage DFL", url: "/financial-leverage/", icon: "🧱" },
            { name: "Operating Leverage DOL", url: "/operating-leverage/", icon: "🏗️" },
            { name: "Corporate Cost of Debt", url: "/cost-of-debt/", icon: "💸" },
            { name: "CAPM Cost of Equity", url: "/cost-of-equity/", icon: "📈" },
            { name: "Enterprise Valuation", url: "/enterprise-value/", icon: "🏢" },
            { name: "Investment Payback", url: "/payback-period-calculator/", icon: "🕰️" },
            { name: "Interest Coverage ICR", url: "/interest-coverage/", icon: "🧱" },
            { name: "Inventory Turnover Ratio", url: "/inventory-turnover/", icon: "📦" },
            { name: "Working Capital Health", url: "/working-capital/", icon: "💳" },
            { name: "Commission Earnings Calc", url: "/commission-calculator/", icon: "💼" }
        ],
        personalFinance: [
            { name: "Budget Planner Tracker", url: "/budget-planner/", icon: "📝" },
            { name: "Net Worth Asset Ledger", url: "/net-worth/", icon: "💎" },
            { name: "Crorepati Milestone Plan", url: "/crorepati-calculator/", icon: "👑" },
            { name: "Emergency Fund Buffer", url: "/emergency-fund/", icon: "🛡️" },
            { name: "Monthly Expense Tracker", url: "/expense-tracker/", icon: "📊" },
            { name: "Savings Rate Tracker %", url: "/savings-rate/", icon: "📈" },
            { name: "50/30/20 Rule Calculator", url: "/50-30-20-rule/", icon: "⚖️" },
            { name: "Financial Goal Planner", url: "/financial-goal-planner/", icon: "🎯" },
            { name: "FIRE Financial Freedom", url: "/fire-calculator/", icon: "🔥" },
            { name: "Passive Income Flows", url: "/passive-income/", icon: "🏖️" },
            { name: "Subscription Leak Audit", url: "/subscription-leak-audit/", icon: "🔍" },
            { name: "Percentage Math Tool", url: "/percentage/", icon: "➗" },
            { name: "Side Income Potential", url: "/side-income/", icon: "💼" }
        ],
        lifeMilestones: [
            { name: "Retirement Target Corpus", url: "/retirement/", icon: "👴" },
            { name: "Marriage Budget Planner", url: "/marriage-planner/", icon: "💍" },
            { name: "Child Education Planner", url: "/child-education-planner/", icon: "🎓" },
            { name: "Health Insurance Tool", url: "/health-insurance-evaluator/", icon: "🏥" },
            { name: "Human Life Value HLV", url: "/hlv-calculator/", icon: "🛡️" },
            { name: "NPS Tax Alpha Optimizer", url: "/nps-optimizer-2026/", icon: "👴" },
            { name: "Sequence of Returns Risk", url: "/srr-simulator/", icon: "📉" },
            { name: "Wedding Inflation Planner", url: "/wedding-inflation-planner/", icon: "💍" },
            { name: "Retirement SWP Longevity", url: "/retirement-withdrawal/", icon: "🏦" },
            { name: "Vacation Savings Goal", url: "/vacation-goal/", icon: "✈️" },
            { name: "Inflation Adjusted Salary", url: "/inflation-adjusted-salary-calculator/", icon: "💵" },
            { name: "Inflation Adjusted SIP", url: "/inflation-adjusted-sip-calculator/", icon: "📈" },
            { name: "Car Inflation Planner", url: "/car-purchase/", icon: "🚗" },
            { name: "Early Retirement Calculator", url: "/early-retirement/", icon: "🏃‍♂️" },
            { name: "Education Future Cost", url: "/education-cost/", icon: "🎓" },
            { name: "Education Savings Roadmap", url: "/education-planning/", icon: "🎒" },
            { name: "Absolute Independence", url: "/financial-independence/", icon: "🔥" },
            { name: "Goal Portfolio Design", url: "/goal-portfolio/", icon: "📁" },
            { name: "Goal Allocation Priority", url: "/goal-priority/", icon: "🚥" },
            { name: "Goal-Driven SIP Calc", url: "/goal-sip-calculator/", icon: "🎯" },
            { name: "Goal Annual Step-Up", url: "/goal-step-up/", icon: "🪜" },
            { name: "Inflation Power Tool", url: "/inflation/", icon: "🎈" },
            { name: "Multiple Goal Tracker", url: "/multiple-goals/", icon: "🎯" },
            { name: "NPS Standard Calculator", url: "/nps/", icon: "👴" },
            { name: "Sukanya Samriddhi Yojana", url: "/ssy/", icon: "👧" },
            { name: "Property Appreciation", url: "/property-appreciation/", icon: "📈" },
            { name: "Real Estate Rental Yield", url: "/rental-yield/", icon: "🏠" },
            { name: "Rent vs Buy Cost Evaluator", url: "/rent-vs-buy-calculator/", icon: "⚖️" },
            { name: "Combined Property ROI", url: "/property-roi/", icon: "🏦" },
            { name: "Property Stamp Duty Fees", url: "/stamp-duty/", icon: "📑" }
        ]
    };

    // Algorithmic Silo Context Router
    let activeSilo = silos.investment; 
    let siloName = "Investment Options";
    
    const mappings = [
        { silo: silos.loans, name: "Loan Analytics", paths: ["emi", "home-loan", "car-loan", "personal-loan-emi", "loan-eligibility", "loan-prepayment", "home-loan-balance-transfer", "education-loan-moratorium", "gold-loan-vs-personal-loan", "flat-vs-reducing-rate", "fixed-vs-floating-rate", "no-cost-emi", "debt-to-income", "loan-balance-calculator", "mortgage-balance", "debt-payoff", "loan-affordability", "loan-vs-investment-calculator", "step-up-loan-calculator", "home-affordability"] },
        { silo: silos.taxAndSalary, name: "Tax & Payroll", paths: ["income-tax", "advance-tax", "tds-calculator", "gst", "hra", "epf", "gratuity", "capital-gains-tax", "tax-loss-harvesting", "foreign-tax-optimizer", "tcs-calculator", "gst-profit-calculator"] },
        { silo: silos.evAndEnergy, name: "Green Energy TCO", paths: ["solar-rooftop-calculator", "ev-vs-petrol-cost", "solar-ev-ecosystem", "ev-battery-fund-planner", "ev-vs-petrol", "carbon-credit-valuation"] },
        { silo: silos.careerAndIncome, name: "Corporate Perks", paths: ["in-hand-salary", "salary-breakup", "salary-hike", "ctc-to-in-hand", "bonus-calculator", "freelancer-vs-salaried", "esop-simulator", "remote-vs-office-calculator", "car-lease-vs-buy", "esop-calculator"] },
        { silo: silos.tradingMetrics, name: "Quant & Derivatives", paths: ["brokerage-calculator", "futures-profit", "options-profit", "intraday-profit-calculator", "position-size-calculator", "risk-reward-calculator", "sharpe-ratio", "stock-average", "treynor-ratio", "alpha", "beta", "stop-loss", "information-ratio", "sortino-ratio"] },
        { silo: silos.businessAnalytics, name: "Corporate FP&A", paths: ["break-even-calculator", "dcf", "ebitda", "margin-calculator", "markup-calculator", "dscr", "financial-leverage", "operating-leverage", "cost-of-debt", "cost-of-equity", "enterprise-value", "payback-period-calculator", "interest-coverage", "inventory-turnover", "working-capital", "commission-calculator"] },
        { silo: silos.personalFinance, name: "Wealth Architecture", paths: ["budget-planner", "net-worth", "crorepati-calculator", "emergency-fund", "expense-tracker", "savings-rate", "50-30-20-rule", "financial-goal-planner", "fire-calculator", "passive-income", "subscription-leak-audit", "percentage", "side-income"] },
        { silo: silos.lifeMilestones, name: "Life Milestones", paths: ["retirement", "marriage-planner", "child-education-planner", "health-insurance-evaluator", "hlv-calculator", "nps-optimizer-2026", "srr-simulator", "wedding-inflation-planner", "retirement-withdrawal", "vacation-goal", "inflation-adjusted-salary-calculator", "inflation-adjusted-sip-calculator", "car-purchase", "early-retirement", "education-cost", "education-planning", "financial-independence", "goal-portfolio", "goal-priority", "goal-sip-calculator", "goal-step-up", "inflation", "multiple-goals", "nps", "ssy", "property-appreciation", "rental-yield", "rent-vs-buy-calculator", "property-roi", "stamp-duty"] }
    ];

    for (let target of mappings) {
        if (target.paths.includes(currentPath)) { activeSilo = target.silo; siloName = target.name; break; }
    }

    // Dynamic Header text badge updates
    const badge = document.getElementById("siloBadgeCount");
    if (badge) badge.textContent = `${siloName} Module`;

    // Filter active page out and cleanly slice to output EXACTLY 6 elements
    let renderedCount = 0;
    activeSilo.forEach(link => {
        if (link.url !== window.location.pathname && renderedCount < 6) {
            relatedHTML += `
                <a href="${link.url}" class="group p-5 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl hover:border-blue-500 hover:from-blue-50/40 hover:to-blue-100/20 hover:scale-[1.03] transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[96px]">
                    <div class="flex items-start gap-3">
                        <span class="text-xl inline-block mt-0.5 group-hover:scale-110 transition-transform duration-300">${link.icon || '📈'}</span>
                        <h4 class="font-bold text-slate-700 text-xs group-hover:text-blue-600 transition-colors duration-200 leading-snug">${link.name}</h4>
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 group-hover:text-blue-500 mt-3 flex items-center gap-0.5 transition-colors uppercase tracking-wider">
                        Open Tool
                        <svg class="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </a>`;
            renderedCount++;
        }
    });
    document.getElementById("dynamicRelatedLinks").innerHTML = relatedHTML;
});
</script>
