#!/bin/bash

# Скрипт для сборки статического сайта (обходит проблему с кириллицей в пути)

echo "📦 Сборка статического сайта..."

# Создаем временную папку без кириллицы
TEMP_DIR="/tmp/blck-build-$$"
mkdir -p "$TEMP_DIR"

echo "📁 Копирую файлы во временную папку..."

# Копируем все нужные файлы
cp -r app "$TEMP_DIR/"
cp -r components "$TEMP_DIR/"
cp -r public "$TEMP_DIR/"
cp -r styles "$TEMP_DIR/"
cp -r lib "$TEMP_DIR/" 2>/dev/null || true
cp -r hooks "$TEMP_DIR/" 2>/dev/null || true
cp package.json "$TEMP_DIR/"
cp package-lock.json "$TEMP_DIR/" 2>/dev/null || true
cp next.config.mjs "$TEMP_DIR/"
cp tsconfig.json "$TEMP_DIR/"
cp postcss.config.mjs "$TEMP_DIR/"
cp components.json "$TEMP_DIR/" 2>/dev/null || true

# Переходим во временную папку
cd "$TEMP_DIR"

echo "📦 Устанавливаю зависимости..."
npm install --silent

echo "🔨 Собираю проект..."
npm run build

# Копируем результат обратно
if [ -d "out" ]; then
    echo "✅ Копирую результат сборки..."
    cp -r out "/Users/gordei/Desktop/Новая папка 2/"
    echo "✅ Сборка завершена! Результат в папке out/"
else
    echo "❌ Ошибка: папка out не создана"
    exit 1
fi

# Очищаем временную папку
cd "/Users/gordei/Desktop/Новая папка 2"
rm -rf "$TEMP_DIR"

echo "🎉 Готово!"


