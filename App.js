import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { Container, Button, Icon, Text, View } from 'native-base';
import { width, styles, height, uploadPhoto, options, getPreview } from './constants'
import TitleCardList from './components/cards'



export default class App extends Component {
  state = { 
    titles: [],
    isLoading: false
  };

  handleChoosePhoto = () => ImagePicker.launchImageLibrary(options, res => uploadPhoto(res.uri).then(response => this.setState({titles: response.data.docs})));
  handleTakePhoto = () => ImagePicker.launchCamera(options, res => uploadPhoto(res.uri).then(response => this.setState({titles: response.data.docs})));
 
  render() {
    return (
      <Container>
        <TitleCardList titles={this.state.titles} />
        <View style={styles.container}>
          <Button style={styles.takePhotoButton} onPress={this.handleTakePhoto} iconLeft rounded primary>
            <Icon name='camera' />
            <Text>Take a photo</Text>
          </Button>
          <Button style={styles.choosePhotoButton} onPress={this.handleChoosePhoto} rounded iconLeft primary>
            <Icon name='md-images' />
            <Text>Pick from gallery</Text>
          </Button>
        </View>
      </Container>
    );
  }
}


