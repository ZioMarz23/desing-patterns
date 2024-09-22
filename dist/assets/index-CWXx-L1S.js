var d=Object.defineProperty;var m=(a,e,o)=>e in a?d(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var n=(a,e,o)=>m(a,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();class f{constructor(){n(this,"nombre","Golpe Fuerte")}efecto(){return"Inflige un gran daño físico al enemigo."}}class p{constructor(){n(this,"nombre","Hechizo de Fuego")}efecto(){return"Lanza una bola de fuego que causa daño mágico."}}class b{constructor(){n(this,"nombre","Curación")}efecto(){return"Restaura la salud de un aliado."}}class h{constructor(e){n(this,"nombre");n(this,"clase","Guerrera");this.nombre=e}usarHabilidad(){const e=new f;return`${this.nombre} usa ${e.nombre}: ${e.efecto()}`}}class g{constructor(e){n(this,"nombre");n(this,"clase","Maga");this.nombre=e}usarHabilidad(){const e=new p;return`${this.nombre} usa ${e.nombre}: ${e.efecto()}`}}class w{constructor(e){n(this,"nombre");n(this,"clase","Sanadora");this.nombre=e}usarHabilidad(){const e=new b;return`${this.nombre} usa ${e.nombre}: ${e.efecto()}`}}class y{static crearPersonaje(e,o){switch(e){case"guerrera":return new h(o);case"maga":return new g(o);case"sanadora":return new w(o);default:return null}}}const c=[];function u(a,e){return y.crearPersonaje(a,e)}const s=u("guerrera","Erza"),P=u("maga","Mimosa"),$=u("sanadora","Yuna");c.push(s);c.push(P);c.push($);c.map(a=>console.log(a.usarHabilidad()));document.getElementById("personaje").innerText=`Personaje asignado: ${s.nombre}, Clase: ${s.clase}`;function j(a){const e=document.getElementById("sala");switch(e.innerHTML="",a){case"practica":e.innerHTML=`
                <h2>Sala de Práctica</h2>
                <p>Aquí puedes mejorar tus estadísticas.</p>
                <button onclick="window.mejorarEstadisticas()">Mejorar</button>
            `;break;case"npc":e.innerHTML=`
                <h2>Sala de NPC</h2>
                <p>Ataca al NPC y defiéndete.</p>
                <button onclick="window.atacarNPC()">Atacar</button>
            `;break;case"hospital":e.innerHTML=`
                <h2>Hospital</h2>
                <p>Recupera tus puntos de golpe aquí.</p>
                <button onclick="window.recuperarSalud()">Recuperar Salud</button>
            `;break}}window.entrarSala=j;window.mejorarEstadisticas=function(){alert(`${s.nombre} ha mejorado sus estadísticas.`)};window.atacarNPC=function(){alert(`${s.nombre} ataca al NPC con ${s.usarHabilidad()}.`)};window.recuperarSalud=function(){alert(`${s.nombre} ha recuperado su salud.`)};
