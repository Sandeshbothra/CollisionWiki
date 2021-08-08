import { useEffect } from "react";
import {connect} from 'react-redux';
import { fetchAllCollisions } from '../actions/Collision';

const CarCollisionDetail = (props) => {
    useEffect(() => {
        console.log(props)
    },[])

    return(
        <div>
            
        </div>
    )
    
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        collisions : state.collisions.collisions
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllCollisions : fetchAllCollisions
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CarCollisionDetail);