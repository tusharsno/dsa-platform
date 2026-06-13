#!/bin/bash

# DSA Platform Presentation Generator
# This script will automatically create PPTX and PDF files

echo "🚀 DSA Platform - Presentation Generator"
echo "========================================"
echo ""

# Check if we're in the correct directory
if [ ! -f "PRESENTATION_FINAL.md" ]; then
    echo "❌ Error: PRESENTATION_FINAL.md not found!"
    echo "Please run this script from /home/tushar/dsa-platform directory"
    exit 1
fi

echo "✅ Found PRESENTATION_FINAL.md"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed!"
    echo "Please install Node.js and npm first"
    exit 1
fi

echo "✅ npm is installed"
echo ""

# Check if marp-cli is installed
if ! command -v marp &> /dev/null; then
    echo "📦 Installing Marp CLI..."
    npm install -g @marp-team/marp-cli
    
    if [ $? -eq 0 ]; then
        echo "✅ Marp CLI installed successfully"
    else
        echo "❌ Failed to install Marp CLI"
        exit 1
    fi
else
    echo "✅ Marp CLI is already installed"
fi

echo ""
echo "🎨 Generating presentation files..."
echo ""

# Generate PPTX
echo "Creating PowerPoint file..."
marp PRESENTATION_FINAL.md --pptx -o DSA_Platform_Presentation.pptx

if [ $? -eq 0 ]; then
    echo "✅ PowerPoint created: DSA_Platform_Presentation.pptx"
else
    echo "❌ Failed to create PowerPoint"
    exit 1
fi

echo ""

# Generate PDF
echo "Creating PDF file..."
marp PRESENTATION_FINAL.md --pdf -o DSA_Platform_Presentation.pdf

if [ $? -eq 0 ]; then
    echo "✅ PDF created: DSA_Platform_Presentation.pdf"
else
    echo "⚠️  PDF creation failed (this is optional)"
fi

echo ""

# Generate HTML
echo "Creating HTML file..."
marp PRESENTATION_FINAL.md --html -o DSA_Platform_Presentation_Slides.html

if [ $? -eq 0 ]; then
    echo "✅ HTML created: DSA_Platform_Presentation_Slides.html"
else
    echo "⚠️  HTML creation failed (this is optional)"
fi

echo ""
echo "=========================================="
echo "🎉 SUCCESS! Presentation files created:"
echo "=========================================="
echo ""
echo "📄 Files created in: $(pwd)"
echo ""
echo "1. 📊 DSA_Platform_Presentation.pptx  (PowerPoint)"
echo "2. 📑 DSA_Platform_Presentation.pdf   (PDF - optional)"
echo "3. 🌐 DSA_Platform_Presentation_Slides.html (HTML - optional)"
echo ""
echo "✨ Your presentation is ready!"
echo "📍 Location: /home/tushar/dsa-platform/"
echo ""
echo "💡 Tip: Open the PPTX file in PowerPoint or LibreOffice Impress"
echo ""
