function command() {
    var started;
    if (!path.directory.exist(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall")) {
        path.directory.create(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall");
    }
    if (!path.directory.exist(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users")) {
        path.directory.create(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users");
    }
    if (!path.file.exist(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json")) {
        path.file.create(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json");
    }
    if (!path.file.exist(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\concorrente.json")) {
        path.file.create(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\concorrente.json");
    }
    if (args[0] == "start") {
        if (json.loads(path.file.read(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json")) == true) {
            JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark:") + "Il gioco è già stato avviato!");
            return;
        }
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":video_game:") + "IL GIOCO THE WALL È INIZIATO!\nPer cominciare a giocare scegli un concorrente (/thewall concorrente @tag)");
        started = true;
        var true_ = json.dumps(started);
        path.file.write(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json", true_);
    }
    if (args[0] == "stop") {
        if (json.loads(path.file.read(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json")) == false) {
            JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark:") + "Il gioco non era avviato!");
            return;
        }
        JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":partying_face:") + "IL GIOCO È UFFICIALMENTE TERMINATO!\nGrazie per aver giocato")
        started = false;
        var false_ = json.dumps(started);
        path.file.write(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json", false_);
        path.file.write(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\concorrente.json");
    }
    if (args[0] == "concorrente") {
        if (json.loads(path.file.read(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json")) == true) {
            var user = Database.GetUser(args[1].Replace("@", ""));
            if (!path.directory.exist(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users\\" + user.id)) {
                path.directory.create(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users\\" + user.id);
            }
            if (!path.file.exist(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users" + user.id + "\\points.txt")) {
                path.file.create(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users" + user.id + "\\points.txt");
            }
            var concorrente = json.dumps(user);
            path.file.write(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\concorrente.json", concorrente);
            JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":white_check_mark:") + "Concorrente aggiunto!\nFai '/thewall {punteggio} per aggiungere o rimuovere punti");
        }
        else {
            JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:") + "Il gioco non è avviato");
        }
    }
    if (args[0] != "start" && args[0] != "stop" && args[0] != "concorrente") {
        if (json.loads(path.file.read(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\started.json")) == true) {
            var user = json.loads(path.file.read(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\concorrente.json"));
            if (user == null) {
                JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:") + "Devi prima aggiungere un concorrente!");
                return;
            }
            var score = parseInt(args[0]);
            var points = parseInt(path.file.read(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users" + user.id + "\\points.txt"))
            if (points == null) {
                points = 0;
            }
            points += score;
            path.file.write(Utilities.EnvPath + "\\COMMANDS\\ASSETS\\TheWall\\Users" + user.id + "\\points.txt", points);
        }
        else {
            JSBot.SendTextMessage(Utilities.ShortnameToEmoji(":x:") + "Il gioco non è avviato");
        }
    }
}
var sender_ = new User(JSBot.From.id);
if (sender_.is_admin | sender_.is_moderator) {
    command();
}