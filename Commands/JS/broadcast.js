function command() {
    try {
        var message = "";
        if (args[0] == "group") {
            var group = new Group(kArgs[1]);
            if (group == null) {
                JSBot.SendTextMessage("Il bot non fa parte del gruppo indicato");
                return;
            }
            args.shift();
            args.shift();
            for (var word of args) {
                message += `${word} `;
            }
            try {
                JSBot.SendTextMessage(group.group_id, message);
                JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark:Messaggio inviato"));
            }
            catch(errore) {
                JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:Non sono riuscito a inviare il messaggio"));
            }
        }
        else if (args[0] == "user") {
            var user = Database.GetUser(args[1].replace("@", ""));
            args.shift();
            args.shift();
            for (var word1 of args) {
                message += `${word1} `;
            }
            try {
                JSBot.SendTextMessage(user.id, message);
                JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark:Messaggio inviato"));
            } catch(errore1) {
                JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:Non sono riuscito a inviare il messaggio"));
            }
        }
        else if (args[0] == "all") {
            var thisgroup = new Group(JSBot.MessageArgs.Message.Chat.Title);
            users = thisgroup.users;
            args.shift();
            for (var word2 of args) {
                message += `${word2} `;
            }
            for (var utente of users) {
                try {
                    JSBot.SendTextMessage(utente.id, message);
                } catch(errore2) { }
            }
        }
        else if (args[0] == "allshow") {
            var thisgroup1 = new Group(JSBot.MessageArgs.Message.Chat.Title);
            users1 = thisgroup1.users;
            args.shift();
            for (var word3 of args) {
                message += `${word3} `;
            }
            for (var utente1 of users1) {
                try {
                    JSBot.SendTextMessage(utente1.id, message);
                    JSBot.SendTextMessage(Utilities.ShortnameToEmoji(`:white_check_mark:@${utente1.username} ha ricevuto il messaggio`));
                } catch(errore3) {
                    JSBot.SendTextMessage(Utilities.ShortnameToEmoji(`:x:@${utente1.username} non ha ricevuto il messaggio`));
                }
            }
        }
    }
    catch (error) {
        JSBot.SendTextMessage("Error: " + error);
    }
}
command();