import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: height / 1.19,
        marginLeft: width / 2.40
    },
    rowElements: {
        flexDirection: "row",
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        padding: 15
    },
    selectImageButton: {
        alignSelf: 'center',
        elevation: 4,
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: 'center'
    }
});