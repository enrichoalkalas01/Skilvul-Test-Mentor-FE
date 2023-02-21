import { Link } from "react-router-dom";

function Homepages() {
    return(
        <>
            <section id="homepages">
                <div className="text-box">
                    <h1>Welcome To Our Giphy</h1>
                </div>
                <div className="images-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Giphy-logo.svg" alt="logo-giphy" />
                </div>
                <div className="link-box">
                    <Link to={ '/detail/iron-man' }>IRON MAN GIPHY</Link>
                    <Link to={ '/search' }>SEARCH YOUR GIPHY</Link>
                </div>
            </section>
        </>
    )
}

export default Homepages