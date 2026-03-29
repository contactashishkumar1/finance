// calculator-index.js
// Automatically builds a search index from /sitemap.xml so all calculator pages
// listed in your sitemap are included without manual maintenance.

const CALCULATOR_SITEMAP_URL = "/sitemap.xml";
const CALCULATOR_INDEX_EXCLUDE = new Set([
  "https://arthcalculator.in/",
  "https://arthcalculator.in/calculators/",
  "https://arthcalculator.in/about/",
]);

function prettifyCalculatorNameFromUrl(url) {
  try {
    const u = new URL(url, window.location.origin);
    const slug = u.pathname.replace(/^\/+|\/+$/g, "");
    if (!slug) return "Home";

    const special = {
      "cagr": "CAGR Calculator",
      "xirr": "XIRR Calculator",
      "irr-calculator": "IRR Calculator",
      "dcf": "DCF Calculator",
      "ebitda": "EBITDA Calculator",
      "epf": "EPF Calculator",
      "fd": "FD Calculator",
      "fire-calculator": "FIRE Calculator",
      "hra": "HRA Calculator",
      "nps": "NPS Calculator",
      "npv-calculator": "NPV Calculator",
      "ppf": "PPF Calculator",
      "rd": "RD Calculator",
      "roi-calculator": "ROI Calculator",
      "ssy": "SSY Calculator",
      "sip": "SIP Calculator",
      "emi": "EMI Calculator",
      "wacc": "WACC Calculator",
      "gst": "GST Calculator",
      "beta": "Beta Calculator",
      "alpha": "Alpha Calculator",
    };

    if (special[slug]) return special[slug];

    const words = slug
      .split("/")
      .pop()
      .split("-")
      .filter(Boolean)
      .map(w => (w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)));

    let title = words.join(" ");
    if (!/calculator/i.test(title) && !/planner/i.test(title) && !/ratio/i.test(title)) {
      title += " Calculator";
    }
    return title;
  } catch {
    return url;
  }
}

function buildKeywordsFromUrl(url) {
  const path = new URL(url, window.location.origin).pathname.replace(/^\/+|\/+$/g, "");
  const parts = path.split("-").filter(Boolean);
  const words = parts.map(p => p.toLowerCase()).join(" ");
  const aliases = {
    "cagr": "compound annual growth rate return growth",
    "xirr": "extended internal rate of return annualized return",
    "irr": "internal rate of return",
    "dcf": "discounted cash flow valuation",
    "ebitda": "earnings before interest taxes depreciation amortization",
    "epf": "employee provident fund",
    "fd": "fixed deposit",
    "fire": "financial independence retire early",
    "nps": "national pension system",
    "npv": "net present value",
    "ppf": "public provident fund",
    "rd": "recurring deposit",
    "roi": "return on investment",
    "ssy": "sukanya samriddhi yojana",
    "sip": "systematic investment plan mutual fund",
    "emi": "equated monthly installment loan",
    "wacc": "weighted average cost of capital",
    "gst": "goods and services tax",
    "beta": "beta market volatility",
    "alpha": "alpha excess return",
    "ratio": "finance investment risk return",
    "planner": "planning savings goal",
    "calculator": "calculator tool",
  };

  const extra = parts.flatMap(p => aliases[p.toLowerCase()] ? [aliases[p.toLowerCase()]] : []);
  return [words, ...extra].join(" ");
}

async function loadCalculatorIndexFromSitemap() {
  const response = await fetch(CALCULATOR_SITEMAP_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load sitemap: ${response.status}`);
  }

  const xmlText = await response.text();
  const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");

  const parserError = xmlDoc.querySelector("parsererror");
  if (parserError) {
    throw new Error("Invalid sitemap XML");
  }

  const locNodes = Array.from(xmlDoc.querySelectorAll("url > loc"));
  const urls = locNodes
    .map(node => node.textContent.trim())
    .filter(url => url.startsWith("https://arthcalculator.in/"))
    .filter(url => !CALCULATOR_INDEX_EXCLUDE.has(url));

  return urls.map(url => ({
    name: prettifyCalculatorNameFromUrl(url),
    url: new URL(url).pathname,
    keywords: buildKeywordsFromUrl(url),
  }));
}

// Global list used by navbar search.
let calculatorIndex = [];

// Loads automatically on page load.
window.loadCalculatorIndex = async function () {
  try {
    calculatorIndex = await loadCalculatorIndexFromSitemap();
    window.calculatorIndex = calculatorIndex;
    return calculatorIndex;
  } catch (error) {
    console.error("Calculator index load failed:", error);
    calculatorIndex = [];
    window.calculatorIndex = calculatorIndex;
    return calculatorIndex;
  }
};
