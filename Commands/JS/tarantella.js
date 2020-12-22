function command() {
    try {
        JSBot.SendAudioMessage("https://raw.githubusercontent.com/giovymasi/StockRussoBOT/master/Media/Tarantella%20Pugliese%20-%20La%20Rondinella.mp3");
    } catch (error) {
        JSBot.SendTextMessage(error);
    }
}
command();