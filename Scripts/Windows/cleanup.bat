@ECHO OFF

:: No args.
:: Example usage: cleanup.bat

:: Cleanup various folders.
del /q /s "C:\Users\janho\Documents\EVE\capture\*"
del /q /s "C:\Users\janho\Documents\EVE\logs\*"
del /q /s "C:\Users\janho\Music\*"
del /q /s "C:\Users\janho\Pictures\*"
del /q /s "C:\Users\janho\Videos\*"

PAUSE
