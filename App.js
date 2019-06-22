import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { Container, Button, Spinner, Icon, Text, View, Toast } from 'native-base';
import { options, extractPhoto } from './constants'
import TitleCardList from './components/cards'
import { styles } from './styles'

export default class App extends Component {
  state = {
    titles: null,
    isLoading: false
  };

  onLoad = statement => this.setState({ isLoading: statement });
  onDataFetch = data => this.setState({ titles: data });
  handleChoosePhoto = () => ImagePicker.showImagePicker(options, (response) => extractPhoto(response, this.onLoad, this.onDataFetch));

  render() {
    return (
      <Container>
        <View style={{ alignSelf: "center" }}><Text>
          {!this.state.isLoading && !this.state.titles ?
            "Choose picture"
            :
            "Note: You can swipe cards"
          }
        </Text></View>
        {this.state.isLoading && <Spinner color='blue' />}
        {this.state.titles && !this.state.isLoading && <TitleCardList titles={this.state.titles} />}
        <View style={styles.container}>
          <Button style={styles.selectImageButton} onPress={this.handleChoosePhoto}>
            <Icon name='camera' active />
          </Button>
        </View>
      </Container>
    );
  }
}


