/**
 * ArthCalculator.in - Global Search Overlay & Autocomplete Engine
 * Asset Path Location: /js/search.js
 * Isolated standalone controller for site-wide instant search
 */
(function() {
    // Comprehensive Master Search Database Index
    const catalog = [
        { name: "SIP Calculator (Systematic Investment Plan)", url: "/sip/", icon: "💰", keys: "sip mutual fund investment returns compounding points step up systematic return planning mf allocation" },
        { name: "Step-Up SIP Calculator", url: "/step-up-sip/", icon: "📈", keys: "step up incremental sip salary hike increase top up compounding mutual fund investment allocation" },
        { name: "Lumpsum Investment Compound Growth", url: "/lumpsum/", icon: "💵", keys: "lumpsum one time investment wealth compounding mf stock returns mutual fund compounding future value" },
        { name: "CAGR Growth Rate Calculator", url: "/cagr/", icon: "📊", keys: "cagr compound annual growth rate portfolio return business analytics percentage valuation stocks point" },
        { name: "XIRR Extended Return Analyzer", url: "/xirr/", icon: "💹", keys: "xirr irr extended internal rate of return irregular cash flows sip multiple buy sell stock portfolio calculations" },
        { name: "Compound Interest Calculator", url: "/compound-interest/", icon: "⏳", keys: "compound interest compounding savings asset growth wealth calculation monthly yearly continuous" },
        { name: "FD Calculator (Fixed Deposit)", url: "/fd/", icon: "🏦", keys: "fd fixed deposit banking safe returns interest monthly payout compounding sbi bank saving post office" },
        { name: "RD Calculator (Recurring Deposit)", url: "/rd/", icon: "🏦", keys: "rd recurring deposit banks post office monthly savings schemes installment compounding interest safely" },
        { name: "SWP Planner (Systematic Withdrawal Plan)", url: "/swp/", icon: "🏧", keys: "swp systematic withdrawal plan retirement regular monthly cash income payout mutual fund dividends annuity" },
        { name: "Real Rate of Return Calculator", url: "/real-return/", icon: "📉", keys: "real rate return net of inflation purchasing power investment true gains yields adjusted calculation" },
        { name: "Simple Interest Calculator", url: "/simple-interest/", icon: "🧮", keys: "simple interest formula flat tracking linear borrowing standard math banking yields" },
        { name: "Future Value (FV) Calculator", url: "/future-value/", icon: "📈", keys: "future value fv compounding inflation cash projections math money timeline wealth appreciation" },
        { name: "Present Value (PV) Calculator", url: "/present-value/", icon: "📉", keys: "present value pv discounting discounted cash flows time value money analytics liability calculations" },
        { name: "Time Value of Money (TVM) Tool", url: "/time-value-of-money/", icon: "⏳", keys: "tvm time value money finance foundational formulas discounting cash flows compounding timelines" },
        { name: "Portfolio Overlap Finder", url: "/portfolio-overlap/", icon: "📂", keys: "portfolio overlap mutual fund diversification holdings stock concentration tracking assets direct equity" },
        { name: "Expense Ratio Impact Calculator", url: "/expense-ratio/", icon: "📉", keys: "expense ratio mutual fund fees direct vs regular returns tracking commission costs drag wealth" },
        { name: "EMI Loan Calculation Engine", url: "/emi/", icon: "💳", keys: "emi loan repayment reduction home personal car reducing absolute total interest schedule chart breakdown" },
        { name: "Home Loan Eligibility & Amortization", url: "/home-loan/", icon: "🏠", keys: "home loan eligibility processing house flat property builder bank sbi interest mortgages balance asset buy" },
        { name: "Car Loan Monthly Re-payments", url: "/car-loan/", icon: "🚗", keys: "car vehicle auto transport loan emi interest reducing rate tenure downpayment bike dealership purchase" },
        { name: "Personal Loan Instant EMI Analytics", url: "/personal-loan-emi/", icon: "💸", keys: "personal loan salary credit balance instant emergency interest fees processing unsecured borrowing math" },
        { name: "Loan Prepayment & Interest Saver", url: "/loan-prepayment/", icon: "⚡", keys: "loan prepayment early payoff extra emi tenure reduction interest savings bank closing debt tracker" },
        { name: "Home Loan Balance Transfer (HLBT)", url: "/home-loan-balance-transfer/", icon: "🏦", keys: "hlbt home loan balance transfer refinancing interest rate switch processing fees bank switching" },
        { name: "Education Loan Moratorium Planner", url: "/education-loan-moratorium/", icon: "🎒", keys: "education loan moratorium student study abroad interest accrual collateral university funding emi" },
        { name: "Gold Loan vs Personal Loan Evaluator", url: "/gold-loan-vs-personal-loan/", icon: "🏆", keys: "gold loan personal unsecured secured collateral interest comparison pawn shop jewelry pledge" },
        { name: "Flat vs Reducing Interest Rate Calculator", url: "/flat-vs-reducing-rate/", icon: "📉", keys: "flat versus reducing interest rate calculation banking processing fee real yield hidden costs" },
        { name: "Fixed vs Floating Interest Rate Switcher", url: "/fixed-vs-floating-rate/", icon: "⚖️", keys: "fixed floating interest rates rbi repo rate linked mclr home loan market volatility benchmarking" },
        { name: "No Cost EMI Hidden Charges Checker", url: "/no-cost-emi/", icon: "🏷️", keys: "no cost emi zero interest processing fee hidden processing discount upfront gst calculations retail" },
        { name: "Debt-to-Income (DTI) Ratio Planner", url: "/debt-to-income/", icon: "📊", keys: "dti debt to income ratio credit score loan eligibility banking compliance leverage limits tracking" },
        { name: "Remaining Loan Balance Calculator", url: "/loan-balance-calculator/", icon: "⚖️", keys: "remaining loan balance tracking amortization schedule paid off principal interest outstanding metrics" },
        { name: "Mortgage Refinance Amortization", url: "/mortgage-balance/", icon: "🏠", keys: "mortgage balance property equity borrowing tracking closing valuation bank statements refinancing" },
        { name: "Debt Payoff Avalanche vs Snowball Planner", url: "/debt-payoff/", icon: "📅", keys: "debt payoff reduction planner avalanche snowball card consolidation tracking payments schedules liabilities" },
        { name: "Loan Affordability Index Tracker", url: "/loan-affordability/", icon: "📈", keys: "loan affordability eligibility gross income multiplier maximum emi limits capacity banking profile" },
        { name: "Income Tax Regime Planner India", url: "/income-tax/", icon: "📑", keys: "income tax old regime new slab deductions standard deduction tax brackets standard rebates exemptions calculation budget" },
        { name: "Advance Tax Installments Planner", url: "/advance-tax/", icon: "🗓️", keys: "advance tax estimated liabilities self employed salaried penalty calculation compliance deadlines returns filing quarterly" },
        { name: "TDS Compliance Metric Sheet", url: "/tds-calculator/", icon: "📑", keys: "tds tax deducted at source threshold salary interest rent professionals freelancers withholding tax compliance" },
        { name: "GST Calculator India (Goods & Services)", url: "/gst/", icon: "📦", keys: "gst gross item cgst sgst igst net product bills invoices manufacturing business taxation central slabs text input" },
        { name: "HRA Tax Exemption Finder", url: "/hra/", icon: "🏠", keys: "hra house rent allowance standard exemption salary structure proof metrics savings real house landlords text sheet" },
        { name: "EPF Retirement Accumulation Corpus", url: "/epf/", icon: "🏦", keys: "epf provident fund employee corporate salary contributions balance check interest voluntary retirement pf passbook" },
        { name: "Gratuity Payment Calculator", url: "/gratuity/", icon: "💼", keys: "gratuity service company exit resignation terminal benefit compliance years calculation continuous structure act" },
        { name: "Capital Gains Tax Estimator", url: "/capital-gains-tax/", icon: "📉", keys: "capital gains tax stcg ltcg long short term shares property mutual funds indexation 112a holding calculations" },
        { name: "Tax Loss Harvesting Optimizer", url: "/tax-loss-harvesting/", icon: "✂️", keys: "tax loss harvesting capital offset balancing equity delivery set off short long losses share adjustments" },
        { name: "TCS Refund & Liability Calculator", url: "/tcs-calculator/", icon: "🛂", keys: "tcs tax collected at source luxury cars foreign remittances travel compliance collection rates adjustments" },
        { name: "GST Profit Margin & Price Calculator", url: "/gst-profit-calculator/", icon: "📈", keys: "gst profit pricing markup invoice items tax inclusive exclusive distribution retail product margin" },
        { name: "Break Even Sales Volume Engine", url: "/break-even-calculator/", icon: "⚖️", keys: "break even margin fixed variable variable manufacturing quantity sales pricing product units units capacity target profit" },
        { name: "DCF Intrinsic Equity Valuation", url: "/dcf/", icon: "💎", keys: "dcf discounted cash flow intrinsic true fair value stocks valuation enterprise projections wacc growth terminal multiplier" },
        { name: "EBITDA Operating Profit Calculator", url: "/ebitda/", icon: "📊", keys: "ebitda operating earnings interest tax depreciation amortization corporate financial health corporate margin margins" },
        { name: "Gross & Net Profit Margin Analyzer", url: "/margin-calculator/", icon: "📏", keys: "gross profit net margin pricing cost of goods sold cogs analytics wholesale distribution revenues markups" },
        { name: "Retail Markup Percentage Calculator", url: "/markup-calculator/", icon: "🏷️", keys: "markup calculator margin retail pricing multiplier costs retail inventory cost profile calculations" },
        { name: "DSCR Debt Service Coverage Ratio", url: "/dscr/", icon: "💰", keys: "dscr debt service coverage ratio corporate loans banking leverage solvency tracking limits capacity cash flow" },
        { name: "Degree of Financial Leverage (DFL)", url: "/financial-leverage/", icon: "🧱", keys: "dfl degree financial leverage debt equity structure risk tracking solvency parameters eps ebit volatility" },
        { name: "Degree of Operating Leverage (DOL)", url: "/operating-leverage/", icon: "🏗️" , keys: "dol operating leverage fixed asset fixed costs break even operational asset business metrics volatility" },
        { name: "Corporate Cost of Debt Calculator", url: "/cost-of-debt/", icon: "💸", keys: "cost of debt weighted post tax interest premium bonds yield corporate balance sheets tracking models" },
        { name: "CAPM Cost of Equity Finder", url: "/cost-of-equity/", icon: "📈", keys: "cost of equity capm beta risk free rate market premium hurdle discount valuation analytics models" },
        { name: "Enterprise Valuation (EV) Engine", url: "/enterprise-value/", icon: "🏢", keys: "enterprise value ev market cap debt cash adjustments multiples corporate valuation takeover pricing acquisition metrics" },
        { name: "Investment Payback Period Calculator", url: "/payback-period-calculator/", icon: "🕰️", keys: "payback period calculation capital budgeting corporate project cash flows break even timelines yields metrics" },
        { name: "Interest Coverage Ratio (ICR)", url: "/interest-coverage/", icon: "🧱", keys: "icr interest coverage ratio solvency safety margins ebit borrowing bank health monitoring credit profile" },
        { name: "Inventory Turnover Ratio Checker", url: "/inventory-turnover/", icon: "📦", keys: "inventory turnover efficiency storage warehousing cost of goods sold sales velocity operations tracking metrics" },
        { name: "Working Capital Health Analyzer", url: "/working-capital/", icon: "💳", keys: "working capital current ratio liquidity short term asset liability operation profiles runway tracking diagnostics" },
        { name: "Solar Rooftop Subsidy & Investment ROI", url: "/solar-rooftop-calculator/", icon: "☀️", keys: "solar rooftop subsidy light electricity bills cost savings government benchmark panel mnre structure power grid setup" },
        { name: "EV vs Petrol Cost Per Kilometer TCO", url: "/ev-vs-petrol-cost/", icon: "🚗", keys: "ev electronic vehicle petrol cost km tco running mileage battery lifespan engine comparison fuel pricing car buy" },
        { name: "Solar + EV Home Ecosystem Planner", url: "/solar-ev-ecosystem/", icon: "🏠", keys: "solar ev charger combination home grid off grid net zero fuel free green running costs payback period calculations" },
        { name: "EV Battery Replacement Fund Planner", url: "/ev-battery-fund-planner/", icon: "🔋", keys: "ev battery fund replacement degradation pricing compound savings future costs vehicle life metrics sinking" },
        { name: "EV vs ICE Powertrain Lifecycle Comparison", url: "/ev-vs-petrol/", icon: "🚗", keys: "ev hybrid ice petrol diesel gas vehicle comparison running maintenance tco depreciation long term" },
        { name: "Carbon Credit Project Valuation", url: "/carbon-credit-valuation/", icon: "🌿", keys: "carbon credit offset project valuation green offsets pricing tree planting standard compliance monetization metrics" },
        { name: "Net Worth Liquidity Asset Ledger", url: "/net-worth/", icon: "💎", keys: "net worth wealth personal equity sheet liability land bank liquid balance gold calculations tracking metric records" },
        { name: "Budget Planner Tracker", url: "/budget-planner/", icon: "📝", keys: "budget allocation planning salary tracker tracking costs bucket management tools cash envelope systems parameters" },
        { name: "Crorepati Financial Milestone Plan", url: "/crorepati-calculator/", icon: "👑", keys: "crorepati timeline target savings monthly goal tracking compounding wealth milestone timelines speed models" },
        { name: "Emergency Fund Buffer Builder", url: "/emergency-fund/", icon: "🛡️", keys: "emergency fund rainy day reserve liquidity liquid storage banking monthly fixed expenses safety margins" },
        { name: "FIRE Financial Freedom Planner", url: "/fire-calculator/", icon: "🔥", keys: "fire early retirement independence fast savings tracking safe withdrawal multiplier expense projections cash" },
        { name: "Passive Income Streams Designer", url: "/passive-income/", icon: "🏖️", keys: "passive income dividend yield rent interest royalties wealth side hustle cash generation models tracking" },
        { name: "Subscription Leak & Cost Auditor", url: "/subscription-leak-audit/", icon: "🔍", keys: "subscription audit leak hidden costs monthly app recurring bill monitoring processing software digital optimization" },
        { name: "Retirement Target Corpus Metrics", url: "/retirement/", icon: "👴", keys: "retirement planning age life longevity inflation corpus pensions annuity monthly costs expenses milestones" },
        { name: "Marriage Budget Planner", url: "/marriage-planner/", icon: "💍", keys: "marriage wedding hall catering jewelry cost projections layout gold booking designer events milestones planner" },
        { name: "Child Education Planner Roadmap", url: "/child-education-planner/", icon: "🎓", keys: "child education costs future higher studies collages international admission inflation savings growth milestones" },
        { name: "Rent vs Buy Real Estate Evaluator", url: "/rent-vs-buy-calculator/", icon: "⚖️", category: "milestones", keys: "rent vs buy property house home ownership downpayment tax home appreciation vs compound savings calculation milestones" },
        { name: "Real Estate Rental Yield Tool", url: "/rental-yield/", icon: "🏠", keys: "rental yield gross net property investment cap rates monthly rent maintenance real estate analytics calculations" },
        { name: "Property Appreciation Metric Tracker", url: "/property-appreciation/", icon: "📈", keys: "property appreciation real estate growth compounding housing land valuation future price projections modeling" },
        { name: "NPS Tax Optimization System (National Pension)", url: "/nps-optimizer-2026/", icon: "👴", keys: "nps national pension scheme corporate model tier 1 active choice auto choice 80ccd 2 tax alpha updates" },
        { name: "Sukanya Samriddhi Yojana (SSY) Growth", url: "/ssy/", icon: "👧", keys: "ssy sukanya samriddhi yojana girl child savings government schemes post office compounding fixed interest returns" }
    ];

    // Build search modal markup programmatically into page tree 
    function buildOverlaySearchModalDOM() {
        if (document.getElementById("globalSearchOverlay")) return;

        const overlayModal = document.createElement("div");
        overlayModal.id = "globalSearchOverlay";
        overlayModal.className = "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] hidden items-start justify-center p-4 sm:p-10 opacity-0 transition-opacity duration-200";
        overlayModal.style.boxSizing = "border-box";
        overlayModal.innerHTML = `
            <div class="bg-white w-full max-w-2xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden mt-4 sm:mt-12 flex flex-col max-h-[80vh] transform scale-95 transition-transform duration-200" id="globalSearchCard" style="box-sizing: border-box;">
                <div class="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50/50">
                    <div class="text-blue-600 shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
                    <input type="text" id="globalSearchInputField" placeholder="Type keywords (e.g., sip, emi, tax)..." class="w-full bg-transparent text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none" style="border: none !important; outline: none !important; box-shadow: none !important; padding: 6px 0 !important; width: 100% !important; background: transparent !important; display: block !important;">
                    <button id="closeSearchBtn" class="text-xs bg-slate-200 hover:bg-slate-300 text-slate-500 font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wider transition-colors shrink-0">Esc</button>
                </div>
                <div class="flex-1 overflow-y-auto p-4 space-y-1 bg-white flex flex-col items-stretch" id="globalSearchResultsContainer">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2 text-left">Suggested Quick Launches</div>
                    <a href="/sip/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">💰</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Systematic Investment Plan (SIP) Calculator</span></a>
                    <a href="/emi/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">💳</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Loan EMI Amortization Calculator</span></a>
                    <a href="/income-tax/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📑</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Income Tax Regime Tax Planner</span></a>
                    <a href="/cagr/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📊</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Compound Annual Growth Rate (CAGR) Tool</span></a>
                </div>
                <div class="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                    <div>Search Architecture</div>
                    <div class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>All Tools Indexed</div>
                </div>
            </div>`;
        document.body.appendChild(overlayModal);
        bindSearchInteractions();
    }

    function bindSearchInteractions() {
        const overlay = document.getElementById("globalSearchOverlay");
        const card = document.getElementById("globalSearchCard");
        const inputField = document.getElementById("globalSearchInputField");
        const resultsBox = document.getElementById("globalSearchResultsContainer");

        window.openGlobalSearchModal = function() {
            if (!overlay) return;
            overlay.classList.remove("hidden");
            overlay.classList.add("flex");
            setTimeout(() => { overlay.classList.remove("opacity-0"); card.classList.remove("scale-95"); if (inputField) inputField.focus(); }, 10);
            document.body.style.overflow = "hidden";
        };

        window.closeGlobalSearchModal = function() {
            if (!overlay) return;
            overlay.classList.add("opacity-0"); card.classList.add("scale-95");
            setTimeout(() => { overlay.classList.remove("flex"); overlay.classList.add("hidden"); }, 200);
            document.body.style.overflow = ""; if (inputField) inputField.value = "";
        };

        if (inputField) {
            inputField.addEventListener("input", (e) => {
                const term = e.target.value.toLowerCase().trim();
                if (term.length === 0) {
                    resultsBox.innerHTML = `
                        <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2 text-left">Suggested Quick Launches</div>
                        <a href="/sip/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">💰</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Systematic Investment Plan (SIP) Calculator</span></a>
                        <a href="/emi/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">💳</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Loan EMI Amortization Calculator</span></a>
                        <a href="/income-tax/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📑</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Income Tax Regime Tax Planner</span></a>
                        <a href="/cagr/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📊</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Compound Annual Growth Rate (CAGR) Tool</span></a>`;
                    return;
                }

                const matches = catalog.filter(item => item.name.toLowerCase().includes(term) || item.keys.toLowerCase().includes(term));
                if (matches.length === 0) {
                    resultsBox.innerHTML = `<div class="py-12 text-center text-sm font-bold text-slate-500">No calculators matched "${e.target.value}"</div>`;
                    return;
                }

                let matchHTML = `<div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2 text-left">Found ${matches.length} Calculator Matches</div>`;
                matches.forEach(item => {
                    matchHTML += `
                        <a href="${item.url}" class="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/80 group transition-colors border border-transparent hover:border-blue-100 text-left">
                            <div class="flex items-center gap-3 min-w-0">
                                <span class="text-lg bg-slate-100 p-1.5 rounded-lg group-hover:bg-blue-100/50 transition-colors">${item.icon}</span>
                                <span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors truncate">${item.name}</span>
                            </div>
                            <span class="text-[10px] font-bold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider whitespace-nowrap hidden sm:inline-block">Launch Tool →</span>
                        </a>`;
                });
                resultsBox.innerHTML = matchHTML;
            });
        }

        document.getElementById("closeSearchBtn").addEventListener("click", window.closeGlobalSearchModal);
        overlay.addEventListener("click", (e) => { if (e.target === overlay) window.closeGlobalSearchModal(); });
    }

    // FAIL-SAFE LIVE WATCHER LOOP (Attaches inputs immediately after the dynamic innerHTML fetch layout drops in)
    let searchTicks = 0;
    const activeSearchWatcher = setInterval(() => {
        searchTicks++;
        const desktopTrigger = document.getElementById("desktopSearchTrigger");
        const mobileTrigger = document.getElementById("mobileSearchTrigger");
        const mobileHamburger = document.getElementById("menuBtn");
        const mobileDropdown = document.getElementById("mobileMenu");

        if (desktopTrigger && mobileTrigger) {
            clearInterval(activeSearchWatcher); // Kill loop instantly once elements arrive

            buildOverlaySearchModalDOM();

            desktopTrigger.addEventListener("click", window.openGlobalSearchModal);
            mobileTrigger.addEventListener("click", window.openGlobalSearchModal);
            
            if (mobileHamburger && mobileDropdown) {
                mobileHamburger.addEventListener("click", () => { mobileDropdown.classList.toggle("hidden"); });
            }
        }
        if (searchTicks > 120) clearInterval(activeSearchWatcher); // Timeout protection escape hatch
    }, 50);

    // Document Keyboard Shortcuts Event Listener Panel
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && window.closeGlobalSearchModal) window.closeGlobalSearchModal();
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            if (window.openGlobalSearchModal) window.openGlobalSearchModal();
        }
    });
})();
