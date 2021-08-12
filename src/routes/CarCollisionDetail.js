import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { fetchCollision } from '../actions/Collision';
import FilterMenu from '../components/common/filter-menu/FilterMenu';
import {useParams, Link} from 'react-router-dom';
import DetailComponent from '../components/common/detailsComponent';

const CarCollisionDetail = (props) => {
    const params = useParams();
    const [selectedCollision, setSelectedCollision] = useState(null);
    
    useEffect(() => {
        let selectedCollision = props.collisions.find((collision) => {
            return collision.collision_id === params.id;
        });
        if(!selectedCollision){
            props.fetchCollision(params.id)
        }else{ 
            setSelectedCollision(selectedCollision);
        }
    },[props, params.id])

    return(
        <div>
            {selectedCollision ?
                <div className="container">
                    <h2 className="py-2 px-2 mb-0 page-header">
                        <p className="mb-0">Collision  Details</p>
                        <div className="mx-1 text-muted">{selectedCollision.on_street_name}</div>
                    </h2>
                    <hr className="mt-0"/>
                    <div className="container">
                        <FilterMenu>
                            <Link  className="btn btn-outline-secondary btn-sm col-lg-1" to="/">&larr; Back</Link>
                        </FilterMenu>
                        <DetailComponent data={selectedCollision}/>
                    </div>
                </div>:
                <div></div>
            }
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        collisions : state.collisions.collisions || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchCollision : (id) => dispatch(fetchCollision(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CarCollisionDetail);