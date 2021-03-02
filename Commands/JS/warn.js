function command() {
    static var user;
    static var username;
    if (args[0].Contains("@")) {
        user = Database.GetUser(args[0].Replace("@", ""));
        username = "@" + user.username;
    }
    else {
        for (var entity of JSBot.Entities) {
            if (entity.User != null) {
                user = group.GetUser(entity.User.Id);
                username = "<a href=\"tg://user?id=" + user.id + "\">" + entity.User.FirstName + " " + entity.User.LastName;
            }
        }
    }
    var group = new Group(JSBot.Chat.Title);
    if (user == null) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:") + "L'utente non esiste");
        return;
    }
    if (user.id == JSBot.From.id) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:") + "Non puoi ammonirti da solo");
        return;
    }
    if (!path.directory.exists(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name)) {
        path.directory.create(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name);
    }
    if (!path.directory.exists(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name + "\\" + user.id)) {
        path.directory.create(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name + "\\" + user.id);
    }
    if (!path.file.exists(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name + "\\" + user.id + "\\warn.txt")) {
        path.file.create(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name + "\\" + user.id + "\\warn.txt");
        path.file.write(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name + "\\" + user.id + "\\warn.txt", "0");
    }
    var warns = int(path.file.read(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name + "\\" + user.id + "\\warn.txt"));
    warns++;
    path.file.write(Utilities.EnvPath + "\\ASSETS\\lists\\" + group.group_name + "\\" + user.id + "\\warn.txt", warns);
    if (warns == 1) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":warning:") + username + " sei al primo warn! Vedi di darti una controllata...");
    }
    else if (warns == 2) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":mute:") + username + " sei al 2° warn! Sei stato mutato per 5 minuti");
        var fiveminutes = new Time(0, 0, 5, 0);
        JSBot.Mute(user, fiveminutes);
    }
    else if (warns == 3) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":exclamation:") + username + " sei al 3° warn! sei stato kickato");
        JSBot.Kick(user);
    }
    else if (warns == 4) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":exclamation::mute:") + username + " sei al 4° warn! Sei stato mutato per 10 minuti");
        var tenminutes = new Time(0, 0, 10, 0);
        JSBot.Mute(user, tenminutes);
    }
    else if (warns == 5) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":bangbang::mute:") + username + " sei al 5° warn! Sei stato mutato per 1 ora");
        var hour = new Time(0, 1, 0, 0);
        JSBot.Mute(user, hour);
    }
    else if (warns >= 6) {
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":no_entry_sign:") + username + " sei al" + warns + "° warn! Sei stato bannato");
        var bantime = new Time(365, 0, 0, 0);
        JSBot.Ban(user, bantime);
    }
}
command();