(()=>{'use strict';
const motionAllowed=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const progress=document.querySelector('.scroll-progress');
let pending=false;
function updateProgress(){
  const maximum=document.documentElement.scrollHeight-window.innerHeight;
  if(progress)progress.style.transform='scaleX('+(maximum>0?Math.max(0,Math.min(1,window.scrollY/maximum)):0)+')';
  pending=false;
}
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateProgress)}},{passive:true});
window.addEventListener('resize',updateProgress,{passive:true});updateProgress();
const revealed=document.querySelectorAll('.reveal');
if(!motionAllowed||!('IntersectionObserver' in window)){revealed.forEach(el=>el.classList.add('is-visible'))}
else{
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
  revealed.forEach(el=>observer.observe(el));
}
const poster=document.querySelector('[data-video-launch]');
if(poster){
  poster.addEventListener('click',()=>{
    const frame=document.createElement('iframe');
    frame.src='https://www.youtube-nocookie.com/embed/qx9zmU8CkhI?autoplay=1&rel=0';
    frame.title='Maaz Bin Mustaqeem: video introduction and project work';
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.setAttribute('allowfullscreen','');
    frame.referrerPolicy='strict-origin-when-cross-origin';
    poster.replaceWith(frame);
  },{once:true});
}
})();