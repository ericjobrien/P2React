export default function LandingPage() {
    return (
        <div className="landing-page">
            <h1 className="company-title">Maxtermind Inc</h1>
            <div className="landing-page-button-container">
                <button className="landing-page-button">Admin Login</button>
                <hr className="horizontal-break"/>
                <button className="landing-page-button">Emplyoee Login</button>
            </div>
            <p className="terms">Terms of use    |    Privacy Policy</p>
        </div>
    );
}