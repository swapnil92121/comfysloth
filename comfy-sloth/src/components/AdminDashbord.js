import { AdminLeftComponent } from "./AdminLeftComponent"
import { AdminRightComponent } from "./AdminRightComponent"
import '../css/AdminDashbord.css'


export const AdminDashbord = () => {
    return (
        <>
            <div className="AdminDashbord">
                <AdminLeftComponent />
                <AdminRightComponent />
            </div>
        </>
    )
}