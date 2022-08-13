import {Outlet} from 'react-router-dom'


export const AdminRightComponent = () => {
    return (
        <>
            <div className="AdminRightComponent">
                <Outlet/>
            </div>
        </>
    )
}