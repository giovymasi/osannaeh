from BotOS_API import *

try:
    group = types.Group(PyBot.MessageArgs.Message.Chat.Title)
    user = group.GetUser(args[0].replace("@", ""))
    PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":partying_face::tada:") + "AUGURIII @" + user.username)
    PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":partying_face::tada:") + "AUGURIII @" + user.username)
    PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":partying_face::tada:") + "AUGURIII @" + user.username)
except Exception:
    PyBot.SendTextMessage("Errore: " + str(Exception))