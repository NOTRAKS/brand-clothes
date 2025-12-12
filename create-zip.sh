#!/bin/bash

# Скрипт для создания ZIP архива для деплоя на REG.RU
# Использование: ./create-zip.sh

echo "📦 Создание ZIP архива для REG.RU..."

# Имя архива
ZIP_NAME="blck-site.zip"

# Удаляем старый архив если есть
if [ -f "$ZIP_NAME" ]; then
    echo "🗑️  Удаляю старый архив..."
    rm "$ZIP_NAME"
fi

# Создаем временную папку
TEMP_DIR=$(mktemp -d)
echo "📁 Временная папка: $TEMP_DIR"

# Копируем нужные файлы и папки
echo "📋 Копирую файлы..."

# Папки
cp -r app "$TEMP_DIR/"
cp -r components "$TEMP_DIR/"
cp -r public "$TEMP_DIR/"
cp -r styles "$TEMP_DIR/"
cp -r lib "$TEMP_DIR/" 2>/dev/null || true
cp -r hooks "$TEMP_DIR/" 2>/dev/null || true

# Файлы
cp package.json "$TEMP_DIR/"
cp package-lock.json "$TEMP_DIR/" 2>/dev/null || true
cp next.config.mjs "$TEMP_DIR/"
cp tsconfig.json "$TEMP_DIR/"
cp postcss.config.mjs "$TEMP_DIR/"
cp components.json "$TEMP_DIR/" 2>/dev/null || true
cp .gitignore "$TEMP_DIR/" 2>/dev/null || true

# Удаляем .DS_Store если есть
find "$TEMP_DIR" -name ".DS_Store" -delete

# Создаем ZIP
echo "🗜️  Создаю ZIP архив..."
cd "$TEMP_DIR"
zip -r "$ZIP_NAME" . -q
mv "$ZIP_NAME" "$OLDPWD/"

# Очищаем временную папку
cd "$OLDPWD"
rm -rf "$TEMP_DIR"

# Проверяем размер
SIZE=$(du -h "$ZIP_NAME" | cut -f1)
echo ""
echo "✅ Архив создан: $ZIP_NAME"
echo "📊 Размер: $SIZE"
echo ""
echo "📋 Что включено:"
echo "  ✓ app/"
echo "  ✓ components/"
echo "  ✓ public/"
echo "  ✓ styles/"
echo "  ✓ lib/ (если есть)"
echo "  ✓ hooks/ (если есть)"
echo "  ✓ package.json"
echo "  ✓ next.config.mjs"
echo "  ✓ tsconfig.json"
echo "  ✓ postcss.config.mjs"
echo ""
echo "❌ Что НЕ включено:"
echo "  ✗ node_modules/"
echo "  ✗ .next/"
echo "  ✗ .git/"
echo ""
echo "🚀 Следующий шаг:"
echo "   1. Загрузите $ZIP_NAME на REG.RU"
echo "   2. Распакуйте в папку public_html"
echo "   3. Следуйте инструкции в REG_RU_DEPLOY.md"
echo ""


