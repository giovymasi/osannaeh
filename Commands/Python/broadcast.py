from BotOS_API import *
from Telegram import Bot
import sys
try:
    message = ""
    if args[0]=="group":
        group = BotOS_API.types.Group(args[1])
        chatId = Types.ChatId(group.group_name)
        if group == None:
            PyBot.SendTextMessage("Il bot non e' stato inserito in questo gruppo.")
            sys.exit
        args.remove(args[0])
        args.remove(args[1])
        for word in args:
            message += word + " "
        PyBot.SendTextMessage(chatId, message)
    elif args[0]=="user":
        user = clr.Reference[BotOS_API.types.User]()
        BotOS_API.types.Database.try_GetUser(args[1].replace("@", ""), user.Value)
        if user == None:
            PyBot.SendTextMessage("L'utente non e' registrato.")
            sys.exit
        args.remove(args[0])
        args.remove(args[1])
        for word1 in args:
            message += word1 + " "
        try:
            PyBot.SendTextMessage(user.id, message)
        except:
            pass
    elif args[0] == "all":
        thisgroup = BotOS_API.types.Group(PyBot.MessageArgs.Message.Chat.Title)
        args.remove(args[0])
        for word2 in args:
            message += word2 + " "
        for utente in thisgroup.users:
            try:
                PyBot.SendTextMessage(utente.id, message)
            except:
                pass
except Exception:
    PyBot.SendTextMessage(str(Exception))