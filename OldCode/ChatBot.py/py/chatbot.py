#!/usr/bin/env python3

import re
import socket

HOST = 'irc.twitch.tv'
JOIN = '#'
NICK = ''
PASS = 'oauth:'
PING = 'tmi\.twitch\.tv'
PORT = 6667

COMMANDS = [
  r'k',
]
FORMAT = re.compile(r"^:\w+!\w+@\w+\.%s PRIVMSG #\w+ :" % (PING))
RECEIVE = 1024
SLEEP = 10
TIMEOUT = 900

def ban(sock, user):
    send(sock, '.ban {}'.format(user))

def send(sock, message, encode=False):
    message = 'PRIVMSG #{} :{}'.format(JOIN, message)

    if encode:
        message = message.encode('utf-8')

    sock.send(message)

def timeout(sock, user, seconds=TIMEOUT):
    send(sock, '.timeout {}'.format(user, seconds))

if __name__ == '__main__':
    sock = socket.socket()
    sock.connect((HOST, PORT))
    send(sock, 'PASS {}\r\n'.format(PASS), True)
    send(sock, 'NICK {}\r\n'.format(NICK), True)
    send(sock, 'JOIN {}\r\n'.format(JOIN), True)

    while True:
        response = sock.recv(RECEIVE).decode('utf-8')

        if response == 'PING :tmi.twitch.tv\r\n':
            send(sock, 'PONG :tmi.twitch.tv\r\n', True)

        else:
            message = FORMAT.sub("", line)
            for command in COMMANDS:
                if re.match(command, message):
                    send(sock, 'k')
                    break

        sleep(SLEEP)
