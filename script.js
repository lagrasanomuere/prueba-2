const video = document.getElementById("player");

const player = new Plyr(video, {
    controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "settings",
        "fullscreen"
    ]
});

if (Hls.isSupported()) {

    const hls = new Hls();

    hls.loadSource("https://streamJC.b-cdn.net/live/stream/index.m3u8");

    hls.attachMedia(video);

} else if (video.canPlayType("application/vnd.apple.mpegurl")) {

    video.src = "https://streamJC.b-cdn.net/live/stream/index.m3u8";

}
