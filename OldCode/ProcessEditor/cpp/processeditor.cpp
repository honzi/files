#define _WIN32_WINNT _WIN32_WINNT_WINXP

#include <iostream>
#include <string>
#include <windows.h>
#pragma comment(lib, "User32.lib")

char TargetWindowTitle[] = "Title";
void* TargetAddress = (void *)0x8ABA89;

BOOL CALLBACK EnumWindowsProc(HWND hwnd, LPARAM lParam){
    if(IsWindowVisible(hwnd) != 0){
        TCHAR WindowTitle[1024];
        if(GetWindowText(hwnd, WindowTitle, 1024) == 0){
            return true;
        }

        if(strcmp(WindowTitle, TargetWindowTitle) == 0){
            DWORD ProcessId = 0;
            GetWindowThreadProcessId(hwnd, &ProcessId);
            HANDLE ProcessHandle = OpenProcess(PROCESS_ALL_ACCESS, FALSE, ProcessId);

            if(ProcessHandle != NULL){
                *((HANDLE*)lParam) = ProcessHandle;
            }
        }
    }
    return true;
}

int main(void){
    HANDLE ProcessHandle = NULL;
    EnumWindows(EnumWindowsProc, (LPARAM)&ProcessHandle);
    if(ProcessHandle == NULL){
        return 1;
    }

    unsigned char Byte;

    while(true){
        if(ReadProcessMemory(ProcessHandle, TargetAddress, &Byte, 1, NULL) == 0{
            return 1;
        }

        if(Byte == 0){
            Byte = 1;

            if(WriteProcessMemory(ProcessHandle, TargetAddress, &Byte, 1, NULL) == 0){
                return 1;
            }
        }

        Sleep(1000);
    }

    return 0;
}
