import axios from 'axios'


const SCORECARD_API_URL = 'http://localhost:8080/cricket-tournament'


class ScorecardDataService {

   /*  retrieveAllSCORECARD() {
        return axios.get(`${SCORECARD_API_URL}/sCORECARD`);
    }
    deleteSCORECARD(id) {
        return axios.delete(`${SCORECARD_API_URL}/sCORECARD/${id}`);
    }

    retrieveSCORECARD(id) {
        return axios.get(`${SCORECARD_API_URL}/sCORECARD/${id}`);
    }
    
        updateSCORECARD(id,sCORECARD) {
            return axios.put(`${SCORECARD_API_URL}/sCORECARD/${id}`, sCORECARD);
        }
      
        createSCORECARD(sCORECARD) {
            return axios.post(`${SCORECARD_API_URL}/sCORECARD`,sCORECARD);    
        }
        
        deleteTeam(sCORECARDid,teamid){
            return axios.delete(`${SCORECARD_API_URL}/sCORECARD-teams/${sCORECARDid}/${teamid}`);
        } */

        createBatsmanInAMatch(batsman){
            return axios.post(`${SCORECARD_API_URL}/batsman-by-match`,batsman);
        }

        updateBatsmanInAMatch(matchid, batsmanname, batsman) {
            return axios.put(`${SCORECARD_API_URL}/batsman-by-match/${matchid}/${batsmanname}`, batsman);
        }

        createBowlerInAMatch(bowler){
            return axios.post(`${SCORECARD_API_URL}/bowler-by-match`,bowler);
        }

        updateBowlerInAMatch(matchid, bowlername, bowler) {
            return axios.put(`${SCORECARD_API_URL}/bowler-by-match/${matchid}/${bowlername}`, bowler);
        }

        retrieveAllBatsmenInAMatch(matchid) {
            return axios.get(`${SCORECARD_API_URL}/batsman-by-match/${matchid}`);
        }
        retrieveAllBowlersInAMatch(matchid) {
            return axios.get(`${SCORECARD_API_URL}/bowler-by-match/${matchid}`);
        }
}

export default new ScorecardDataService()