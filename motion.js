(()=>{'use strict';
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const progress=document.querySelector('.progress');
let scheduled=false;
const onScroll=()=>{const total=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.transform='scaleX('+(total>0?Math.max(0,Math.min(1,scrollY/total)):0)+')';scheduled=false;};
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(onScroll)}},{passive:true});
addEventListener('resize',onScroll,{passive:true});onScroll();
const items=[...document.querySelectorAll('.reveal')];
if(reduce||!('IntersectionObserver' in window)){items.forEach(el=>el.classList.add('in-view'))}
else{const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}},{threshold:.09,rootMargin:'0px 0px -32px 0px'});items.forEach(el=>observer.observe(el));}
const play=document.querySelector('[data-play]');
if(play){play.addEventListener('click',()=>{
 const iframe=document.createElement('iframe');
 iframe.src='https://www.youtube-nocookie.com/embed/qx9zmU8CkhI?autoplay=1&rel=0';
 iframe.title='Maaz Bin Mustaqeem video introduction';
 iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
 iframe.referrerPolicy='strict-origin-when-cross-origin';
 iframe.setAttribute('allowfullscreen','');
 play.replaceWith(iframe);
},{once:true});}

const mobileMenu=document.querySelector('.mobile-navigation');
if(mobileMenu){
  mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileMenu.open=false;}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')mobileMenu.open=false;});
  document.addEventListener('click',event=>{if(!mobileMenu.contains(event.target))mobileMenu.open=false;});
}
})();