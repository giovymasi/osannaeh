from BotOS_API import *
from Telegram import Bot
from telegram import ParseMode
import sys
try:
    message = ""
    if args[0]=="group":
        group = types.Group(args[1])
        if group == None:
            PyBot.SendTextMessage("Il bot non e' stato inserito in questo gruppo.")
            sys.exit
        args.remove(args[0])
        args.remove(args[1])
        for word in args:
            message += word + " "
        PyBot.SendTextMessage(group.group_id, message)
    elif args[0]=="user":
        user = types.Database.GetUser(args[1].replace("@", ""))
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
        thisgroup = types.Group(PyBot.MessageArgs.Message.Chat.Title)
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