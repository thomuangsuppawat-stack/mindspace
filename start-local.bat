@echo off
title MindSpace Local Test Server
echo ========================================================
echo  Starting MindSpace Local Server on http://localhost:3000
echo ========================================================
start http://localhost:3000
"C:\Users\yngwi\AppData\Local\hermes\tools\node-26.12.1-win32-x64\node.exe" server.js
pause
