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

export const setSelectedCollision = (id) => {
    return {
        type:"SETTING_SELECTED_COLLISION",
        id
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

export const fetchFillteredData = () => {

}