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

export const fetchAllCollisions = () =>{
    return (dispatch) => {
        dispatch(fetchAllCollisionStarted());
        CollisionApi.get("resource/h9gi-nx95.json").then((response) => {
            dispatch(fetchAllCollisionCompleted(response.data));
        }).catch((error) => {
            dispatch(fetchAllCollisionFailed(error));
        })
    }
}

export const fetchFillteredData = () => {

}