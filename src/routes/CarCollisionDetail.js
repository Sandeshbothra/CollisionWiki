import { useEffect } from "react";
import {connect} from 'react-redux';
import { fetchAllCollisions } from '../actions/Collision';
import {useParams} from 'react-router-dom';

const CarCollisionDetail = (props) => {
    const params = useParams();
    useEffect(() => {
        console.log(params)
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