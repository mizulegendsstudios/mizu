

Claro, aquí tienes una propuesta de `README.md` para el proyecto **Mizu**, manteniendo el estilo profesional y detallado de los ejemplos anteriores, pero adaptado a la naturaleza de este micro-framework.

---

# 💧 Mizu

> **Mizu** es un framework de JavaScript ES6 vanilla, minimalista y progresivo, diseñado desde cero para construir interfaces web con un enfoque radical en la privacidad, simplicidad y velocidad.

![Versión](https://img.shields.io/badge/versión-v1.0.0-green)
![Licencia](https://img.shields.io/badge/licencia-MIT-blue)
![Tecnología](https://img.shields.io/badge/tecnología-ES6_Vanilla_JS-purple)
![Estado](https://img.shields.io/badge/status/activo-brightgreen)
![Tamaño](https://img.shields.io/badge/tamaño-%7E2kb-orange)

---

## 🌟 Visión del Proyecto

Mizu nace como un **micro-framework autocontenido**: todo lo que necesitas está en un solo archivo. Su filosofía se centra en cinco pilares fundamentales:

- 🔒 **Privacidad** (sin rastreo, sin dependencias externas)  
- 🧼 **Simplicidad** (API en español, sin configuración)  
- ⚡ **Velocidad** (carga instantánea, zero-runtime overhead)  
- 🕷️ **SEO amigable** (contenido accesible para motores de búsqueda)  
- ✨ **UX fluida** (interacciones naturales y expresivas)

Su primera función es **`escribir`** — un efecto de máquina de escribir avanzado con fade por letra, cursor opcional y control total de velocidad. Y está diseñado para **crecer**: nuevas funciones se integrarán bajo la misma filosofía.

---

## 🚀 Uso rápido (CDN)

Solo copia y pega este código en tu HTML. ¡Sin configuración, sin build, sin complicaciones!

```html
<div class="escribir"
     data-texto="Agua clara, código limpio."
     data-velocidad="100"
     data-cursor="1"
     data-fade="0.25">
</div>

<script src="https://cdn.jsdelivr.net/gh/mizulegendsstudios/mizu@v1.0.0/mizu.js" data-auto></script>
```

> ✅ **Sin CSS externo** — los estilos se inyectan automáticamente.  
> ✅ **Sin build, sin node_modules, sin frameworks**.  
> ✅ **Listo para producción**.

---

## 📦 Atributos de `escribir`

Personaliza el efecto de escritura directamente en tu HTML usando atributos `data-*`.

| Atributo          | Valor por defecto | Descripción |
|-------------------|-------------------|-------------|
| `data-texto`      | `""`              | Texto que se escribirá letra por letra. |
| `data-velocidad`  | `120` (ms)        | Tiempo en milisegundos entre cada letra. |
| `data-cursor`     | `0`               | `1` para mostrar el cursor parpadeante `|`. |
| `data-fade`       | `0` (s)           | Duración en segundos del fade de cada letra (0 = instantáneo). |

> **Nota sobre compatibilidad:** Todos los nombres usan **español sin acentos ni ñ** (ej: `niño` → `ninho`), para evitar conflictos y garantizar compatibilidad ASCII.

---

## 🧩 API JavaScript (para SPAs o control avanzado)

Para aplicaciones de una sola página (SPA) o cuando necesitas un control más preciso sobre cuándo se inicializan los efectos.

```js
// Iniciar todos los elementos con clase .escribir en el DOM
Mizu.iniciar();

// Iniciar con un selector personalizado
Mizu.iniciar('.mi-clase-personalizada');

// Ejemplo de uso en un SPA tras una navegación
function cargarPagina() {
  // ... tu lógica para cargar el nuevo contenido
  document.getElementById('app').innerHTML = nuevoHTML;
  
  // Inicializa los efectos de Mizu en el nuevo contenido
  Mizu.iniciar();
}
```

---

## 🌱 Filosofía de Mizu

El diseño de Mizu se rige por principios claros que guían cada línea de código:

- **Una función a la vez**: cada característica es autónoma, útil y extremadamente bien pensada.
- **Nombres en español**: accesible para hispanohablantes, sin anglicismos innecesarios.
- **Prefijo `sui-`**: todas las clases internas usan `sui-*` (ej: `sui-letra`, `sui-done`) para evitar colisiones con tu CSS.
- **Autocontenido**: un solo archivo `.js` incluye toda la lógica y los estilos necesarios.
- **Progresivo**: funciona perfectamente en navegadores antiguos y modernos.

---

## 📥 Instalación

### Opción 1: CDN (Recomendado)
La forma más rápida de empezar. Solo añade esta etiqueta `script` antes de tu `</body>`.

```html
<script src="https://cdn.jsdelivr.net/gh/mizulegendsstudios/mizu@v1.0.0/mizu.js"></script>
```

### Opción 2: Descarga local
Para usarlo sin conexión a internet o integrarlo en tu flujo de trabajo.

1.  Descarga el archivo [`mizu.js`](https://cdn.jsdelivr.net/gh/mizulegendsstudios/mizu@v1.0.0/mizu.js).
2.  Guárdalo en el directorio de tu proyecto (ej: `/js/mizu.js`).
3.  Inclúyelo en tu HTML:
    ```html
    <script src="/js/mizu.js"></script>
    ```

---

## 🌊 ¿Por qué "Mizu"?

*Mizu* (水) significa **"agua"** en japonés:  
simple, esencial, adaptable y poderosa.  
Así es este framework: **fluye donde se necesita, sin ruido, sin residuos**.

---

> ✨ **Mizu no es solo un typewriter. Es el inicio de algo más grande.**

---

Mizu - Framework JavaScript Minimalista  
© 2025 Mizu Legends Studios — Construido con disciplina, técnica y simplicidad elegante. 

¡Dale una ⭐ en GitHub si apoyas el software vanilla, limpio y accesible!
