:: No args.
:: Example usage: cleanup.bat

:: Cleanup various folders.
break>"C:\Program Files (x86)\Grinding Gear Games\Path of Exile\logs\Client.txt"
del /q /s "C:\Users\janho\Documents\EVE\capture\*"
del /q /s "C:\Users\janho\Documents\EVE\logs\*"
del /q /s "C:\Users\janho\Music\*"
del /q /s "C:\Users\janho\Pictures\*"
del /q /s "C:\Users\janho\Videos\*"
del /q /s %TEMP%\*
rd /q /s %systemdrive%\$Recycle.bin
