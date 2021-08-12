import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { fetchAllCollisions } from '../actions/Collision';
import Card from '../components/common/card';
import FilterMenu from '../components/common/filter-menu/FilterMenu';
import {FormGroup, Input, Table} from 'reactstrap'
import { Link, useHistory } from 'react-router-dom';
import MenuButton from '../components/common/menuButton';
import CustomTable from '../components/common/custom-table/CustomTable';

const TODAYS_DATE = new Date().toISOString();
const INITIAL_CONFIG = { currentPage:0, pageSize:10, date: TODAYS_DATE.substr(0, TODAYS_DATE.indexOf('T')) }

const CarCollisonIndex = (props) => {
    const [filterDetails, setFilterDetails] = React.useState(INITIAL_CONFIG)
    const [displayType, setDisplayType] = React.useState('grid');
    let history = useHistory();

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

    const generateGird = () => {
        return <div className="row" >
            { props.collisions.map(collision => {
            return <Link to={`${collision.collision_id}`} key={collision.collision_id} className="col-lg-3">
                        <Card  title={collision.on_street_name}>
                            <p className="mb-1 px-1">First Car : {collision.contributing_factor_vehicle_1}</p>
                            <p className="mb-1 px-1"> Second Car : {collision.contributing_factor_vehicle_2}</p>
                            <p className="mb-1 px-1">Crash Date: {collision.crash_date}</p>
                            <p className="mb-1 px-1">Crash Time: {collision.crash_time}</p>
                        </Card>
                    </Link>
            })}
            </div>
    }

    const redirectToDetails = (action_text, data) => {
        if(action_text === 'Show Details'){
            return history.push(`/${data.collision_id}`);
        }
    }

    const generateList = () => {
        return <CustomTable data={props.collisions}
                            headers={["on_street_name", "vehicle_type_code1","vehicle_type_code2", "crash_date", "borough"]}
                            textTransform
                            actions={[{text:"Show Details",cb:redirectToDetails}]}
        />
    }

    const generateData = () => {
        return displayType === 'grid' ? generateGird() : generateList();
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
                            <Input type="date" className="float-start" name="date" id="exampleDate" value={filterDetails.date} placeholder="Select Date"
                            onChange={(e) => setFilterDetails({...filterDetails, date:e.target.value})}
                            />
                        </FormGroup>
                        <div className="float-start col-lg-2">
                            <div className={`display-type-button float-start px-1 ${displayType === 'grid' ? 'active' : ''}`} onClick={() => setDisplayType('grid')}>
                                <MenuButton type="grid" />
                            </div>
                            <div className={`display-type-button float-start px-1 ${displayType === 'list' ? 'active' : ''}`} onClick={() => setDisplayType('list')}>
                                <MenuButton type="list" />
                            </div>
                        </div>
                    </FilterMenu>
                    { props.collisions.length > 0 ?
                        generateData():
                        <div className="mh-100"><h6 className="d-flex justify-content-center align-text-center">Sorry no data found!!</h6></div>
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