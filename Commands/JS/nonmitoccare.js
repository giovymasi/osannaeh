function command() {
    try {
        JSBot.SendAudioMessage("https://raw.githubusercontent.com/giovymasi/StockRussoBOT/master/Media/No%20No%20square.mp3");
    }
    catch (error) {
        JSBot.SendTextMessage(error);
    }
}
command();