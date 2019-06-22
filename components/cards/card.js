import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export const TitleCard = ({ image, episode, name, similarity }) => {
    return (
        <Card style={{ elevation: 3 }}>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: image}} />
                    <Body>
                        <Text>{name}</Text>
                        <Text note>Episode: {episode}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={{uri: image}} />
            </CardItem>
            <CardItem>
                <Text>Similarity: {similarity * 100}%</Text>
            </CardItem>
        </Card>
    );
}