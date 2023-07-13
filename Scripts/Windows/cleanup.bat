@ECHO OFF

:: No args.
:: Example usage: cleanup.bat

:: Cleanup various folders.
del /S "C:\Users\janho\Documents\EVE\capture\*"
del /S "C:\Users\janho\Documents\EVE\logs\*"
del /S "C:\Users\janho\Music\*"
del /S "C:\Users\janho\Pictures\*"
del /S "C:\Users\janho\Videos\*"

PAUSE
