import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AdminDashbord } from "../../../components/AdminDashbord"
import { Nav_Bar } from "../../../components/Nav_Bar"
import { Routs_section_on_pages } from "../../../components/Routs_section_on_pages"
import { adminPageAuth } from "../../../reducer/admin"

export const AdminPage = () => {

    const { adminAuth } = useSelector(store => store.admin)
    const navigation=useNavigate()
    const dispatch=useDispatch()

    // useEffect(() => {
    //     dispatch(adminPageAuth())
    //     if (adminAuth) {
    //         navigation('/admin/page')
    //     }
    // })

    return (
        <>
            {/* navbar */}
            <Nav_Bar />


            {/* Routs_section_on_pages */}
            <Routs_section_on_pages rout={'admin'} />

            {
                adminAuth ?
                    <>
                        <AdminDashbord/>
                    </> :
                    <>
                        <h1>error</h1>
                    </>
            }
        </>
    )
} 