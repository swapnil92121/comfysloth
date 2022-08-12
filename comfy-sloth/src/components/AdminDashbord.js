import { AdminLeftComponent } from "./AdminLeftComponent"
import { AdminRightComponent } from "./AdminRightComponent"



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