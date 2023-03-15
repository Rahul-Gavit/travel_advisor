import axios from "axios";

const URL = 'Enter Your Rapid API Link';
    


export const getPlacesData = async (sw,ne) => {
    try{
        const { data: { data } } = await axios.get(URL, {
        params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'X-RapidAPI-Key': 'Yours API Key',
            'X-RapidAPI-Host': 'Yours API Host'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

