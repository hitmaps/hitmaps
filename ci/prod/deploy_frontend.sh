#!/bin/bash

cd ../../dist/
mkdir frontend
TARGETDIR=frontend;for file in *;do test "$file" != "$TARGETDIR" && cp -r "$file" "$TARGETDIR/";done

cd frontend
zip -r ../../frontend.zip . > ../../zip_output.txt
cd ../../
rm -rf frontend
mkdir frontend
mv frontend.zip frontend
mv zip_output.txt frontend

cd frontend
echo 'Uploading frontend.zip'
scp -r frontend.zip $USERNAME@$HOST:$PROD_UPLOAD_DIR/frontend.zip
echo 'Uploading zip_output.txt'
scp -r zip_output.txt $USERNAME@$HOST:$PROD_UPLOAD_DIR/zip_output.txt

curl https://www.hitmaps.com/unzip-build.php?zip=frontend\&access-key=$ACCESS_KEY
