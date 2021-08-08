import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { Row } from 'reactstrap';
import { fetchAllCollisions, setSelectedCollision } from '../actions/Collision';
import Card from '../components/common/card';
import { Link, Redirect } from 'react-router-dom';

const CarCollisonIndex = (props) => {

    const [selectedCollision , setSelectedCollison] = useState(null);
    useEffect(() => {
        if(props.collisions.length == 0){
            props.fetchAllCollisions();
        }
    },[]);

    const selectCollision = (id) => {
        props.setSelectedCollision(id);
        setSelectedCollison(id);
    }

    return (
        <React.Fragment>
            {!selectedCollision ? 
            <div className="collisions-display">
                <div className="row" >
                    {props.collisions.map(collision => {
                        return <div onClick={() => selectCollision(collision.collision_id)} key={collision.collision_id} className="col">
                                    <Card  title={collision.on_street_name}>
                                        <p className="mb-1">First Car : {collision.contributing_factor_vehicle_1}</p>
                                        <p className="mb-1"> Second Car : {collision.contributing_factor_vehicle_2}</p>
                                        <p className="mb-1">Crash Date: {collision.crash_date}</p>
                                        <p className="mb-1">Crash Time: {collision.crash_time}</p>
                                    </Card>
                                </div>
                    })}
                </div>
            </div>:
            <Redirect to="/collisionDetails" id={selectedCollision.collision_id}/>}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        collisions : state.collisions.collisions || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllCollisions : () => {dispatch(fetchAllCollisions()) },
        setSelectedCollision : (id) => {dispatch(setSelectedCollision(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCollisonIndex);