from BotOS_API import *
import sys
try:
    message = ""
    if args[0]=="group":
        group = types.Group(args[1])
        if group == None:
            PyBot.SendTextMessage("Il bot non e' stato inserito in questo gruppo.".replace("<", "-"))
            sys.exit
        args.remove(args[0])
        args.remove(args[1])
        for word in args:
            message += word + " "
        PyBot.SendTextMessage(group.group_id, message.replace("<", "-"))
        PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark") + "Inviato".replace("<", "-"))
    elif args[0]=="user":
        user = types.Database.GetUser(args[1].replace("@", ""))
        if user == None:
            PyBot.SendTextMessage("L'utente non e' registrato.".replace("<", "-"))
            sys.exit
        args.remove(args[0])
        args.remove(args[1])
        for word1 in args:
            message += word1 + " "
        try:
            PyBot.SendTextMessage(user.id, message.replace("<", "-"))
            PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark") + "Inviato".replace("<", "-"))
        except:
            PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:") + "Non sono riuscito a inviare il messaggio".replace("<", "-"))
    elif args[0] == "all":
        thisgroup = types.Group(PyBot.MessageArgs.Message.Chat.Title)
        args.remove(args[0])
        for word2 in args:
            message += word2 + " "
        for utente in thisgroup.users:
            try:
                PyBot.SendTextMessage(utente.id, message.replace("<", "-"))
            except:
                pass
    elif args[0] == "allshow":
        thisgroup1 = types.Group(PyBot.MessageArgs.Message.Chat.Title)
        args.remove(args[0])
        for word3 in args:
            message += word3 + " "
        for utente1 in thisgroup1.users:
            try:
                PyBot.SendTextMessage(utente1.id, message.replace("<", "-"))
                PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark:") + "@" + utente1.username + "ha ricevuto il messaggio".replace("<", "-"))
            except:
                PyBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:") + "@" + utente1.username + "non ha ricevuto il messaggio".replace("<", "-"))
except Exception:
    PyBot.SendTextMessage(str(Exception.Message).replace("<", "-"))