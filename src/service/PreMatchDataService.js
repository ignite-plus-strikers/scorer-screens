import axios from 'axios'


const PREMATCH_API_URL = 'http://localhost:8080/cricket-tournament'


class PreMatchDataService {

    retrieveAllPreMatches() {
        return axios.get(`${PREMATCH_API_URL}/pre-matches`);
    }
    // deleteFixture(id) {
    //     return axios.delete(`${PREMATCH_API_URL}/fixture/${id}`);
    // }

    // retrieveFixture(id) {
    //     return axios.get(`${PREMATCH_API_URL}/fixture/${id}`);
    // }
    
    //     updateFixture(id, fixture) {
    //         return axios.put(`${PREMATCH_API_URL}/fixture/${id}`, fixture);
    //     }
      
        createPreMatch(fixture_id,fixture) {
            return axios.post(`${PREMATCH_API_URL}/pre-match`,fixture);    
        }
}

export default new PreMatchDataService()