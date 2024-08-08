async function fetchCurrentlyPlaying() {
    const apiKey = '<apiKey>';
    const username = '<user>';
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const songDiv = document.getElementById('current-song');

      if (data.recenttracks.track && data.recenttracks.track.length > 0) {
        const track = data.recenttracks.track[0];
        if (track['@attr'] && track['@attr'].nowplaying) {
          const songName = track.name;
          const artistName = track.artist['#text'];
          songDiv.textContent = `Currently playing: ${songName} by ${artistName}`;
        } else {
          songDiv.textContent = "I'm not listening music right now.";
        }
      } else {
        songDiv.textContent = "I'm not listening music right now.";
      }
    } catch (error) {
      console.error('Error fetching data from Last.fm:', error);
      const songDiv = document.getElementById('current-song');
      songDiv.textContent = 'An error occurred while fetching the currently playing song.';
    }
  }

  fetchCurrentlyPlaying();
