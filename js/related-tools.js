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

        // 171 Calculators Core Database Mapping Matrix (Aligned with XML Sitemap Specifications)
        const db = [
            // --- INVESTMENT, MUTUAL FUNDS & RETIREMENT ---
            { name: "SIP Calculator", url: "/sip/", icon: "📈", category: "investment", keys: "sip mutual fund investment returns compounding systematic plan mf allocation" },
            { name: "Lumpsum Growth Calc", url: "/lumpsum/", icon: "💰", category: "investment", keys: "lumpsum one time investment wealth compounding mf stock returns future value" },
            { name: "CAGR Growth Tool", url: "/cagr/", icon: "📊", category: "investment", keys: "cagr compound annual growth rate portfolio return business analytics percentage valuation" },
            { name: "Step Up SIP Optimizer", url: "/step-up-sip/", icon: "🚀", category: "investment", keys: "step up incremental sip salary hike increase top up compounding allocation" },
            { name: "XIRR Portfolio Analyzer", url: "/xirr/", icon: "💹", category: "investment", keys: "xirr irr extended internal rate of return irregular cash flows buy sell stock shares" },
            { name: "Compound Interest Engine", url: "/compound-interest/", icon: "⏳", category: "investment", keys: "compound interest compounding savings asset growth wealth math continuous" },
            { name: "FD Calculator (Fixed Deposit)", url: "/fd/", icon: "🏦", category: "investment", keys: "fd fixed deposit banking safe returns interest monthly payout compounding sbi bank" },
            { name: "RD Calculator (Recurring Deposit)", url: "/rd/", icon: "⏱️", category: "investment", keys: "rd recurring deposit banks post office monthly savings schemes installment compounding" },
            { name: "SWP Withdrawal Planner", url: "/swp/", icon: "🏧", category: "investment", keys: "swp systematic withdrawal plan retirement regular monthly cash income payout dividends" },
            { name: "PPF Wealth Accumulator", url: "/ppf/", icon: "🛡️", category: "investment", keys: "ppf public provident fund government savings scheme tax free safe interest post office" },
            { name: "EPF Retirement Passbook", url: "/epf/", icon: "💼", category: "investment", keys: "epf pf provident fund employee contribution pension passbook balance sbi interest" },
            { name: "NPS Tax Alpha Optimizer", url: "/nps-optimizer-2026/", icon: "👴", category: "investment", keys: "nps national pension scheme tier 1 corporate model 80ccd active choice auto choice" },
            { name: "Sukanya Samriddhi Yojana", url: "/ssy/", icon: "👧", category: "investment", keys: "ssy ssa sukanya samriddhi yojana girl child daughter saving interest post office compounding" },
            { name: "Mutual Fund Return Planner", url: "/mutual-fund-returns/", icon: "🎯", category: "investment", keys: "mutual fund returns absolute mf performance metrics direct regular equity" },
            { name: "SIP vs FD Comparison", url: "/sip-vs-fd/", icon: "⚔️", category: "investment", keys: "sip vs fd fixed deposit mutual fund yield returns risk vs reward contrast asset allocation" },
            { name: "Asset Allocation Model", url: "/asset-allocation/", icon: "⚖️", category: "investment", keys: "asset allocation diversification portfolio risk rebalancing equity debt gold capital" },
            { name: "Simple Interest Calculator", url: "/simple-interest/", icon: "🧮", category: "investment", keys: "simple interest si flat rate tracking borrowing linear math banking formulas" },
            { name: "Real Rate of Return Finder", url: "/real-return/", icon: "📉", category: "investment", keys: "real return net inflation adjusted adjustments purchasing power yield true value gains" },
            { name: "Alpha Portfolio Yield", url: "/alpha/", icon: "⚡", category: "investment", keys: "alpha portfolio return asset metric outperformance market benchmark mutual funds gains" },
            { name: "Beta Market Risk Metric", url: "/beta/", icon: "📉", category: "investment", keys: "beta market risk volatility portfolio benchmark capm metrics tracking shares equity" },
            { name: "Bonus Sizing Calculator", url: "/bonus-calculator/", icon: "🎁", category: "investment", keys: "bonus calculator corporate action share dilution equity issuance ratios split" },
            { name: "Dividend Growth Model", url: "/dividend-growth/", icon: "🧳", category: "investment", keys: "dividend growth ddm valuation constant compounding returns pricing streams projections" },
            { name: "Dividend Yield Tracker", url: "/dividend-yield/", icon: "🎟️", category: "investment", keys: "dividend yield payout tracking portfolio income passive stock cash flow reserves" },
            { name: "Financial Goal Planner", url: "/financial-goal-planner/", icon: "🎯", category: "investment", keys: "financial goal planner timeline corpus requirements multi asset allocation targeting milestone" },
            { name: "Financial Independence Grid", url: "/financial-independence/", icon: "🏁", category: "investment", keys: "financial independence corpus runaway metrics fire multiplier safe withdrawal models portfolio" },
            { name: "FIRE Calculator Suite", url: "/fire-calculator/", icon: "🔥", category: "investment", keys: "fire early retirement independence fast savings tracking safe withdrawal multiplier expense projections" },
            { name: "IRR Internal Return Engine", url: "/irr-calculator/", icon: "⏳", category: "investment", keys: "irr return metric yield hurdle cash outflow capital budgeting project timeline validation cash" },
            { name: "Portfolio Overlap Finder", url: "/portfolio-overlap/", icon: "📂", category: "investment", keys: "portfolio overlap mutual fund diversification holdings stock concentration tracking assets direct equity" },
            { name: "Portfolio Return Matrix", url: "/portfolio-return-calculator/", icon: "📊", category: "investment", keys: "portfolio return assets weights compounding absolute profile metrics track records return" },
            { name: "Portfolio Rebalancing Matrix", url: "/portfolio-rebalancing/", icon: "🔄", category: "investment", keys: "portfolio rebalancing allocation deviation standard limits target layout buy sell equity debt allocation" },
            { name: "Future Value (FV) Engine", url: "/future-value/", icon: "📈", category: "investment", keys: "future value fv compounding inflation cash projections math money timeline wealth appreciation valuation" },
            { name: "Present Value (PV) Engine", url: "/present-value/", icon: "📉", category: "investment", keys: "present value pv discounting discounted cash flows time value money analytics liability calculations" },
            { name: "Inflation Impact Calculator", url: "/inflation/", icon: "🎈", category: "investment", keys: "inflation indexing rupee value cost escalation historical parameters compounding decay cash purchasing" },
            { name: "Inflation Adjusted SIP Tracker", url: "/inflation-adjusted-sip-calculator/", icon: "💹", category: "investment", keys: "inflation adjusted systematic planning required real yield mf adjustments future metrics target" },
            { name: "Required CAGR Estimator", url: "/required-cagr-calculator/", icon: "📊", category: "investment", keys: "required cagr future goal target horizon calculation backward interest computation assets growth" },
            { name: "Rolling Returns Consistency", url: "/rolling-returns/", icon: "⏳", category: "investment", keys: "rolling returns timeline mutual fund equity performance alpha consistency verification tracking profiling" },
            { name: "Rule of 72 Doubling Time", url: "/rule-of-72/", icon: "🔢", category: "investment", keys: "rule of 72 compounding double timeline quick estimation interest division assets wealth" },
            { name: "Sharpe Ratio Risk Adjuster", url: "/sharpe-ratio/", icon: "📊", category: "investment", keys: "sharpe risk adjusted portfolio return mutual fund evaluation metrics tracking variance asset" },
            { name: "Sortino Ratio Variance Check", url: "/sortino-ratio/", icon: "📊", category: "investment", keys: "sortino ratio risk adjusted down side variance deviation portfolio mutual fund analytics volatility" },
            { name: "Treynor Ratio Portfolio Metric", url: "/treynor-ratio/", icon: "📊", category: "investment", keys: "treynor ratio risk adjusted returns beta systematic mutual fund evaluation calculations framework" },
            { name: "SRR Sequence Risk Simulator", url: "/srr-simulator/", icon: "🎲", category: "investment", keys: "srr sequence of returns risk portfolio cash drain tracking market cycles retirement variance run" },
            { name: "Time Value of Money (TVM)", url: "/time-value-of-money/", icon: "⏳", category: "investment", keys: "tvm time value money finance foundational formulas discounting cash flows compounding timelines value" },
            { name: "Time to Freedom Projection", url: "/time-to-financial-freedom/", icon: "⏳", category: "investment", keys: "time to financial freedom asset tracking runway models target saving compound rates milestone" },
            { name: "Wealth Projection Horizon", url: "/wealth-projection/", icon: "📈", category: "investment", keys: "wealth trajectory balance compound projections model asset lifecycle tracking future values accumulation" },

            // --- LOANS & DEBT METRICS ---
            { name: "EMI Loan Calculator", url: "/emi/", icon: "💳", category: "loans", keys: "emi loan repayment reduction home personal car reducing absolute total interest schedule chart breakdown" },
            { name: "Home Loan Planner", url: "/home-loan/", icon: "🏠", category: "loans", keys: "home loan eligibility processing house flat property builder bank sbi interest mortgages balance asset buy" },
            { name: "Car Loan EMI Sheet", url: "/car-loan/", icon: "🚗", category: "loans", keys: "car vehicle auto transport loan emi interest reducing rate tenure downpayment bike dealership purchase" },
            { name: "Personal Loan Instant EMI", url: "/personal-loan-emi/", icon: "💸", category: "loans", keys: "personal loan salary credit balance instant emergency interest fees processing unsecured borrowing math" },
            { name: "Loan Eligibility Tester", url: "/loan-eligibility/", icon: "🆗", category: "loans", keys: "loan eligibility criteria salary tracking banking profile score limits multiplier credit criteria" },
            { name: "Loan Prepayment Saver", url: "/loan-prepayment/", icon: "⚡", category: "loans", keys: "loan prepayment early payoff extra emi tenure reduction interest savings bank closing debt tracker" },
            { name: "Home Loan Balance Transfer", url: "/home-loan-balance-transfer/", icon: "🔄", category: "loans", keys: "hlbt balance transfer switch bank refinancing mclr repo rate lower processing fee" },
            { name: "Flat vs Reducing Rate Switch", url: "/flat-vs-reducing-rate/", icon: "📉", category: "loans", keys: "flat versus reducing interest rate calculation banking processing fee real yield hidden costs" },
            { name: "No Cost EMI Checker", url: "/no-cost-emi/", icon: "🏷️", category: "loans", keys: "no cost emi zero interest processing fee hidden processing discount upfront gst calculations retail" },
            { name: "Debt Payoff Snowball Grid", url: "/debt-payoff/", icon: "📅", category: "loans", keys: "debt payoff reduction planner avalanche snowball card consolidation tracking payments schedules liabilities" },
            { name: "Car Lease vs Buy Evaluator", url: "/car-lease-vs-buy/", icon: "⚖️", category: "loans", keys: "car lease vs buy vehicle leasing corporate tax shield depreciation purchase options transaction" },
            { name: "Credit Card Interest Loop", url: "/credit-card-interest/", icon: "💳", category: "loans", keys: "credit card interest debt trap roll over monthly compounding penal cash advances finance charges penalty" },
            { name: "Credit Card Rewards Point", url: "/credit-card-rewards/", icon: "🎁", category: "loans", keys: "credit card rewards points cashback monetization mile collection travel perks processing benefits" },
            { name: "Debt to Equity Corporate", url: "/debt-to-equity/", icon: "⚖️", category: "loans", keys: "debt to equity ratio leverage corporate metrics solvency profile capital balance tracking audit" },
            { name: "Debt to Income (DTI) Planner", url: "/debt-to-income/", icon: "📊", category: "loans", keys: "dti debt to income ratio credit score loan eligibility banking compliance leverage limits tracking" },
            { name: "Education Loan Moratorium", url: "/education-loan-moratorium/", icon: "🎒", category: "loans", keys: "education loan moratorium student study abroad interest accrual collateral university funding emi interest" },
            { name: "Fixed vs Floating Rate", url: "/fixed-vs-floating-rate/", icon: "⚖️", category: "loans", keys: "fixed floating interest rates rbi repo rate linked mclr home loan market volatility benchmarking selection" },
            { name: "Gold Loan vs Personal Loan", url: "/gold-loan-vs-personal-loan/", icon: "🏆", category: "loans", keys: "gold loan personal unsecured secured collateral interest comparison pawn shop jewelry pledge finance" },
            { name: "Home Affordability Index", url: "/home-affordability/", icon: "🏠", category: "loans", keys: "home affordability downpayment salary tracking properties mortgages capacity indexing limits cost basis" },
            { name: "Loan Balance Calculator", url: "/loan-balance-calculator/", icon: "⚖️", category: "loans", keys: "remaining loan balance tracking amortization schedule paid off principal interest outstanding metrics status" },
            { name: "Loan vs Investment Cost", url: "/loan-vs-investment-calculator/", icon: "⚖️", category: "loans", keys: "loan versus investment prepayment arbitrage rate returns comparative models debt settlement margin" },
            { name: "Mortgage Balance Refinance", url: "/mortgage-balance/", icon: "🏠", category: "loans", keys: "mortgage balance property equity borrowing tracking closing valuation bank statements refinancing tenure" },
            { name: "Step Up Loan Amortization", url: "/step-up-loan-calculator/", icon: "🪜", category: "loans", keys: "step up loan variable emi principal scaling moratorium bank layout tracking options structural" },

            // --- TAXATION & PAYROLL ---
            { name: "Income Tax Planner", url: "/income-tax/", icon: "📑", category: "tax", keys: "income tax old regime new slab deductions standard deduction tax brackets standard rebates exemptions calculation budget" },
            { name: "Advance Tax Payments", url: "/advance-tax/", icon: "🗓️", category: "tax", keys: "advance tax estimated liabilities self employed salaried penalty calculation compliance deadlines returns filing quarterly" },
            { name: "TDS Calculator Matrix", url: "/tds-calculator/", icon: "✂️", category: "tax", keys: "tds tax deducted at source threshold salary interest rent professionals freelancers withholding tax compliance" },
            { name: "GST Calculator India", url: "/gst/", icon: "📦", category: "tax", keys: "gst gross item cgst sgst igst net product bills invoices manufacturing business taxation central slabs text input" },
            { name: "HRA Tax Exemption Finder", url: "/hra/", icon: "🔑", category: "tax", keys: "hra house rent allowance standard exemption salary structure proof metrics savings real house landlords text sheet" },
            { name: "Gratuity Compliance Sheet", url: "/gratuity/", icon: "💼", category: "tax", keys: "gratuity service company exit resignation terminal benefit compliance years calculation continuous structure act" },
            { name: "Capital Gains Tax Matrix", url: "/capital-gains-tax/", icon: "📉", category: "tax", keys: "capital gains tax stcg ltcg long short term shares property mutual funds indexation 112a holding calculations" },
            { name: "Tax Loss Harvesting Engine", url: "/tax-loss-harvesting/", icon: "🌾", category: "tax", keys: "tax loss harvesting capital offset balancing equity delivery set off short long losses share adjustments" },
            { name: "50-30-20 Budget Rule Plan", url: "/50-30-20-rule/", icon: "📊", category: "tax", keys: "50 30 20 rule budget planning personal savings needs wants salary allocation metrics ledger" },
            { name: "CTC to In Hand Salary", url: "/ctc-to-in-hand/", icon: "👔", category: "tax", keys: "ctc to in hand gross monthly take home deductions epf gratuity allowances tax structure dynamic payout" },
            { name: "Freelancer vs Salaried Tax", url: "/freelancer-vs-salaried/", icon: "💼", category: "tax", keys: "freelancer vs salaried 44ad business expenses presumptive taxation 192 standard structure profile options" },
            { name: "In Hand Salary Net Matrix", url: "/in-hand-salary/", icon: "💵", category: "tax", keys: "in hand salary net deduction tax brackets old regime new regime take home tracking allowances payslip" },
            { name: "Influencer Tax Ledger", url: "/influencer-tax-tracker/", icon: "📸", category: "tax", keys: "influencer taxation business expenses tds 194j digital creators streaming revenue tracking deduction brand" },
            { name: "LRS TCS Remittance Tool", url: "/lrs-tcs-calculator/", icon: "🛂", category: "tax", keys: "lrs tcs foreign remittances education limits international travel tax validation compliance outbound outward" },
            { name: "Salary Hike Estimator", url: "/salary-hike/", icon: "🚀", category: "tax", keys: "salary hike appraisal increment current layout benchmark future payout percentage corporate promotion" },
            { name: "Salary Breakup Component", url: "/salary-breakup/", icon: "👔", category: "tax", keys: "salary markup ctc structure allowances basic components in hand mapping parameters structure gross" },
            { name: "Take Home Salary Net Calc", url: "/take-home-salary/", icon: "💵", category: "tax", keys: "take home salary professional taxes gross deduction monthly net payload tracking options bracket payslip" },
            { name: "TCS Refund & Liability", url: "/tcs-calculator/", icon: "🛂", category: "tax", keys: "tcs tax collected at source luxury cars foreign remittances travel compliance collection rates adjustments credit" },

            // --- CORPORATE FINANCE & FP&A ---
            { name: "Break Even Sales Volume", url: "/break-even-calculator/", icon: "🎯", category: "business", keys: "break even margin fixed variable variable manufacturing quantity sales pricing product units units capacity target profit" },
            { name: "DCF Intrinsic Valuation", url: "/dcf/", icon: "💎", category: "business", keys: "dcf discounted cash flow intrinsic true fair value stocks valuation enterprise projections wacc growth terminal multiplier" },
            { name: "EBITDA Operational Margin", url: "/ebitda/", icon: "📊", category: "business", keys: "ebitda operating earnings interest tax depreciation amortization corporate financial health corporate margin margins" },
            { name: "Working Capital Health", url: "/working-capital/", icon: "💳", category: "business", keys: "working capital current ratio liquidity short term asset liability operation profiles runway tracking diagnostics" },
            { name: "Contribution Margin", url: "/contribution-margin/", icon: "📈", category: "business", keys: "contribution margin variable costs variable profiling profitability break even cogs units pricing volume analysis" },
            { name: "Corporate Cost of Debt", url: "/cost-of-debt/", icon: "💸", category: "business", keys: "cost of debt weighted post tax interest premium bonds yield corporate balance sheets tracking models valuation" },
            { name: "CAPM Cost of Equity Finder", url: "/cost-of-equity/", icon: "📊", category: "business", keys: "cost of equity capm beta risk free rate market premium hurdle discount valuation analytics models framework" },
            { name: "Current Ratio Liquidity", url: "/current-ratio/", icon: "📏", category: "business", keys: "current ratio corporate liquidity asset liabilities balance sheet health accounting criteria solvency sheet" },
            { name: "DSCR Debt Service Ratio", url: "/dscr/", icon: "💰", category: "business", keys: "dscr debt service coverage ratio corporate loans banking leverage solvency tracking limits capacity cash flow safety" },
            { name: "Enterprise Valuation (EV)", url: "/enterprise-value/", icon: "🏢", category: "business", keys: "enterprise value ev market cap debt cash adjustments multiples corporate valuation takeover pricing acquisition metrics" },
            { name: "Financial Leverage (DFL)", url: "/financial-leverage/", icon: "🧱", category: "business", keys: "dfl degree financial leverage debt equity structure risk tracking solvency parameters eps ebit volatility structural" },
            { name: "Interest Coverage Ratio", url: "/interest-coverage/", icon: "🧱", category: "business", keys: "icr interest coverage ratio solvency safety margins ebit borrowing bank health monitoring credit profile coverage" },
            { name: "Inventory Turnover Checker", url: "/inventory-turnover/", icon: "📦", category: "business", keys: "inventory turnover efficiency storage warehousing cost of goods sold sales velocity operations tracking metrics" },
            { name: "Gross & Net Margin", url: "/margin-calculator/", icon: "📏", category: "business", keys: "gross profit net margin pricing cost of goods sold cogs analytics wholesale distribution revenues markups spreadsheet" },
            { name: "Retail Markup Percentage", url: "/markup-calculator/", icon: "🏷️", category: "business", keys: "markup calculator margin retail pricing multiplier costs retail inventory cost profile calculations commerce" },
            { name: "Operating Leverage (DOL)", url: "/operating-leverage/", icon: "🏗️", category: "business", keys: "dol operating leverage fixed asset fixed costs break even operational asset business metrics volatility leverage" },
            { name: "Investment Payback Period", url: "/payback-period-calculator/", icon: "🕰️", category: "business", keys: "payback period calculation capital budgeting corporate project cash flows break even timelines yields metrics capital" },
            { name: "Profit Margin Workspace", url: "/profit-margin/", icon: "📈", category: "business", keys: "profit margin business markup corporate return cogs cost analysis model tracking parameters spreadsheet" },
            { name: "Quick Ratio Acid Test", url: "/quick-ratio/", icon: "⚡", category: "business", keys: "quick ratio liquidity current assets liquid assets cash accounting balance sheet working capital cash" },
            { name: "WACC Cost of Capital", url: "/wacc/", icon: "🏢", category: "business", keys: "wacc weighted average cost capital corporate finance debt equity balance weights metrics structure component" },

            // --- SUSTAINABILITY & RE-POWERING ---
            { name: "Solar Rooftop Subsidy", url: "/solar-rooftop-calculator/", icon: "☀️", category: "ev", keys: "solar rooftop subsidy light electricity bills cost savings government benchmark panel mnre structure power grid setup" },
            { name: "EV vs Petrol Cost Per KM", url: "/ev-vs-petrol-cost/", icon: "⚡", category: "ev", keys: "ev electronic vehicle petrol cost km tco running mileage battery lifespan engine comparison fuel pricing car buy" },
            { name: "Solar + EV Home ROI Link", url: "/solar-ev-ecosystem/", icon: "🏡", category: "ev", keys: "solar ev charger combination home grid off grid net zero fuel free green running costs payback period calculations" },
            { name: "EV vs ICE Powertrain Lifecycle", url: "/ev-vs-petrol/", icon: "🔋", category: "ev", keys: "ev hybrid ice petrol diesel gas vehicle comparison running maintenance tco depreciation long term" },
            { name: "Carbon Credit Project Valuation", url: "/carbon-credit-valuation/", icon: "🌿", category: "ev", keys: "carbon credit offset project valuation green offsets pricing tree planting standard compliance monetization metrics" },

            // --- TRADING & QUANT MATRIX ---
            { name: "Brokerage & P&L Tool", url: "/brokerage-calculator/", icon: "🖥️", category: "trading", keys: "brokerage pnl trading margin profit delivery intraday zerodha angel fno sebi charges stamp duty exchange turnover taxes" },
            { name: "Intraday Profit Analyzer", url: "/intraday-profit-calculator/", icon: "🔥", category: "trading", keys: "intraday profit shares equity volume leverage square off daily setup quick points scale risk stop target" },
            { name: "Futures Derivatives Profit", url: "/futures-profit/", icon: "📈", category: "trading", keys: "futures profit derivative margin leverage lot size mark to market fno contract pricing options derivatives segment" },
            { name: "Options Trading Premium", url: "/options-profit/", icon: "📊", category: "trading", keys: "options calls puts multi strategy options writing premium breakdown risk premium payoff grid derivatives" },
            { name: "Position Sizing Sizer Risk", url: "/position-size-calculator/", icon: "📏", category: "trading", keys: "position size stop loss trading shares sizing trade exposure risk boundaries parameters exposure sizing" },
            { name: "Risk Reward Position Sizer", url: "/risk-reward-calculator/", icon: "⚖️", category: "trading", keys: "risk reward trading target parameters stops points win rate probability models strategy risk setup" },
            { name: "Stop Loss Position Sizer", url: "/stop-loss/", icon: "🛑", category: "trading", keys: "stop loss buffer trading targets point calculation dynamic metrics management risk threshold parameter" },

            // --- PERSONAL WEALTH & MILESTONES ---
            { name: "Net Worth Asset Ledger", url: "/net-worth/", icon: "👑", category: "personal", keys: "net worth wealth personal equity sheet liability land bank liquid balance gold calculations tracking metric records" },
            { name: "Budget Tracker (50/30/20)", url: "/budget-planner/", icon: "📝", category: "personal", keys: "budget allocation planning salary tracker tracking costs bucket management tools cash envelope systems parameters" },
            { name: "Retirement Target Corpus", url: "/retirement/", icon: "👴", category: "milestones", keys: "retirement planning age life longevity inflation corpus pensions annuity monthly costs expenses milestones" },
            { name: "Marriage Budget Planner", url: "/marriage-planner/", icon: "💍", category: "milestones", keys: "marriage wedding hall catering jewelry cost projections layout gold booking designer events milestones planner" },
            { name: "Child Education Planner", url: "/child-education-planner/", icon: "🎓", category: "milestones", keys: "child education costs future higher studies collages international admission inflation savings growth milestones" },
            { name: "Rent vs Buy Cost Evaluator", url: "/rent-vs-buy-calculator/", icon: "🏢", category: "milestones", keys: "rent vs buy property house home ownership downpayment tax home appreciation vs compound savings calculation milestones" },
            { name: "Car Purchase Affordability", url: "/car-purchase/", icon: "🚘", category: "milestones", keys: "car purchase asset budget affordability auto loan downpayment parameters processing evaluation" },
            { name: "Crorepati Milestone Plan", url: "/crorepati-calculator/", icon: "👑", category: "milestones", keys: "crorepati timeline target savings monthly goal tracking compounding wealth milestone timelines speed models" },
            { name: "Retail Discount Absolute Check", url: "/discount-calculator/", icon: "🏷️", category: "milestones", keys: "discount coupon pricing retail flat rate absolute percentage markup tools e-commerce price tag" },
            { name: "Early Retirement FIRE Corpus", url: "/early-retirement/", icon: "🔥", category: "milestones", keys: "early retirement freedom calculations metrics safe withdrawal limits runaways passive accumulation strategy" },
            { name: "Education Cost Inflation", url: "/education-cost/", icon: "🎒", category: "milestones", keys: "education cost timeline higher study university fee inflation increments projection funding requirements" },
            { name: "Education Portfolio Roadmap", url: "/education-planning/", icon: "🎓", category: "milestones", keys: "education planning horizontal tracking milestones compound savings horizons assets matching targets" },
            { name: "Emergency Fund Buffer Builder", url: "/emergency-fund/", icon: "🛡️", category: "milestones", keys: "emergency fund rainy day reserve liquidity liquid storage banking monthly fixed expenses safety margins contingency" },
            { name: "Health Insurance Evaluator", url: "/health-insurance-evaluator/", icon: "🏥", category: "milestones", keys: "health insurance claim premium top up super copay tracking metrics safety parameters cover policies" },
            { name: "Goal Portfolio Allocation Setup", url: "/goal-portfolio/", icon: "🎯", category: "milestones", keys: "goal portfolio framework parameters rebalancing equity allocations metrics profile optimization layout" },
            { name: "Goal Priority Weighted Matrix", url: "/goal-priority/", icon: "⚖️", category: "milestones", keys: "goal priority timeline weights importance mapping financial strategy options framework prioritization utility" },
            { name: "Goal SIP Calculator Target", url: "/goal-sip-calculator/", icon: "📈", category: "milestones", keys: "goal systematic investment path required corpus target yield monthly allocation tools strategy path" },
            { name: "Goal Step Up Incremental Tool", url: "/goal-step-up/", icon: "🚀", category: "milestones", keys: "goal step up dynamic target increments compounding adjustments milestones tracking progressive scaling" },
            { name: "Home Loan Balance Refinance", url: "/home-loan-balance-transfer/", icon: "🔄", category: "milestones", keys: "hlbt balance transfer switch bank refinancing mclr repo rate lower processing fee optimization refinance" },
            { name: "Loan Affordability Index", url: "/loan-affordability/", icon: "📈", category: "milestones", keys: "loan affordability eligibility gross income multiplier maximum emi limits capacity banking profile assessment" },
            { name: "Multiple Goals Portfolio Compiler", url: "/multiple-goals/", icon: "📂", category: "milestones", keys: "multiple goals horizon alignment compound matching multi dynamic tracking pipelines bucket compounding" },
            { name: "Property Appreciation Tracker", url: "/property-appreciation/", icon: "📈", category: "milestones", keys: "property appreciation real estate growth compounding housing land valuation future price projections modeling equity" },
            { name: "Property ROI Rental Yield Analysis", url: "/property-roi/", icon: "🏠", category: "milestones", keys: "property roi real estate returns cap rates cash purchase metrics leverage appreciation models real estate" },
            { name: "Real Estate Rental Yield", url: "/rental-yield/", icon: "🏠", category: "milestones", keys: "rental yield gross net property investment cap rates monthly rent maintenance real estate analytics calculations valuation" },
            { name: "Remote vs Office Commute Cost", url: "/remote-vs-office-calculator/", icon: "🚗", category: "milestones", keys: "remote versus office cost travel time fuel savings food expenses remote utility metrics tracking travel" },
            { name: "Retirement Withdrawal SWP", url: "/retirement-withdrawal/", icon: "👴", category: "milestones", keys: "retirement withdrawal cash runway safety multipliers safe extraction inflation adjustment models cash stream" },
            { name: "Savings Rate Net Percentage", url: "/savings-rate/", icon: "📊", category: "milestones", keys: "savings rate gross income net residue personal tracking allocation parameters profile thrift scale" },
            { name: "Side Income Stream Sizer", url: "/side-income/", icon: "🏖️", category: "milestones", keys: "side income side hustle passive flow extra cash generation analytics tracking metrics side earnings" },
            { name: "Vacation Travel Sinking Fund", url: "/travel-sinking-fund/", icon: "✈️", category: "milestones", keys: "travel ticket booking cruise itinerary budget sizing envelope savings tracker vacation logistics fund" },
            { name: "Vacation Budget Sinking Fund", url: "/vacation-goal/", icon: "✈️", category: "milestones", keys: "vacation horizon ticket savings goals travel sinking fund bucket metrics leisure holiday budgeting" },
            { name: "Wedding Inflation Framework", url: "/wedding-inflation-planner/", icon: "💍", category: "milestones", keys: "wedding marriage event budget catering venue layout gold price projections horizon marital expenses" },

            // --- PLATFORM META UTILITIES ---
            { name: "Platform Privacy Policy", url: "/privacy-policy/", icon: "📜", category: "meta", keys: "privacy policy data collection standard procedures metrics cookies trackers security alignment compliance" },
            { name: "Platform Legal Disclaimer", url: "/disclaimer/", icon: "⚖️", category: "meta", keys: "disclaimer rules validation compliance chartered accountant standard information terms conditions" }
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
                            <h3 class="text-xs font-bold text-white mb-0.5 flex items-center justify-between w-full">Income Tax Regime Planner <span>📑</span></h3>
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
