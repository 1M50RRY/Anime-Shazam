import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button, Icon, Text } from 'native-base';

const {width, height} = Dimensions.get('window');

const options = {noData: true};

export default class App extends Component {
  state = { photo: null };

  handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary(options, response => {
      console.log(this.state);
      if (response.uri) this.setState({photo: response});
    });
  }

  handleTakePhoto = () => {
    ImagePicker.launchCamera(options, response => {
      if (response.uri) this.setState({photo: response});
    });
  }

  render() {
    const { photo } = this.state;
    return (
      <View style={styles.container}>
        {photo && (
          <Image 
            source={{uri: photo.uri}} 
            style={{width: 300, height: 300}}
          />
        )}
        <Button style={{marginTop: height - 100}} onPress={this.handleTakePhoto} iconLeft rounded primary>
          <Icon name='camera' />
          <Text>Take a photo</Text>
        </Button>
        <Button style={{marginTop: height - 100, marginLeft: 10}} onPress={this.handleChoosePhoto} rounded iconLeft primary>
          <Icon name='md-images' />
          <Text>Pick from gallery</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'row', 
    flexWrap:'wrap'
  }
});
