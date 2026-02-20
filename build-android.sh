#!/bin/bash

# =====================================================
# 📱 Build Script para Números de Grabovoi
# =====================================================

echo "✨ Iniciando build para Android..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Paso 1: Build de Next.js
echo -e "${YELLOW}📦 Construyendo aplicación Next.js...${NC}"
bun run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error en el build de Next.js${NC}"
    exit 1
fi

# Paso 2: Copiar archivos estáticos para standalone
echo -e "${YELLOW}📋 Copiando archivos estáticos...${NC}"
cp -r public .next/standalone/ 2>/dev/null || true
cp -r .next/static .next/standalone/.next/ 2>/dev/null || true

# Paso 3: Sincronizar con Capacitor (si está configurado)
if command -v npx &> /dev/null; then
    echo -e "${YELLOW}🔄 Sincronizando con Capacitor...${NC}"
    npx cap sync android 2>/dev/null || echo -e "${YELLOW}⚠️ Capacitor no inicializado. Ejecuta 'npx cap add android' primero.${NC}"
fi

echo -e "${GREEN}✅ Build completado exitosamente!${NC}"
echo ""
echo "📱 Próximos pasos:"
echo "   1. Para PWA: Despliega en Vercel/Netlify"
echo "   2. Para Android Nativo:"
echo "      - npx cap add android (primera vez)"
echo "      - npx cap open android"
echo "   3. Para Play Store: Lee PLAY_STORE_GUIDE.md"
echo ""
echo "✨ ¡Buena suerte con tu publicación!"
