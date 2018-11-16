#!/usr/bin/python3

def alarm(targeturl='http://google.com', targethour=0, targetminute=0, targetsecond=0):
    # Get the current datetime.
    import datetime
    now = datetime.datetime.now()
    # Chop off microseconds.
    now -= datetime.timedelta(microseconds=now.microsecond)

    # Construct the target datetime.
    target = datetime.datetime(now.year, now.month, now.day, targethour, targetminute)
    # If target alredy happened, move target to the next day.
    if now > target:
        target += datetime.timedelta(days=1)

    # We'll need this for sleep().
    import time

    # Loop that triggers every second
    # and ends when now > target.
    while 1:
        now += datetime.timedelta(seconds=1)
        if now > target:
            break
        else:
            time.sleep(1)
            print(str(target - now))

    # Open link in default web browser.
    import webbrowser
    webbrowser.open(targeturl)

if __name__ == '__main__':
    # Get target URL.
    target_url = input('Enter full URL: ')
    # Get target hour between 0 and 23.
    target_hour = int(input('Enter hour (0-23): '))
    # Get target minute between 0 and 59.
    target_minute = int(input('Enter minutes (0-59): '))
    # Get target second between 0 and 59.
    target_minute = int(input('Enter seconds (0-59): '))

    alarm(targeturl=target_url, targethour=target_hour, targetminute=target_minute)
