import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Container, Button, Icon, Text } from 'native-base';
import { width, height, uploadPhoto, getPreview } from './constants'
import { TitleCardList } from './components/cards'

const options = { noData: true };

export default class App extends Component {
  state = { titles: null };

  handleChoosePhoto = () => ImagePicker.launchImageLibrary(options, res => uploadPhoto(res.uri).then(response => console.log(getPreview(response.data.docs[0]))));
  handleTakePhoto = () => ImagePicker.launchCamera(options, res => uploadPhoto(res.uri).then(response => console.log(response.data.docs)));

  render() {
    return (
      <Container>
        {this.state.titles &&
          <TitleCardList titles={this.state.titles} />
        }
        <View style={styles.container}>
          <Button style={{ marginTop: height - 100 }} onPress={this.handleTakePhoto} iconLeft rounded primary>
            <Icon name='camera' />
            <Text>Take a photo</Text>
          </Button>
          <Button style={{ marginTop: height - 100, marginLeft: 10 }} onPress={this.handleChoosePhoto} rounded iconLeft primary>
            <Icon name='md-images' />
            <Text>Pick from gallery</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
