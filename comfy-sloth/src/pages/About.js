import { Nav_Bar } from "../components/Nav_Bar"
import { Routs_section_on_pages } from "../components/Routs_section_on_pages"
import image from "../images/hero-bcg.a876f19f (1).jpeg"
import '../css/about.css'

export const About = () => {
    return (
        <>
            {/* nav_bar */}
            <Nav_Bar />


            {/* routs_on_page */}
            <Routs_section_on_pages rout={`About`} />


            {/* block */}
            <div className="about_block">
                <div className="row">
                    <div className="col">
                        <img src={image} alt="nice desk" />
                    </div>
                    <div className="col">
                        <article>
                            <div className="title">
                                <h2>our story</h2>
                                <div className="underline"></div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                        </article>
                    </div>
                </div>
            </div>

            
        </>
    )
}