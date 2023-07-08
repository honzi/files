@ECHO OFF

:: No args.
:: Example usage: cleanup.bat

# Cleanup various folders.
del "C:\Users\janho\Documents\EVE\logs\ChatLogs\*.txt"
del "C:\Users\janho\Documents\EVE\logs\FleetLogs\*.txt"
del "C:\Users\janho\Documents\EVE\logs\GameLogs\*.txt"
del "C:\Users\janho\Documents\EVE\logs\MarketLogs\*.txt"

PAUSE
