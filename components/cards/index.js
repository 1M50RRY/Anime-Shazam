import React, { Component } from 'react';
import { Container, Spinner, View, DeckSwiper, Text, Icon, Button } from 'native-base';
import { TitleCard } from './card'
import { styles, getPreview } from '../../constants'

export default class TitleCardList extends Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={this.props.titles}
                        renderEmpty={() =>
                            <View style={{ alignSelf: "center" }}>
                                <Text>Choose picture</Text>
                            </View>
                        }
                        renderItem={title => 
                            <TitleCard 
                                image={getPreview(title)} 
                                episode={title.episode} 
                                name={title.title_english} 
                                similarity={title.similarity} 
                            /> 
                        }
                    />
                </View>
                {this.props.titles.length > 0 &&
                <View style={styles.rowElements}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Previous</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Icon name="arrow-forward" />
                        <Text>Next</Text>
                    </Button>
                </View>
                }
            </Container>
        );
    }
}