import httpClient from "./http-client";

export default {
    getChallenges: () => {
        return httpClient.get('challenge');
    },
    getChallengeById: (id) => {
        return httpClient.get(`challenge/${id}`);
    },
    addChallenge(payload) {
        return httpClient.post('challenge', payload);
    },
    postSubmission(payload) {
        return httpClient.post('submission', payload);
    },
    getSubmissions(id) {
        return httpClient.get(`submissions/${id}`);
    },
    upVote(id) {
        return httpClient.put(`/submission/upVote/${id}`);
    },
    downVote(id) {
        return httpClient.put(`/submission/downVote/${id}`);
    }
};