import axios from 'axios' ;

const get_rating="http://localhost:8080/reviewbycourse/2";

class RatingService
{
getreviews()
{
    return axios.get(get_rating);
}
}

export default new RatingService()