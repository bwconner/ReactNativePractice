import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import Card from './card';
import CardSection from './card-section';
import Button from './button';

const AlbumDetail = (props) => {
	const {textContainer, thumbnailImage, albumTitleText, thumbnailContainer, albumImageStyle} = styles;
	const {albumTitle, albumArtist, albumURL, albumImage, albumThumbnail} = props;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainer}>
					<Image style={thumbnailImage} source={{uri: albumThumbnail}}/>
				</View>
				<View style={textContainer}>
					<Text style={albumTitleText}>{albumTitle}</Text>
					<Text>{albumArtist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={albumImageStyle} source={{uri: albumImage}}/>
			</CardSection>
			<CardSection>
				<Button/>
			</CardSection>
		</Card>
	);
};

const styles = {
	textContainer: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},

	albumTitleText: {
		fontSize: 18
	},

	thumbnailImage: {
		height: 50,
		width: 50
	},

	thumbnailContainer: {
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center'
	},

	albumImageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
