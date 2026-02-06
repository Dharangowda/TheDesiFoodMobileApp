// Temporary placeholder creator for product images
// Run this with: node create-placeholders.js

const fs = require('fs');
const path = require('path');

const productImages = [
    'ghee-jar.jpg',
    'cultured-ghee.jpg', 
    'basmati-rice.jpg',
    'turmeric-powder.jpg',
    'coconut-oil.jpg',
    'face-wash.jpg',
    'hair-serum.jpg',
    'neem-turmeric.jpg',
    'immunity-booster.jpg',
    'ramayana-book.jpg',
    'sanskrit-book.jpg',
    'chess-set.jpg'
];

const productsDir = path.join(__dirname, 'assets', 'images', 'products');

// Create placeholder text files (you can replace with actual images later)
productImages.forEach(imageName => {
    const filePath = path.join(productsDir, imageName);
    const placeholderContent = `Placeholder for ${imageName}\nReplace this file with actual product image`;
    
    fs.writeFileSync(filePath, placeholderContent);
    console.log(`Created placeholder: ${imageName}`);
});

console.log('\nAll placeholder files created!');
console.log('Replace these files with actual product images from the download guide.');