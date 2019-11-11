
        <header>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <div class="container con1 col-lg-8">
                    <h1 id="h1"><img src="./src/images/bugLogo.png" class="logo"
                        alt="logo"> Bug Tracker</h1>
                <div class="form-group">
                    <label for="Email1" id="credentialText">Email address</label>
                    <input type="email" class="form-control required"
                        id="InputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email" name="mailuid">
                    <small id="emailHelp" class="form-text text-muted">We'll
                        never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="inputPassword" id="credentialText">Password</label>
                    <input type="password" class="required form-control"
                        id="inputPassword" placeholder="Password" name="pwd">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input"
                        id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">I confirm, I am not a robot.</label>
                </div>
                <button type="submit" id="button" name="login/submit" class="btn btn-primary">Log in</button>
                <a href="signup.php"><button action="signup.php" type="register" id="button"name="register" class="btn btn-primary">Register</button></a>
            </form>

            <!-- <form action="includes/logout.inc.php" method="post">
            <button type="submit" id="button" name="logout" class="btn btn-primary">Log out</button>
            </form> -->
        </header>