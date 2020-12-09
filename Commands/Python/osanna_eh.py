from BotOS_API import *

try:
    PyBot.SendAudioMessage("https://raw.githubusercontent.com/giovymasi/stockrussobot/master/Media/Osanna%20eh.mp3")
except Exception:
    PyBot.SendTextMessage(str(Exception))