#!/bin/bash

cd ../
mkdir latest_build
TARGETDIR=latest_build;for file in *;do test "$file" != "$TARGETDIR" && cp -r "$file" "$TARGETDIR/";done

# Remove files that we don't want to bundle
cd latest_build
rm -rf ci
rm -rf .git
rm -rf db

zip -r ../latest_build.zip .
cd ../
rm -rf latest_build
mkdir latest_build
mv latest_build.zip latest_build

lftp -d -e "set ssl:verify-certificate no; mirror -P $NUMBER_OF_CONCURRENT_UPLOADS -Rv $LOCAL_DIR $REMOTE_DIR; quit;" ftp://$USERNAME:$PASSWORD@$HOST

# wget https://www.hitman2maps.com/admin/migrate-db?accesskey=$ACCESS_KEY > /dev/null
wget https://www.hitman2maps.com/unzip-build.php > /dev/null