import axios from 'axios';

export function garageList() {
    return axios.get(`http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25`)
}