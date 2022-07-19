import { useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
import { category_filter,color_filter } from "../reducer/fetchDataReducer";
import { useDispatch, useSelector } from "react-redux";

export const Category_components = ({ data }) => {
    const [categoryButton, set_categoryButton] = useState(false)
    const {categoryFilterName}=useSelector(store => store.fetchData)
    const dispatch=useDispatch()


    return (
        <>
            <button type="button" onClick={() => {
                set_categoryButton(!categoryButton)
                dispatch(category_filter(data))
            }} id={categoryFilterName==data ? 'form_control_2_category_option_active':'none'} name="category">{data}</button>
        </>
    )
}

export const Company_components = ({ data }) => {
    return (
        <>
            <option value={data}>{data}</option>
        </>
    )
}

export const Color_component = ({ data_color, bacground_color }) => {
    const {colorFilterName}=useSelector(store => store.fetchData)
    const dispatch=useDispatch()
    return (
        <>
            <button name="color" onClick={() => {
                dispatch(color_filter(data_color))
            }} className="color-btn" data-color={data_color} style={{ background: bacground_color }}>{colorFilterName==data_color && <CheckIcon style={{ transform: 'scale(.7)', position: 'absolute', color: 'white'}} />}</button>
        </>
    )
}

export const Sort_component = () => {

}
