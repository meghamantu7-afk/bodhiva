(function(){var B=window.B={get:function(k,d){try{return localStorage.getItem('bv.'+k)||d}catch(e){return d}},set:function(k,v){try{localStorage.setItem('bv.'+k,v)}catch(e){}}};
var a=B.get('accent','');if(a)document.documentElement.style.setProperty('--acc',a);
document.addEventListener('click',function(e){var t=e.target.closest('[data-go]');if(t)try{parent.postMessage({bv:t.dataset.go},'*')}catch(x){}});
B.col=function(el,vals,labels,max,hi){el.innerHTML='';vals.forEach(function(v,i){var c=document.createElement('div');c.className='col';c.innerHTML='<span class="num">'+v+'</span><div class="b" style="--p:'+(v/max)+(hi===i?';--c:var(--c)':'')+'"></div><span>'+labels[i]+'</span>';el.appendChild(c)})}})();
