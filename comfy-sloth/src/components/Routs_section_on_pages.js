import '../css/Routs_section_on_pages.css'
import { Link } from 'react-router-dom';


export const Routs_section_on_pages = ({ rout }) => {
    return (
        <>
            <section className="Routs_section_on_pages">
                <div className="Routs_section_on_pages_links">
                    <h3><Link to={`/`}>Home</Link><Link to={`/${rout.toLowerCase()}`}>/{rout}</Link></h3>
                </div>
            </section>
        </>
    )
}