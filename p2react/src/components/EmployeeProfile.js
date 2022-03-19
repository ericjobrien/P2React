export default function EmployeeProfile() {
    return (
        <div className="employee-profile">
           <div className="employee-profile-left">
                <div className="employee-profile-left-top">
                    <div className="employee-profile-left-top-elements">
                        <div className="profile-image">
                            <img src ="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"/>
                        </div>
                    </div>
                    <div className="employee-profile-left-top-elements">
                    <h2>Employee Name Here</h2>
                    </div>
                </div>
                <div className="employee-profile-left-bottom">
                    <h3>Role Preferences</h3>
                    <div className="role-preferences-container">
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Role 1</p>
                                <a href="espn.com">Add a role</a>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Role 2</p>
                                <a href="espn.com">Add a role</a>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Role 3</p>
                                <a href="espn.com">Add a role</a>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div className="employee-profile-right">
                <div className="employee-information-title">
                    <h3>Employee Information</h3>
                </div>
                <div className="employee-information-container">
                    <div className="role-preferences-container">
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Employee Id</p>
                                <p>id</p>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Full Name</p>
                                <p>Name</p>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Email</p>
                                <p>Email</p>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Phone #</p>
                                <p>5364309</p>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Current Role</p>
                                <p>Role</p>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Start Date</p>
                                <p>Date</p>
                            </div>
                        </div>
                        <div className="add-role-preference-container">
                            <div className="role-preference-elements">
                                <p>Supervisor</p>
                                <p>Name of Supervisor</p>
                            </div>
                        </div>
                    </div>   
                </div>
                
           </div>
        </div>
    )
}