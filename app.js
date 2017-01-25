function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

 
      function drawSongs(songList){
        console.log('test');
    // This is where you task begins
           var template=''
           
           for(var i = 0; i < songList.length; i++){
      var song = songList[i]
     
       template +=`<tr><th>Song</th><td>${song.title}</td>
                <td><img src="${song.albumArt}"></td>
                <th>Artist</th><td>${song.artist}</td>
                <th>Collection</th><td>${song.collection}</td> 
                <th>Price</th><td>${song.price}</td></tr>`
                 
   
  }
  document.getElementById('song-list').innerHTML = template
}
    
    
  }

  var itunesCtrl = new ItunesController()