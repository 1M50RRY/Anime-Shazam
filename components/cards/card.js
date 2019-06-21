import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export const TitleCard = ({ image, text, name }) => {
    return (
        <Card style={{ elevation: 3 }}>
            <CardItem>
                <Left>
                    <Thumbnail source={image} />
                    <Body>
                        <Text>{text}</Text>
                        <Text note>NativeBase</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={image} />
            </CardItem>
            <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{name}</Text>
            </CardItem>
        </Card>
    );
}