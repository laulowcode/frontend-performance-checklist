(function(){
  console.log('[demo.js] Executed. This script was preloaded earlier.');
  const el = document.createElement('div');
  el.textContent = 'demo.js executed!';
  el.style.marginTop = '8px';
  document.querySelector('.container').appendChild(el);
})();

