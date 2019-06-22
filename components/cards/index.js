import React, { Component } from 'react';
import { Container, View, DeckSwiper, Text, Icon, Button } from 'native-base';
import { TitleCard } from './card'
import { styles, getPreview } from '../../constants'

export default class TitleCardList extends Component {
    render() {
        return (
            <Container>
                <View>
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={this.props.titles}
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
                <View style={styles.rowElements}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Prev</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>Next</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
            </Container>
        );
    }
}