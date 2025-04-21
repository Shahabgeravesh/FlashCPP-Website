#!/bin/bash

# Install ImageMagick if not already installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is required. Please install it first."
    exit 1
fi

# Generate PNG icons from SVG
convert -background none -size 152x152 apple-touch-icon.svg apple-touch-icon-152x152.png
convert -background none -size 167x167 apple-touch-icon.svg apple-touch-icon-167x167.png
convert -background none -size 180x180 apple-touch-icon.svg apple-touch-icon-180x180.png

# Generate splash screens
convert -background "#007AFF" -size 2048x2732 xc:white apple-splash-2048x2732.png
convert -background "#007AFF" -size 1668x2388 xc:white apple-splash-1668x2388.png
convert -background "#007AFF" -size 1536x2048 xc:white apple-splash-1536x2048.png
convert -background "#007AFF" -size 1125x2436 xc:white apple-splash-1125x2436.png
convert -background "#007AFF" -size 1242x2688 xc:white apple-splash-1242x2688.png

echo "Icons generated successfully!" 