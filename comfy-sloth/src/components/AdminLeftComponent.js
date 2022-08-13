import { Link } from "react-router-dom"

export const AdminLeftComponent = () => {
    return (
        <>
            <div className="AdminLeftComponent">
                <ul>
                    <Link to={'/admin/page/adminprofile'} style={{textDecoration:'none'}}><li>Profile</li></Link>
                    <Link to={'/admin/page/adminallproduct'} style={{textDecoration:'none'}}><li>All Product</li></Link>
                    <li>Logout</li>
                </ul>
            </div>
        </>
    )
}