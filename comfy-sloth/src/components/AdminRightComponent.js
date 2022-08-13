import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


export const AdminRightComponent = () => {
    const navigation = useNavigate()
    useEffect(() => {
        navigation('/admin/page/adminprofile')
    }, [])
    return (
        <>
            <div className="AdminRightComponent">
                <Outlet />
            </div>
        </>
    )
}