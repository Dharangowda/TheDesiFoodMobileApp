@echo off
echo Downloading product images...

REM Create products directory if it doesn't exist
if not exist "assets\images\products" mkdir "assets\images\products"

REM Download product images using PowerShell
powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1609501676725-7186f734b2b0?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\ghee-jar.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\cultured-ghee.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\basmati-rice.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\turmeric-powder.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\coconut-oil.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\face-wash.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\hair-serum.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\neem-turmeric.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\immunity-booster.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\ramayana-book.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\sanskrit-book.jpg'"

powershell -Command "Invoke-WebRequest -Uri 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=400&fit=crop&crop=center' -OutFile 'assets\images\products\chess-set.jpg'"

echo All images downloaded successfully!
pause