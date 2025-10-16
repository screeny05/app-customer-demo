import srcModule from "../src/module";
import laioutrrc from "../laioutrrc.json";

// Do not install ui-app to avoid conflicts with unocss.
const rcWithoutApps = {
  ...laioutrrc,

  laioutr: {
    // Disable project secret validation for local development
    projectSecretKey: false,
  },
  apps: [],
};

export default defineNuxtConfig({
  modules: [
    srcModule,
    "@pinia/nuxt", // Added to show in devtools
    "@laioutr-core/frontend-core",
    "@laioutr-core/orchestr",
    "@laioutr-core/orchestr-devtools",
  ],
  laioutr: {
    laioutrrc: rcWithoutApps as any,
  },
  ["@laioutr-demo/customer-demo"]: {
    hygraphUrl:
      "https://eu-west-2.cdn.hygraph.com/content/cma6x3wmc009k07w8cbysyaqa/master",
    hygraphToken:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NTc2MzQ0ODYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21hNngzd21jMDA5azA3dzhjYnlzeWFxYS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYTQ4MGFlYTktZDg5Mi00MzliLWFkNWEtYzk5N2M4ZmI0MTM4IiwianRpIjoiY21mZzI2eDhiMDQ1bDA3bWo0ZzRkaDRwbCJ9.L9IQ3G-8Oh0w1rrBwB5--SyXHqIP0DvDpFad_mc69cizCGjhaPPMCYL2M55Gz_ZuTbzsdNDOomd8v-7jqaqykRBseMF19IMAghLGoDauM6Bs2ZcV-oGsgMpssDD2qhrlgxwkd8EpAySWmlXK3btnIUp_3--rrJgGaRrEyCUrApEnaN7Om9flHiNNBmrVuISdI6NtDKFF_mTHyeZwlIPAYCQ3eIITUtxiLkYqYBFuH8DfdcCHyLgamCrCTlyftD8htZpDwEuRaO6hklQutgjesZa--LDvRQ14CuDXsrem-78whdw66ctqYc1aFIvT68ukv9a7QPJ6gV1aHsQOnBQVes0Ysya1x64EUVIeE245wEJhVh0htJSEaIQ_1GtF-gGrpsJWhrVJQKV3ecw4AFw4cs_VuZBCf1UwSbKghPhOt5RbnUpQ0Of2J1MoPZSdKzeCKcaPhX5S75rE41HpykAoe8yvl6mEAmGKyDxF07tmVRSex1ssMVF0b6WY2XpYZ9knb8Ir28khF4dFwHRuEVxFupuHF5nDBTJX6PTm9zbsWOhDuhJaLMhzD8NIaKMUhcMt05l70iVT7Y6PE6tBcpJeiVVZ6lkLrjDoyqkzvd3e96F_MM4mqgYmOaj7_FS83fbPTzkkk-nune9gfGBUAjc3AH3-vGdGfWAbRpyWpeF6QxM",
  },
  devtools: { enabled: true },
  compatibilityDate: "2025-09-11",
  vite: {
    optimizeDeps: {
      include: ["ajv", "json-source-map", "natural-compare-lite"],
    },
  },
});
