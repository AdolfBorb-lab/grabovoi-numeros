# 🚀 GUÍA RÁPIDA DE DESPLIEGUE

## Tu app está lista para desplegar. Solo necesitas una URL pública.

---

## 🌐 OPCIÓN 1: VERCEL (Recomendado - Gratis)

### Paso 1: Crear cuenta
Ve a https://vercel.com y regístrate (gratis, puedes usar GitHub)

### Paso 2: Importar proyecto
1. Click en "Add New" → "Project"
2. Conecta tu repositorio de GitHub (si lo subiste)
   **O** usa "Import Git Repository" y pega la URL

### Paso 3: Desplegar
- Vercel detecta automáticamente Next.js
- Click en "Deploy"
- ¡Listo en 1-2 minutos!

### Tu URL será:
```
https://tu-proyecto.vercel.app
```

---

## 📱 OPCIÓN 2: NETLIFY (Gratis)

### Paso 1: Build local
```bash
bun run build
```

### Paso 2: Subir a Netlify
1. Ve a https://app.netlify.com
2. Arrastra la carpeta `.next/standalone` al área de deploy
3. ¡Listo!

---

## 🧪 OPCIÓN 3: PROBAR LOCALMENTE EN TU MÓVIL

Si solo quieres probar, puedes usar ngrok para exponer tu localhost:

```bash
# Instalar ngrok (si no lo tienes)
# Luego ejecuta:
ngrok http 3000
```

Esto te dará una URL temporal como:
```
https://abc123.ngrok.io
```

---

## ✅ DESPUÉS DE DESPLEGAR

1. **Prueba la URL** en tu navegador móvil
2. **Instala como app**: Chrome → Menú → "Añadir a pantalla de inicio"
3. **Para Play Store**: Usa [pwabuilder.com](https://pwabuilder.com) con tu URL

---

## 📂 Archivos Listos

Tu app ya está configurada con:
- ✅ manifest.json (PWA)
- ✅ Iconos en todos los tamaños
- ✅ Service Worker
- ✅ Meta tags para móviles
- ✅ Build listo en `.next/standalone/`

¡Solo falta desplegar! 🚀
