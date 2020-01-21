import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: 'Hello hello',
			duration: '3.50'
		},
		{ title: 'Macarena', duration: '2.56' },
		{ title: 'Bus balius Bus Baliukas', duration: '3.45' },
		{ title: 'Laisve', duration: '4.06' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
