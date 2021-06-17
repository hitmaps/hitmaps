#!/bin/bash

cd ../../
mkdir backend
TARGETDIR=backend;for file in *;do test "$file" != "$TARGETDIR" && cp -r "$file" "$TARGETDIR/";done

# Remove files that we don't want to bundle
cd backend
rm -rf ci
rm -rf .git
rm -rf api/maps/
rm -rf js
rm -rf "Raw Media"
rm -rf scss
rm buildtiles.bat
rm crowdin.yml
rm gdal2tiles.py
rm LICENSE
rm README.md

# Remove Vue stuff, as this is the backend
rm -rf src
rm -rf public
rm .browserslistrc
rm .env
rm .env.development
rm .env.staging
rm .gitignore
rm .prettierrc
rm babel.config.js
rm vue.config.js
rm package.json
rm package-lock.json
rm postcss.config.js

zip -r ../backend.zip . > ../zip_output.txt
cd ../
rm -rf backend
mkdir backend
mv backend.zip backend
mv zip_output.txt backend

cd backend
echo 'Uploading backend.zip'
scp -r backend.zip $USERNAME@$HOST:$PROD_UPLOAD_DIR/backend.zip
echo 'Uploading zip_output.txt'
scp -r zip_output.txt $USERNAME@$HOST:$PROD_UPLOAD_DIR/zip_output.txt

curl https://www.hitmaps.com/unzip-build.php?zip=backend\&access-key=$ACCESS_KEY
curl https://www.hitmaps.com/api/admin/migrate?access-key=$ACCESS_KEY
