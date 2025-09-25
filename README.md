# 💧 Mizu

**Mizu** es un framework de JavaScript ES6 vanilla, minimalista y progresivo, diseñado desde cero para construir interfaces web con un enfoque radical en:

- 🔒 **Privacidad** (sin rastreo, sin dependencias externas)  
- 🧼 **Simplicidad** (API en español, sin configuración)  
- ⚡ **Velocidad** (carga instantánea, zero-runtime overhead)  
- 🕷️ **SEO amigable** (contenido accesible para motores de búsqueda)  
- ✨ **UX fluida** (interacciones naturales y expresivas)

Mizu nace como un **micro-framework autocontenid**o: todo lo que necesitas está en un solo archivo.  
Su primera función es **`escribir`** — un efecto de máquina de escribir avanzado con fade por letra, cursor opcional y control total de velocidad.

Y está diseñado para **crecer**: nuevas funciones se integrarán bajo la misma filosofía.

---

## 🚀 Uso rápido (CDN)

Solo copia y pega:

```html
<div class="escribir"
     data-texto="Agua clara, código limpio."
     data-velocidad="100"
     data-cursor="1"
     data-fade="0.25">
</div>

<script src="https://cdn.jsdelivr.net/gh/tu-usuario/mizu@mizu.js" data-auto></script>
```

> ✅ **Sin CSS externo** — los estilos se inyectan automáticamente.  
> ✅ **Sin build, sin node_modules, sin frameworks**.  
> ✅ **Listo para producción**.

---

## 📦 Atributos de `escribir`

| Atributo          | Valor por defecto | Descripción |
|-------------------|-------------------|-------------|
| `data-texto`      | `""`              | Texto a escribir |
| `data-velocidad`  | `120` (ms)        | Tiempo entre letras |
| `data-cursor`     | `0`               | `1` = muestra cursor `|` |
| `data-fade`       | `0` (s)           | Duración del fade por letra (0 = instantáneo) |

> Todos los nombres usan **español sin acentos ni ñ** (ej: `niño` → `ninho`), para evitar conflictos y garantizar compatibilidad ASCII.

---

## 🧩 API JavaScript (para SPAs o control avanzado)

```js
// Iniciar todos los elementos con clase .escribir
Mizu.iniciar();

// Iniciar con selector personalizado
Mizu.iniciar('.mi-clase');
```

Ideal para aplicaciones de una sola página (SPA): llama `Mizu.iniciar()` tras actualizar el DOM.

---

## 🌱 Filosofía de Mizu

- **Una función a la vez**: cada característica es autónoma, útil y bien pensada.
- **Nombres en español**: accesible para hispanohablantes, sin anglicismos innecesarios.
- **Prefijo `sui-`**: todas las clases internas usan `sui-*` (ej: `sui-letra`, `sui-done`) para evitar colisiones.
- **Autocontenid**o: un solo archivo `.js` incluye lógica + estilos.
- **Progresivo**: funciona en navegadores antiguos y modernos.

---

## 📥 Instalación

### Opción 1: CDN (recomendado)
```html
<script src="https://cdn.jsdelivr.net/gh/mizulegendsstudios/mizu@v1.0.0/mizu.js"></script>
```

### Opción 2: Descarga local
1. Descarga [`mizu.js`](https://cdn.jsdelivr.net/gh/mizulegendsstudios/mizu@v1.0.0/mizu.js)
2. Guárdalo en tu proyecto
3. Inclúyelo en tu HTML

---

## 🌊 ¿Por qué "Mizu"?

*Mizu* (水) significa **"agua"** en japonés:  
simple, esencial, adaptable y poderosa.  
Así es este framework: **fluye donde se necesita, sin ruido, sin residuos**.

---

> ✨ **Mizu no es solo un typewriter. Es el inicio de algo más grande.**
```
