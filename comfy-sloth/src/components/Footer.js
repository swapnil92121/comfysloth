import '../css/footer.css'


export const Footer = ({margin='5%'}) => {
    return (
        <>
            <footer style={{marginTop:margin}} className="footer">
                <h5>© 2022<span> ComfySloth </span></h5><h5>All rights reserved</h5>
            </footer>
        </>
    )
}