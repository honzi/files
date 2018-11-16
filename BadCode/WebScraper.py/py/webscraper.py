#!/usr/bin/env python3

import sys
import urllib.request

def fetch_from_URL(url):
    return urllib.request.urlopen(url).readall().decode('utf-8')

if __name__ == '__main__':
    print('Fetching from', url)
    print(fetch_from_URL(sys.argv[1]))
