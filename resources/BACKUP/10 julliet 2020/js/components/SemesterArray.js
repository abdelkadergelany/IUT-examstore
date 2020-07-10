import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';


function SemesterArray(props) {
    let match = useRouteMatch();
    return (

        <div className="col-6 mb-3">
            <div className="custom-card">
                <div className="custom-card--img">
                   <NavLink activeClassName="active" to={`${match.url}/semester/${props.val}`}  >
                        <img src="/images/logo/sem.jpg" alt={`SEM ${props.val}`} className="card-img--radius-md" />
                        <span className="bg-blur">SEM{props.val}</span>
                        </NavLink>
                </div>
            </div>
        </div>

    )
}
export default SemesterArray;
