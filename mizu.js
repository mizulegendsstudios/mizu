// mizu.js
(function () {
  // ┌──────────────────────────────┐
  // │        Inyección de CSS      │
  // └──────────────────────────────┘
  const ESTILOS_MIZU = `
    .escribir {
      font-family: 'Courier New', monospace;
      display: inline-block;
      white-space: pre;
    }
    .escribir .sui-letra {
      display: inline-block;
      opacity: 0;
    }
    .escribir .sui-cursor {
      display: inline-block;
      animation: sui-parpadear 1s infinite;
      margin-left: 2px;
    }
    @keyframes sui-parpadear {
      50% { opacity: 0; }
    }
  `;

  function inyectarCSS() {
    if (document.getElementById('mizu-estilos')) return; // Evitar duplicados

    const style = document.createElement('style');
    style.id = 'mizu-estilos';
    style.textContent = ESTILOS_MIZU;
    document.head.appendChild(style);
  }

  // ┌──────────────────────────────┐
  // │        Clase Mizu            │
  // └──────────────────────────────┘
  class Mizu {
    constructor(opciones = {}) {
      inyectarCSS(); // ¡Inyecta CSS al instanciar!
      this.selector = opciones.selector || '.escribir';
      this.autoIniciar = opciones.autoIniciar !== false;

      if (this.autoIniciar) {
        this.iniciarTodo();
      }
    }

    iniciarTodo() {
      document.querySelectorAll(this.selector).forEach(el => {
        if (!el.classList.contains('sui-done')) {
          this.iniciarElemento(el);
        }
      });
    }

    iniciarElemento(el) {
      const texto = el.dataset.texto || '';
      const velocidad = parseInt(el.dataset.velocidad) || 120;
      const mostrarCursor = el.dataset.cursor === "1";
      const fadePorLetra = parseFloat(el.dataset.fade) || 0;

      el.innerHTML = '';
      el.classList.remove('sui-done');

      this.escribirTexto(el, texto, velocidad, fadePorLetra, mostrarCursor);
    }

    async escribirTexto(elemento, texto, velocidad, fadePorLetra, mostrarCursor) {
      const letras = [];
      for (let char of texto) {
        const span = document.createElement('span');
        span.className = 'sui-letra';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        if (fadePorLetra > 0) {
          span.style.transition = `opacity ${fadePorLetra}s ease`;
        }
        elemento.appendChild(span);
        letras.push(span);
      }

      let cursorSpan = null;
      if (mostrarCursor) {
        cursorSpan = document.createElement('span');
        cursorSpan.className = 'sui-cursor';
        cursorSpan.textContent = '|';
      }

      for (let i = 0; i < letras.length; i++) {
        letras[i].style.opacity = '1';

        if (mostrarCursor) {
          if (cursorSpan.parentNode) cursorSpan.parentNode.removeChild(cursorSpan);
          letras[i].parentNode.insertBefore(cursorSpan, letras[i].nextSibling);
        }

        await this.esperar(velocidad);
      }

      if (cursorSpan?.parentNode) cursorSpan.parentNode.removeChild(cursorSpan);
      elemento.classList.add('sui-done');
    }

    esperar(ms) {
      return new Promise(resolver => setTimeout(resolver, ms));
    }

    static iniciar(selector = '.escribir') {
      return new Mizu({ selector, autoIniciar: true });
    }
  }

  // ┌──────────────────────────────┐
  // │        Auto-inicio           │
  // └──────────────────────────────┘
  if (typeof window !== 'undefined') {
    window.Mizu = Mizu;

    document.addEventListener('DOMContentLoaded', () => {
      const script = document.querySelector('script[src$="mizu.js"]');
      if (script && script.dataset.auto !== undefined) {
        Mizu.iniciar();
      }
    });
  }
})();
