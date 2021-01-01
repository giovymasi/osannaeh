function command() {
    try {
        if (args.len > 5) {
            JSBot.SendTextMessage("Posso distruggere solo fino a 5 persone");
            return;
        }
        var user1 = Database.GetUser(args[0].Replace("@", ""));
        if (args.len == 5) {
            var user2 = Database.GetUser(args[1].Replace("@", ""));
        }
        if (args.len == 3) {
            var user3 = Database.GetUser(args[2].Replace("@", ""));
        }
        if (args.len == 4) {
            var user4 = Database.GetUser(args[3].Replace("@", ""));
        }
        if (args.len == )
    }
    catch (error) {
        JSBot.SendTextMessage(error);
    }
}
command();