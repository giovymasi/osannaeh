function command() {
    try {
        var group = Group(JSBot.Chat.Title);
        var users = group.users;
        var index1 = Math.floor((Math.random() * users.len) + 1);
        var index2 = Math.floor((Math.random() * users.len) + 1);
        if (index1 == index2) {
            index2++;
        }
        var message = `@${group.users[index1].username} & @${group.users[index2].username}`;
        JSBot.SendTextMessage(message);
    }
    catch (error) {
        JSBot.SendTextMessage(error);
    }
}
command();