var playlist = { 
  avril: 'my happy ending',
  bryan: 'inside out',
  ed: 'prefect'
};

function updatePlaylist(playlist,aristName,songTitle)
{
  return Object.assign({}, playlist, { [aristName]: value})
}

function removeFromPlaylist(playlist,aristName)
{
  
  delete playlist.aristName
  
  return playlist
  
}