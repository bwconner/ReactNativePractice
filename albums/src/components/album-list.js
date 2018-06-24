import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './album-detail';

export default class AlbumList extends Component  {
	state = {albums: []};

	componentWillMount() {
		axios.get('http://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({albums: response.data}));
	}

	renderAlbums() {
		let {albums} = this.state;

		return albums.map(album =>
			<AlbumDetail
				key={album.title}
				albumTitle={album.title}
				albumArtist={album.artist}
				albumURL={album.url}
				albumImage={album.image}
				albumThumbnail={album.thumbnail_image}
			/>
		);

		//return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
	}

	render() {

		return(
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	};
}
