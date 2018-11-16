#!/bin/sh

version="2.1.1"

# Fetch $version of the Quail JavaScript Library.
wget https://github.com/quailjs/quail/archive/$version.tar.gz

# Unpack fetched $version.tar.gz file.
tar -zxf $version.tar.gz

# Copy the required Quail .js and .json files
#   into the appropriate Callipepla folders.
cp -r quail-$version/dist/* callipepla/js

# Delete the no longer needed $version.tar.gz
#   file and quail-$version directory.
rm $version.tar.gz
rm -rf quail-$version
