function command() {
    try {
        try {
            var group = Group(JSBot.Chat.Title);
        }
        catch (nogroup) {
            JSBot.SendTextMessage("'/ship' funziona solo nei gruppi!")
        }
        var users = group.users;
        var index1 = Math.floor((Math.random() * users.len) + 1);
        var index2 = Math.floor((Math.random() * users.len) + 1);
        if (index1 == index2) {
            index2++;
        }
        var user1 = group.users[index1];
        var user2 = group.users[index2];
        var message = `@${user1.username} & @${user2.username}`;
        JSBot.SendTextMessage(message);
    }
    catch (error) {
        JSBot.SendTextMessage(error);
    }
}
command();