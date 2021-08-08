const CollisionReducer = (state={}, action) => {
    let collisions = [];
    switch(action.type){
        case "FETCH_ALL_COLLISION_STARTED":
            return {...state, isFetchingCollisions:true, fetchAllCollisionError:null}
        case "FETCH_ALL_COLLISION_COMPLETED":
            collisions = action.data;
            return {...state, isFetchingCollisions:false, collisions, fetchAllCollisionError:null}
        case "FETCH_ALL_COLLISION_FAILED":
            return {...state, isFetchingCollisions:false, collisions:[], fetchAllCollisionError:action.error}
        case "SETTING_SELECTED_COLLISION":
            return {...state, selectedCollision:action.id}
        default:
            return state;
    }
}

export default CollisionReducer;