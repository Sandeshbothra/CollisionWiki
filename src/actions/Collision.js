import CollisionApi from '../utils/api'
export const fetchAllCollisionStarted = () => {
    return{
        type:"FETCH_ALL_COLLISION_STARTED"
    }
}

export const fetchAllCollisionCompleted = (data) => {
    return{
        type:"FETCH_ALL_COLLISION_COMPLETED",
        data,
    }
}

export const fetchAllCollisionFailed = (error) => {
    return{
        type:"FETCH_ALL_COLLISION_FAILED",
        error
    }
}

export const fetchCollisionStarted = () => {
    return {
        type:"FETCH_COLLISION_STARTED"
    }
}

export const fetchCollisionCompleted = (payload) => {
    return {
        type:"FETCH_COLLISION_COMPLETED",
        payload
    }
}

export const fetchCollisionFailed = (error) => {
    return {
        type:"FETCH_COLLISION_FAILED",
        error
    }
}

export const setFilter = (data) => {
    return {
        type:"SETTING_FILTER",
        data
    }
}

export const fetchAllCollisions = (offset, limit, date) =>{
    return (dispatch) => {
        dispatch(fetchAllCollisionStarted());
        let url = 'resource/h9gi-nx95.json?';
        if(offset){
            url = url + `$offset=${offset}`
        }
        if(limit){
            url = url + `&$limit=${limit}`
        }
        if(date){
            url = url + `&crash_date=${date}`
        }
        CollisionApi.get(url).then((response) => {
            dispatch(fetchAllCollisionCompleted(response.data));
        }).catch((error) => {
            dispatch(fetchAllCollisionFailed(error));
        })
    }
}

export const  fetchCollision = (id) => {
    return (dispatch) => {
        CollisionApi.get(`resource/h9gi-nx95.json?collision_id=${id}`).then((response) => {
            dispatch(fetchCollisionCompleted(response.data[0]));
        }).catch((error) => {
            dispatch(fetchCollisionFailed(error));
        })
    }
}
