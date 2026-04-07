---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'NMAP Usage'
pubDate: 07-04-2026
description: 'How does the most famous port scanner work?'
author: 'Tarun Kakani'
image:
    url: 'https://miro.medium.com/0*cS7UgOFrx1PlMQry.png'
    alt: 'NMAP Logo'
tags: ["Tools"]
---
## Scan Types

- -sT : TCP Connect scan
- -sS : SYN “half open” scan
- -sU : UDP scan
- -sN : TCP Null scans
- -sF : TCP Fin scans
- -sX : TCP Xmas scans

## Common Commands
- -o : Specify Operating system
- -sV : server/version info
- -v : verbosity or -vv (for greater effect)
- -oA OR -oN / -oX / -oS / -oG “output file” : output scan in 3 diff modes
- -A : aggresive for all things in one. Service detection, OS, traceroute, common script scanning
- -T<0-5> : timing speed, higher is faster scan. (fast is never good, smooth is) → **Perform Timing and Evasion Scans. Slow scan is for evasion.**
- -p “num” : for specific port OR -p 1000-1500 (for range)
    - -p- : to scan all ports
- -sC or —script : to activate a script from nmap scripting library
    - to activate a specific category script : —script=”vuln” or other (check help -h)