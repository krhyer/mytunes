function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }
    function drawSongs(songList) {
        var template = ""
        for (var i = 0; i < songList.length; i++) {
            song = songList[i]
            template +=
                `
        <div class="row">
                <div class="col-xs-1">
                    <img src="${song.albumArt}" alt=""></div>
                <div class="col-xs-2">${song.artist}</div>
                <div class="col-xs-2">${song.collection}</div>
                <div class="col-xs-2">${song.title}</div>
                <div class="col-xs-4">
                    <audio controls>
                        <source src="${song.preview}" type="">
                    </audio>
                </div>
                <div class="col-xs-1">${song.price}</div>
            </div>
        `
        }
        document.getElementById("songs").innerHTML = template





    }


}
var itunesCtrl = new ItunesController()

