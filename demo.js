const fmt=n=>"Rs "+n.toLocaleString("en-US");
function mountCart(label){
  const bar=document.createElement("div");bar.className="cartbar";bar.hidden=true;
  bar.innerHTML='<span id="cc"></span><span><button class="btn" id="cgo" type="button"></button> <button class="link" id="cclr" type="button">Clear</button></span>';
  document.body.appendChild(bar);
  const cc=bar.querySelector("#cc"),go=bar.querySelector("#cgo");go.textContent=label;
  let cart={};
  const upd=()=>{let n=0,t=0;Object.values(cart).forEach(i=>{n+=i.q;t+=i.q*i.p});bar.hidden=!n;cc.textContent=n+" item(s) · "+fmt(t)};
  bar.querySelector("#cclr").onclick=()=>{cart={};upd()};
  go.onclick=()=>{cart={};cc.textContent="Demo only – nothing was sent or charged.";setTimeout(upd,2500)};
  return{add(key,p){cart[key]=cart[key]||{q:0,p};cart[key].q++;upd()}};
}
function tabs(el,cb){el.querySelectorAll("button").forEach(b=>b.onclick=()=>{el.querySelectorAll("button").forEach(x=>x.classList.toggle("on",x===b));cb(b.dataset.c)})}
function demoForm(id){const f=document.getElementById(id);f.onsubmit=e=>{e.preventDefault();const o=f.querySelector(".ok");o.style.display="block";o.textContent="Demo only: this form works, but nothing was sent or booked. On a real client site this would reach the business.";f.reset()}}
