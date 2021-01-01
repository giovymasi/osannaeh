function command() {
    try {
        var number = args[0];
        args.shift();
        var message = "";
        for (var word of args) {
            message += `${word} `;
        }
        for (var i = 0; i < number; i++) {
            JSBot.SendTextMessage(message);
        }
    }
    catch (error) {
        JSBot.SendTextMessage(error);
    }
}
command();