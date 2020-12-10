from BotOS_API import *
from Telegram import Bot
import sys
try:
    message = ""
    if args[0]=="group":
        group = types.Group(args[1])
        chatId = Types.ChatId(group.group_name)
        if group == None:
            PyBot.SendTextMessage("Il bot non è stato inserito in questo gruppo.")
            sys.exit
        del args[0]
        del agrs[1]
        for word in args:
            message += f"{word} "
        PyBot.SendTextMessage(chatId, message)
    elif args[0]=="user":
        user = clr.Reference[BotOS_API.types.User]()
        types.Database.try_GetUser(args[1].replace("@", ""), user)
        if user == None:
            PyBot.SendTextMessage("L'utente non è registrato.")
            sys.exit
        del args[0]
        del args[1]
        for word1 in args:
            message += f"{word1} "
        try:
            PyBot.SendTextMessage(user.id, message)
        pass
    elif args[0] == "all":
        thisgroup = types.Group(PyBot.MessageArgs.Message.Chat.Title)
        del args[0]
        for word2 in args:
            message += f"{word2} "
        for utente in thisgroup.users:
            try:
                PyBot.SendTextMessage(utente.id, message)
            pass
except Exception:
    PyBot.SendTextMessage("Errore: " + str(Exception))