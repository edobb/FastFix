import React from 'react';
import {Link} from 'react-router-dom';
const SignupForm = ({
    handleChange,
    handleSubmit,
    user,
    errors
}) => {
    return (

        <form class="well form-horizontal" action="" method="post" id="signup_form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    <center>
                        <h2><b>Registration Form</b></h2>
                    </center>
                </legend><br />


                <div class="form-group">
                    <label class="col-md-4 control-label">First Name</label>
                    <div class="col-md-6 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input name="firstName" placeholder="First Name" class="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.firstName}
                            />
                        </div>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-4 control-label">Last Name</label>
                    <div class="col-md-6 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input name="lastName" placeholder="Last Name" class="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.lastName}

                            />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-4 control-label">Username</label>
                    <div class="col-md-6 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input name="username" placeholder="Username" class="form-control" type="text"
                                required
                                onChange={handleChange}
                                value={user.username}
                            />
                        </div>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-4 control-label">Password</label>
                    <div class="col-md-6 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input name="password" placeholder="Password" class="form-control" type="password"
                                required
                                onChange={handleChange}
                                value={user.password}
                            />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-4 control-label">Confirm Password</label>
                    <div class="col-md-6 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input name="confirmPassword" placeholder="Confirm Password" class="form-control" type="password"
                                required
                                onChange={handleChange}
                                value={user.confirmPassword}
                            />
                        </div>
                    </div>
                </div>

                {/* <div class="form-group">
                    <label class="col-md-4 control-label">E-Mail</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                            <input name="email" placeholder="E-Mail Address" class="form-control" type="text" />
                        </div>
                    </div>
                </div>
<<<<<<< HEAD


=======
>>>>>>> edobb-front-end
                <div class="form-group">
                    <label class="col-md-4 control-label">Contact No.</label>
                    <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                            <input name="contact_no" placeholder="(639)" class="form-control" type="text" />
                        </div>
                    </div>
                </div> */}

{/* 
                {signupSuccess &&
                
                <div class="alert alert-success" role="alert" id="success_message">
                    Success 
                    <i class="glyphicon glyphicon-thumbs-up"></i> Success!.
                </div>
                
                } */}
                <div class="alert alert-warning" role="alert" id="signup_message">
                    <Link to={'/login'}>Log in</Link>
                </div>   
                <div class="form-group">
                    <label class="col-md-4 control-label"></label>
                    <div class="col-md-4"><br />
                        <button type="submit" class="btn btn-warning">SUBMIT <span class="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>

            </fieldset>
        </form>
    )
}

export {SignupForm};