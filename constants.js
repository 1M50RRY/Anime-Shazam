import { Dimensions } from 'react-native';
import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';
import { StyleSheet } from 'react-native';
import { Toast } from 'native-base';

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
export const options = {
    title: 'Select image',
    noData: true,
};

export const getPreview = ({ anilist_id, filename, at, tokenthumb }) => `https://trace.moe/thumbnail.php?anilist_id=${anilist_id}&file=${encodeURIComponent(filename)}&t=${at}&token=${tokenthumb}`;
const uploadPhoto = async uri => axios.post('https://trace.moe/api/search', { image: await ImgToBase64.getBase64String(uri) }, { 'Content-Type': 'application/json' });
export const extractPhoto = (res, onLoad, onDataFetch) => {
    if (!res.didCancel) {
        onLoad(true);
        uploadPhoto(res.uri).then(response => {
            if (response.status === 413)
                Toast.show({
                    text: "Image should be less than 1mb",
                    buttonText: "Got it",
                    type: "danger"
                });
            onDataFetch(response.data.docs);
            onLoad(false);
        });
    }
}