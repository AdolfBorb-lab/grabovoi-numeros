# 📱 Cómo Publicar en la Play Store de Android

## Guía Completa para Convertir tu App Web en App Android

---

## 🚀 Opción 1: PWA (Progressive Web App) - La forma más fácil

### Paso 1: Tu app ya está configurada como PWA
La configuración PWA ya está lista con:
- ✅ `manifest.json` - Configuración de la app
- ✅ Iconos en todos los tamaños
- ✅ Meta tags para móviles
- ✅ Service Worker (generado por next-pwa)

### Paso 2: Desplegar la PWA
Puedes desplegar tu app en:
- **Vercel** (recomendado): `vercel --prod`
- **Netlify**: Conectar tu repositorio
- **Firebase Hosting**: `firebase deploy`

### Paso 3: Instalar desde el navegador
Los usuarios pueden instalar tu app directamente desde Chrome:
1. Visitar la URL de tu app
2. Menú → "Añadir a pantalla de inicio"
3. ¡Listo! La app aparecerá en su teléfono

### Paso 4: Publicar como TWA en Play Store (Opcional)
Usa [Bubblewrap](https://github.com/nicoolle/nicoolle.github.io/blob/main/docs/bubblewrap.md) para crear un APK:

```bash
# Instalar Bubblewrap
npm install -g @anthropic/bubblewrap

# Inicializar proyecto TWA
bubblewrap init --manifest="https://tu-app.com/manifest.json"

# Generar APK
bubblewrap build
```

---

## 🔧 Opción 2: Capacitor - App Nativa Completa

### Requisitos Previos
1. **Java JDK 17+**
2. **Android Studio** instalado
3. **Android SDK** configurado
4. **Gradle** instalado

### Paso 1: Build de la App Web

```bash
# Construir la versión de producción
bun run build

# Para Next.js con output standalone, copiar archivos estáticos
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
```

### Paso 2: Inicializar Capacitor (ya configurado)

```bash
# Sincronizar archivos web con Android
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

### Paso 3: Configurar en Android Studio

1. Abre el proyecto en Android Studio
2. Ve a `app/src/main/AndroidManifest.xml`
3. Verifica el `package` name: `com.grabovoi.numeros`

### Paso 4: Generar APK Firmado

1. **Crear Keystore**:
```bash
keytool -genkey -v -keystore grabovoi-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias grabovoi
```

2. **Configurar firma** en `android/app/build.gradle`:
```gradle
android {
    signingConfigs {
        release {
            storeFile file('../../grabovoi-key.jks')
            storePassword 'TU_PASSWORD'
            keyAlias 'grabovoi'
            keyPassword 'TU_PASSWORD'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

3. **Generar APK/AAB**:
```bash
cd android
./gradlew assembleRelease  # Para APK
./gradlew bundleRelease    # Para AAB (Play Store)
```

---

## 🏪 Publicar en Google Play Store

### Paso 1: Crear Cuenta de Desarrollador
1. Ve a [Google Play Console](https://play.google.com/console)
2. Paga la tarifa única de **$25 USD**
3. Completa tu perfil de desarrollador

### Paso 2: Crear Nueva Aplicación
1. Click en "Crear aplicación"
2. Completa la información básica:
   - **Nombre**: Números de Grabovoi
   - **Idioma**: Español
   - **Gratuita o de pago**: Gratuita

### Paso 3: Completar Información de la Tienda

#### Descripción Corta (80 caracteres max):
```
Manifesta abundancia y bienestar con numerología sagrada de Grabovoi
```

#### Descripción Completa:
```
✨ Números de Grabovoi - Generador de Energía Positiva ✨

Descubre el poder de las secuencias numéricas sagradas para manifestar abundancia, amor, salud y bienestar en tu vida.

🌟 CARACTERÍSTICAS:
• 📅 Número del Día - Calcula tu energía según la fecha
• 🎲 Modo Aleatorio - Recibe el código perfecto para ti
• 💰 8 Categorías especializadas
• ⭐ Sistema de favoritos
• 📖 Guía de aprendizaje incluida

💫 CATEGORÍAS:
💰 Abundancia y Dinero
❤️ Amor y Relaciones
🏠 Casa y Propiedades
💼 Trabajo y Negocios
🧘 Espiritualidad
🩺 Salud y Bienestar
🎯 Metas y Deseos
📚 Estudios

Basado en las enseñanzas del Dr. Grigori Grabovoi, matemático y físico ruso que desarrolló este sistema de concentración numérica para el desarrollo personal y espiritual.

🔥 CÓDIGOS DESTACADOS:
• 520 - Dinero inesperado
• 71427321893 - Código Millonario
• 8888 - Protección Divina
• 1888948 - Transforma negativo en positivo

¡Descarga ahora y comienza a manifestar tus deseos! ✨
```

#### Capturas de Pantalla:
Necesitas al menos 2 capturas (1080x1920 px):
- Captura de la pantalla principal
- Captura mostrando un número
- Captura de las categorías
- Captura de la sección "Aprende"

#### Icono de la App:
Usa el icono de 512x512 que ya creaste.

#### Banner de Portada (1024x500):
Crea una imagen promocional.

### Paso 4: Clasificación de Contenido
Completa el cuestionario de clasificación (es una app de estilo de vida/educación).

### Paso 5: Precios y Distribución
- Selecciona los países donde estará disponible
- Marca si contiene anuncios (no)
- Marca si es para niños (no, mejor para todos)

### Paso 6: Subir el AAB
1. Ve a "Versiones de producción"
2. Crear nueva versión
3. Sube el archivo `.aab` generado
4. Completa las notas de la versión

### Paso 7: Revisar y Publicar
1. Revisa toda la información
2. Click en "Enviar a revisión"
3. Espera la aprobación (1-7 días)

---

## 📋 Checklist Final

- [ ] App probada en diferentes dispositivos
- [ ] Iconos en todos los tamaños necesarios
- [ ] Descripciones y screenshots listos
- [ ] Política de privacidad (si recopila datos)
- [ ] AAB firmado con keystore
- [ ] Cuenta de desarrollador activa ($25)
- [ ] Banner promocional creado

---

## 🔗 Recursos Útiles

- [Documentación de Capacitor](https://capacitorjs.com/docs)
- [Guía de Google Play](https://support.google.com/googleplay/android-developer)
- [Next.js PWA](https://github.com/shadowwalker/next-pwa)
- [Bubblewrap TWA](https://github.com/nicoolle/nicoolle.github.io/blob/main/docs/bubblewrap.md)

---

## 💡 Alternativas Rápidas

### PWABuilder (Microsoft)
1. Ve a [pwabuilder.com](https://pwabuilder.com)
2. Ingresa la URL de tu PWA
3. Descarga el APK generado automáticamente
4. ¡Súbelo a la Play Store!

### GoNative (Servicio pago)
Servicio que convierte tu web en apps nativas sin programación.

---

¡Buena suerte con tu publicación! 🚀
