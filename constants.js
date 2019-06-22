import { Dimensions } from 'react-native';
import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    takePhotoButton: {
        marginTop: 150
    },
    choosePhotoButton: {
        marginTop: 150,
        //marginLeft: 10
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
    }
});
export const options = { noData: true };
export const {width, height} = Dimensions.get('window');
export const getPreview = ({anilist_id, filename, at, tokenthumb}) => `https://trace.moe/thumbnail.php?anilist_id=${anilist_id}&file=${encodeURIComponent(filename)}&t=${at}&token=${tokenthumb}`;
export const uploadPhoto = async uri => axios.post('https://trace.moe/api/search', {image: await ImgToBase64.getBase64String(uri)}, {'Content-Type': 'application/json'});