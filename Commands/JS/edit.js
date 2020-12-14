function command() {
    var sender_ = User(JSBot.MessageArgs.Message.From.Id);
    var messageid = JSBot.MessageArgs.Message.ReplyToMessage.Messageid;
    var message = "";
    if (args[0] == "silent") {
        try {
            if (!sender_.is_admin && !sender_.is_moderator) {
                return;
            }
            args.shift();
            for (var word1 of args) {
                message += `${word1} `;
            }
            JSBot.EditMessage(messageid, message);
        }
        catch (err) { }
    }
    else {
        try {
            if (!sender_.is_admin && !sender_.is_moderator) {
                JSBot.SendTextMessage("Non hai il permesso di usare questo comando. Chiedi a uno degli admin o moderatori.");
                return;
            }
            for (var word2 of args) {
                message += `${word2} `;
            }
            JSBot.EditMessage(messageid, message);
            JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":pencil2:<i>Edited</i>"));
        }
        catch (error) {
            JSBot.SendTextMessage(`Errore: ${error}`);
        }
    }
}