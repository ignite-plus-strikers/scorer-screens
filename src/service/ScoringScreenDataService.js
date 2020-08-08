import axios from 'axios'


const PRE_MATCH_API_URL = 'http://localhost:8080/cricket-tournament'


class ScoringScreenDataService {

    getPreMatchData(id) {
        return axios.get(`${PRE_MATCH_API_URL}/pre-match/${id}`);
    }
}

export default new ScoringScreenDataService();