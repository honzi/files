:: No args.
:: Example usage: configure.bat

:: Registry changes.
REG ADD "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v "ShowSecondsInSystemClock" /t "REG_DWORD" /d "1" /f
