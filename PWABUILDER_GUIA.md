# 📱 GUÍA PASO A PASO - PWABuilder para Android

## Tu URL de la App:
```
https://my-project-ochre-seven-50.vercel.app
```

---

## 🔧 PASOS EN PWABUILDER.COM

### Paso 1: Ir a PWABuilder
1. Abre: **https://www.pwabuilder.com/**
2. Verás una caja de texto grande

### Paso 2: Ingresa tu URL
1. Pega esta URL en la caja:
   ```
   https://my-project-ochre-seven-50.vercel.app
   ```
2. Click en el botón **"Start"** (o "Analyze")

### Paso 3: Espera el Análisis
- PWABuilder analizará tu PWA
- Verás una pantalla con un "score" o puntuación
- Debería mostrar **verde** o **amarillo** (tu app está bien configurada)

### Paso 4: Empaquetar para Android
1. Busca el botón **"Package for stores"** o **"Publish"**
2. Selecciona **"Android"** (icono de Android 🤖)
3. NO selecciones "Generate manifest" - eso es lo que te dio el .json

### Paso 5: Configurar el APK
Aparecerá un formulario. Llénalo así:

**Package ID:**
```
com.grabovoi.numeros
```

**App Name:**
```
Números de Grabovoi
```

**Launcher Name (short):**
```
Grabovoi
```

**Version:**
```
1.0.0
```

**Minimum SDK:**
```
21 (Android 5.0)
```

### Paso 6: Descargar
1. Click en **"Generate"** o **"Download"**
2. Espera unos segundos
3. Se descargará un archivo **.zip** que contiene:
   - `app-release.apk` ← **ESTE ES EL ARCHIVO INSTALABLE**
   - `app-release.aab` (para Play Store)

---

## 📲 Cómo Instalar el APK en Android

### Método 1: Transferir al teléfono
1. Transfiere el archivo `app-release.apk` a tu teléfono
   - Por USB
   - Por WhatsApp/Telegram
   - Por Google Drive

2. En tu teléfono:
   - Abre el archivo `.apk`
   - Te pedirá permiso para instalar de "orígenes desconocidos"
   - Activa el permiso
   - Click en "Instalar"

### Método 2: Desde el navegador del teléfono
1. En tu teléfono, ve a pwabuilder.com
2. Repite los pasos
3. Cuando se descargue el APK, ábrelo directamente

---

## ⚠️ POSIBLES PROBLEMAS

### "App not installed"
- Ve a Configuración → Seguridad → Orígenes desconocidos → Actívalo
- O en Android moderno: Configuración → Apps → Instalar apps desconocidas → Permite Chrome

### "Parse error"
- El APK puede estar corrupto, descarga de nuevo
- Asegúrate de tener suficiente espacio

---

## 🏪 Para Play Store

Para publicar en Google Play Store necesitas:

1. El archivo **.aab** (Android App Bundle) que también viene en el ZIP
2. Una cuenta de desarrollador ($25 USD único)
3. Ir a [play.google.com/console](https://play.google.com/console)
4. Subir el .aab

---

## 🔄 ALTERNATIVA: Instalar como PWA directamente

Si solo quieres probar la app en tu teléfono, NO necesitas PWABuilder:

1. Abre Chrome en tu Android
2. Ve a: `https://my-project-ochre-seven-50.vercel.app`
3. Espera 3 segundos
4. Aparecerá un banner "Añadir a pantalla de inicio"
5. Click en "Instalar"
6. ¡Listo! La app aparecerá en tu teléfono

O manualmente:
- Menú (⋮) → "Añadir a pantalla de inicio" → "Instalar"
