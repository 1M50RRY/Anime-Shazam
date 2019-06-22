import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';
import { Toast } from 'native-base';

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