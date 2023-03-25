#!/bin/bash

while read url; do
    issuer=$(echo $url | grep -oP '(?<=issuer=)[^&]+' | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
    cmd="qrencode -o ../docs/qrcodes/${issuer}.png -s 10 \"$url\""
    eval "$cmd"
done < site_urls.txt