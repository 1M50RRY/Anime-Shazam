import { Dimensions } from 'react-native';
import axios from 'axios';
import ImgToBase64 from 'react-native-image-base64';

export const {width, height} = Dimensions.get('window');
export const getPreview = ({anilist_id, filename, at, tokenthumb}) => `https://trace.moe/thumbnail.php?anilist_id=${anilist_id}&file=${encodeURIComponent(filename)}&t=${at}&token=${tokenthumb}`;
export const uploadPhoto = async uri => axios.post('https://trace.moe/api/search', {image: await ImgToBase64.getBase64String(uri)}, {'Content-Type': 'application/json'});