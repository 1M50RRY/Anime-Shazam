import React, { Component } from 'react';
import { Container, View, DeckSwiper, Text, Icon } from 'native-base';
import { TitleCard } from './card'

export default class TitleCardList extends Component {
    render() {
        return (
            <Container>
                <DeckSwiper
                    ref={(c) => this._deckSwiper = c}
                    dataSource={cards}
                    renderEmpty={() =>
                        <View style={{ alignSelf: "center" }}>
                            <Text>Over</Text>
                        </View>
                    }
                    renderItem={item => <TitleCard image={item.image} text={item.text} name={item.text} /> }
                />
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Icon name="arrow-forward" />
                        <Text>Swipe Right</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}