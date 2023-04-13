import { Link } from "react-router-dom";

function HomePage() {
    return (<div className="HomePage">
            <h1>Welcome to <span className="Capitalize">Task 3000</span></h1>
            <p>Your task manager app that is here to make life easier for <b>you !</b></p>
            <Link to="/dashboard">
                <button type="Submit">Get Started</button>
            </Link>
        </div>
    );
}

export default HomePage;