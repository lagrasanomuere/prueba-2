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

    hls.loadSource("http://127.0.0.1:8888/live/mistream/index.m3u8");

    hls.attachMedia(video);

} else if (video.canPlayType("application/vnd.apple.mpegurl")) {

    video.src = "http://127.0.0.1:8888/live/mistream/index.m3u8";

}
