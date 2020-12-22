function command() {
    try {
        JSBot.SendAudioMessage("https://raw.githubusercontent.com/giovymasi/StockRussoBOT/master/Media/LE%20PAPEREEE.ogg");
    } catch (error) {
        JSBot.SendTextMessage(error);
    }
}
command();