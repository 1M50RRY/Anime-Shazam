import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';
import { Toast } from 'native-base';

export const options = {
    title: 'Select image',
    noData: true,
};

export const getPreview = ({ anilist_id, filename, at, tokenthumb }) => `https://trace.moe/thumbnail.php?anilist_id=${anilist_id}&file=${encodeURIComponent(filename)}&t=${at}&token=${tokenthumb}`;
export const extractPhoto = async (res, onLoad, onDataFetch) => {
    if (!res.didCancel) {
        onLoad(true);
        axios.post('https://trace.moe/api/search', { image: await ImgToBase64.getBase64String(res.uri) }, { 'Content-Type': 'application/json' })
            .then(response => {
                if (response.status === 413)
                    Toast.show({
                        text: "Image should be less than 1mb",
                        buttonText: "Got it",
                        type: "danger"
                    });
                onDataFetch(response.data.docs);
                onLoad(false);
            })
            .catch(err => {
                Toast.show({
                    text: "Image should be less than 1mb",
                    buttonText: "Got it",
                    type: "danger"
                });
            })
            .finally({

            })
    }
}