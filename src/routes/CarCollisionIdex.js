import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { fetchAllCollisions } from '../actions/Collision';
import Card from '../components/common/card';
import FilterMenu from '../components/common/filter-menu/FilterMenu';
import {FormGroup, Input} from 'reactstrap'
import { Link } from 'react-router-dom';

const TODAYS_DATE = new Date().toISOString();
const INITIAL_CONFIG = { currentPage:0, pageSize:10, date: TODAYS_DATE.substr(0, TODAYS_DATE.indexOf('T')) }

const CarCollisonIndex = (props) => {
    const [filterDetails, setFilterDetails] = React.useState(INITIAL_CONFIG)
    const [dateFilter, setDateFilter] = React.useState();

    useEffect(() => {
        fetchCollisions();
    },[]);

    useEffect(() => {
        fetchCollisions()
    },[filterDetails])

    const fetchCollisions = () => {
        let {currentPage, pageSize, date} = filterDetails;
        date = new Date(date).toISOString().split('Z')[0];
        props.fetchAllCollisions(currentPage * pageSize, (currentPage+1) * pageSize, date);
    }

    return (
        <React.Fragment>
            <div className="collisions-display container">
                <h2 className="py-2 px-2 mb-0">
                    Collisions
                </h2>
                <hr className="mt-0"/>
                <div className="container">
                    <FilterMenu>
                        <FormGroup className="col-lg-3 float-end">
                            <Input type="date" name="date" id="exampleDate" value={filterDetails.date} placeholder="Select Date"
                            onChange={(e) => setFilterDetails({...filterDetails, date:e.target.value})}
                            />
                        </FormGroup>
                    </FilterMenu>
                    {props.collisions.length > 0 ?
                        <div className="row" >
                            {props.collisions.map(collision => {
                                return <Link to={`${collision.collision_id}`} key={collision.collision_id} className="col-lg-3">
                                            <Card  title={collision.on_street_name}>
                                                <p className="mb-1 px-1">First Car : {collision.contributing_factor_vehicle_1}</p>
                                                <p className="mb-1 px-1"> Second Car : {collision.contributing_factor_vehicle_2}</p>
                                                <p className="mb-1 px-1">Crash Date: {collision.crash_date}</p>
                                                <p className="mb-1 px-1">Crash Time: {collision.crash_time}</p>
                                            </Card>
                                        </Link>
                            })}
                        </div> :
                        <div className="mh-100"><h4 className="d-flex justify-content-center align-text-center">Sorry no data Found !!</h4></div>
                    }
                </div>
            </div>
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
        fetchAllCollisions : (offset, limit, date) => {dispatch(fetchAllCollisions(offset, limit, date)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCollisonIndex);