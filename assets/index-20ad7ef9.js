(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const d="/js-helper-code/assets/typescript-f6ead1af.svg",p="/js-helper-code/vite.svg";function f(r){let o=0;const s=n=>{o=n,r.innerHTML=`count is ${o}`};r.addEventListener("click",()=>s(o+1)),s(0)}var a=(r=>(r.OptedIn="OptedIn",r.OptedOut="OptedOut",r.ConsentNotGivenYet="ConsentNotGivenYet",r))(a||{});const y={preferences:{consent:!1,email:"rajesh@ar.com",daily_alert_status:a.ConsentNotGivenYet,special_alert_status:a.OptedIn,daily:{dual:{filter:"utm=facebook",query:"newsletter",type:"standard",status:!1},high_priority:{filter:"utm=facebook",query:"newsletter",type:"standard",status:!0},low_priority:{filter:"utm=facebook",query:"",type:"standard",status:!1}},special:{dual:{filter:"utm=facebook",query:"newsletter",type:"standard",status:!0},high_priority:{filter:"utm=facebook",query:"newsletter",type:"standard",status:!1},low_priority:{filter:"utm=facebook",query:"newsletter",type:"standard",status:!1}}}},g=()=>{const r=y.preferences;let o=[];const s=[],n=Object.entries(r).filter(e=>e[0]==="daily"||e[0]==="special");let t=0;n.forEach(e=>{const i=e[0];for(const c in e[1]){const l=`${e[0]}_${c}`,u={category:i,subscription:c,unique:l,index:t,...r[e[0]][c]};s.push(u),t++}}),o=s,console.log("Subscription Array: ",o)};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${p}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${d}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;f(document.querySelector("#counter"));g();
