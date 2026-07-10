/* Thotteu — shared legal footer (injected, no build system required) */
(function(){
  var T = {
    en:{terms:'Terms of Use',legal:'Legal Notice',privacy:'Privacy Policy',copy:'© 2026 Thotteu · Universe under construction'},
    es:{terms:'Términos de uso',legal:'Aviso legal',privacy:'Política de privacidad',copy:'© 2026 Thotteu · Universo en construcción'},
    fr:{terms:'Conditions d\'utilisation',legal:'Mentions légales',privacy:'Politique de confidentialité',copy:'© 2026 Thotteu · Univers en construction'},
    pt:{terms:'Termos de uso',legal:'Aviso legal',privacy:'Política de privacidade',copy:'© 2026 Thotteu · Universo em construção'},
    ca:{terms:'Termes d\'ús',legal:'Avís legal',privacy:'Política de privacitat',copy:'© 2026 Thotteu · Univers en construcció'}
  };

  var CSS = '#thotteu-footer{width:100%;box-sizing:border-box;padding:14px 12px 18px;margin-top:24px;' +
    'border-top:1px solid rgba(255,255,255,.12);font-family:inherit;display:flex;flex-direction:column;' +
    'align-items:center;gap:8px;text-align:center}' +
    '#thotteu-footer .tf-copy{font-size:.34rem;color:#789;letter-spacing:.5px;font-family:"Press Start 2P",monospace}' +
    '#thotteu-footer .tf-links{display:flex;gap:16px;flex-wrap:wrap;justify-content:center}' +
    '#thotteu-footer .tf-links a{font-size:.34rem;color:#8ac;text-decoration:none;font-family:"Press Start 2P",monospace;' +
    'letter-spacing:.5px;opacity:.85}' +
    '#thotteu-footer .tf-links a:hover{opacity:1;text-decoration:underline}';

  function injectCSS(){
    if(document.getElementById('thotteu-footer-css')) return;
    var s=document.createElement('style');
    s.id='thotteu-footer-css';
    s.textContent=CSS;
    document.head.appendChild(s);
  }

  function render(lang){
    var mount=document.getElementById('thotteu-footer');
    if(!mount) return;
    var t=T[lang]||T.en;
    injectCSS();
    var hideCopy = mount.getAttribute('data-hide-copy')==='1';
    mount.innerHTML =
      '<nav class="tf-links">' +
        '<a href="/terms.html">'+t.terms+'</a>' +
        '<a href="/legal.html">'+t.legal+'</a>' +
        '<a href="/privacy.html">'+t.privacy+'</a>' +
      '</nav>' +
      (hideCopy ? '' : '<p class="tf-copy">'+t.copy+'</p>');
  }

  window.ThotteuFooter = { render: render };

  document.addEventListener('DOMContentLoaded', function(){
    var current = (window.currentLang || document.documentElement.lang || 'en').toLowerCase();
    render(current);
  });
})();
