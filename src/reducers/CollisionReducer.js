const TODAYS_DATE = new Date().toISOString();
const INITIAL_CONFIG = { currentPage:0, pageSize:10, date: TODAYS_DATE.substr(0, TODAYS_DATE.indexOf('T')), displayType:'grid' }
const CollisionReducer = (state=INITIAL_CONFIG, action) => {
    let collisions = [];
    switch(action.type){
        case "SETTING_FILTER":
            return {...state, ...action.data }
        case "FETCH_ALL_COLLISION_STARTED":
            return {...state, isFetchingCollisions:true, fetchAllCollisionError:null}
        case "FETCH_ALL_COLLISION_COMPLETED":
            collisions = action.data;
            return {...state, isFetchingCollisions:false, collisions, fetchAllCollisionError:null}
        case "FETCH_ALL_COLLISION_FAILED":
            return {...state, isFetchingCollisions:false, collisions:[], fetchAllCollisionError:action.error}
        case "FETCH_COLLISION_STARTED":
            return {...state, isFetchingCollision:true, fetchCollisionError:null}
        case "FETCH_COLLISION_COMPLETED":
            collisions = state.collisions || [];
            collisions.push(action.payload);
            return {...state, collisions, isFetchingCollision:false, fetchCollisionError:null}
        case "FETCH_COLLISION_FAILED":
            return {...state, isFetchingCollision:false, fetchCollisionError:action.error}
        default:
            return state;
    }
}

export default CollisionReducer;