import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#843c82',
        textAlignVertical: 'center',
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
        height: 140,
        width: 140,
        borderRadius: 70,
        justifyContent: 'center',
        backgroundColor: '#9d629a'
    },
    btnIcon: {
        fontSize: 50
    }
});