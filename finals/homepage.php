<?php
session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="pragma" content="no-cache" />
    <title>Bread</title>
    <link rel="icon" type="image/png" href="images/bread.png">

    <!-- css -->
    <link rel="stylesheet" href="design.css">

    <!-- js -->
    <script src="jquery-3.7.1.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <!-- fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Monda:wght@700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Germania+One&display=swap" rel="stylesheet">
</head>

<body>
    <header style="background-color: #3C3633;">

      <!-- dropdown content -->
      <nav id="dropdown">
        <div id="dropdown-content" class="dropdown-content">
          <?php
          if (isset($_SESSION['email'])) {
            echo '<a href="#profile" onclick="closeDropdown(); showSection(\'profile\');">Profile</a>';
          } else {
            echo '<a href="#loginRegister" onclick="closeDropdown(); showSection(\'loginRegister\')">Login/Register</a>';
          }
          ?>
          <a href="#products" onclick="closeDropdown(); showSection('products')">Products</a>
          <a href="#contactus" onclick="closeDropdown(); showSection('contactus')">Contact Us</a>
          <a href="#aboutus" onclick="closeDropdown(); showSection('aboutus')"; >About Us</a>
        </div>
      </nav>
    
      <div class="topnav">
        <div class="dropdown-button">
          <a href="#" onclick="toggleDropdown()">☰</a>
        </div>
    
        <div class="logo">
          <a href="#mainpage" onclick="showSection('mainpage')">Bread👍</a>
        </div>
    
        <div class="cart">
          <a href="#checkout" onclick="showSection('checkout')"><img src="images/shopping-cart.png" alt="cart"></a>
        </div>
      </div>

    </header>

  <!-- content -->
  <div class="content">
  
  <!-- main page -->
  <section id="mainpage">
    <div class="product" id="prod1">
      <img src="images/pandesal.jpg" alt="pandesal">
      <h3>Pandesal</h3>
      <p>Price per piece : ₱5.00</p>
      <p>Quantity:</p>
        <div class="input-group">
          <button class="minus btn">-</button>
          <input type="number" class="qty" name="qty" min="0" value="0">
          <button class="plus btn">+</button>
      </div>
        <button class="addToCart" onclick="addToCart('Pandesal', 5.00, 1)">Add to Cart</button>
    </div>

    <div class="product" id="prod2">
      <img src="images/panderegla.jpg" alt="panderegla">
      <h3>Pan de Regla</h3>
      <p>Price per piece : ₱25.00</p>
      <p>Quantity:</p>
        <div class="input-group">
          <button class="minus btn">-</button>
          <input type="number" class="qty" name="qty" min="0" value="0">
          <button class="plus btn">+</button>
      </div>
        <button class="addToCart" onclick="addToCart('Pan de Regla', 25.00, 1)">Add to Cart</button>
    </div>

    <div class="product" id="prod3">
      <img src="images/ensaymada.jpg" alt="ensaymada">
      <h3>Ensaymada</h3>
      <p>Price per piece : ₱75.00</p>
      <p>Quantity:</p>
        <div class="input-group">
          <button class="minus btn">-</button>
          <input type="number" class="qty" name="qty" min="0" value="0">
          <button class="plus btn">+</button>
      </div>
        <button class="addToCart" onclick="addToCart('Ensaymada', 75.00, 1)">Add to Cart</button>
    </div>

    <div class="product" id="prod4">
      <img src="images/spanishbread.jpg" alt="spanishbread">
      <h3>Spanish Bread</h3>
      <p>Price per piece : ₱8.00</p>
      <p>Quantity:</p>
        <div class="input-group">
          <button class="minus btn">-</button>
          <input type="number" class="qty" name="qty" min="0" value="0">
          <button class="plus btn">+</button>
      </div>
        <button class="addToCart" onclick="addToCart('Spanish Bread', 8.00, 1)">Add to Cart</button>
    </div>

    <div class="product" id="prod5">
      <img src="images/tasty.jpg" alt="tasty">
      <h3>Tasty</h3>
      <p>Price per loaf : ₱70.00</p>
      <p>Quantity:</p>
        <div class="input-group">
          <button class="minus btn">-</button>
          <input type="number" class="qty" name="qty" min="0" value="0">
          <button class="plus btn">+</button>
      </div>
        <button class="addToCart" onclick="addToCart('Tasty', 70.00, 1)">Add to Cart</button>
    </div>

    <div class="product" id="prod6">
      <img src="images/kababayan.jpg" alt="kababayan">
      <h3>Kababayan</h3>
      <p>Price per piece : ₱10.00</p>
      <p>Quantity:</p>
        <div class="input-group">
          <button class="minus btn">-</button>
          <input type="number" class="qty" name="qty" min="0" value="0">
          <button class="plus btn">+</button>
      </div>
        <button class="addToCart" onclick="addToCart('Kababayan', 10.00, 1)">Add to Cart</button>
    </div>

    <div class="product" id="prod7">
      <img src="images/monay.jpg" alt="monay">
      <h3>Kababayan</h3>
      <p>Price per piece : ₱10.00</p>
      <p>Quantity:</p>
        <div class="input-group">
          <button class="minus btn">-</button>
          <input type="number" class="qty" name="qty" min="0" value="0">
          <button class="plus btn">+</button>
      </div>
        <button class="addToCart" onclick="addToCart('Monay', 5.00, 1)">Add to Cart</button>
    </div>
  </section>

  <section id="checkout">

  </section>

  <!-- Login/Register -->
  <section id="loginRegister">
            <div id="login-form">
              <form  action="serverside/login.php" method="post">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" name="password" required>
                </div>
                <div class="inq">Don't have an account? 
                  <a href="#register-form" onclick="toggleRegister()">Create One</a>
                  </div>
                  <button type="submit" name="submit" value="submit">Login</button>
              </form>
            </div>
            <div id="register-form" class="register-form">
              <form action="serverside/register.php" method="post">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="register-email" name="register-email" required>
                  <div id="emailHelp">Must be a valid email address.</div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="register-password" name="register-password" required>
                  <div id="passwordHelp">Must be at least 8 characters, including uppercase, lowercase, a number, and a special character.</div>
                </div>
                <div class="inq">Already have an account?
                <a href="#login-form" onclick="toggleLogin()">Login</a>
                </div>
                <button type="submit" name="submit" value="submit">Register</button>
              </form>
            </div>
  </section>

  <!-- Profile -->
  <section id="profile">
    <div class="options">
      <a href="#account-details" onclick="showSectionVisible('account-details')">Account Information</a>
      <a href="serverside/logout.php" onclick="showSection('mainpage')">Sign Out</a>
    </div>
  </section>

  <section id="account-details" style = "display: none">
    <div class="opt">
      <h3>Account Information</h3>
      <p>Email: <?php echo $_SESSION['email']; ?></p>
      <button class="changepass" onclick="showSectionVisible('change-pass')">Change Password</button><br>
          <section id="change-pass">
          <div id="login-form">
              <form action="serverside/change_password.php" method="post">
                <div class="form-group">
                  <label for="password">Old Password:</label>
                  <input type="password" class="form-control" id="old-password" name="old-password" required>
                </div>
                <div class="form-group">
                  <label for="password">New Password:</label>
                  <input type="password" class="form-control" id="new-password" name="new-password" required>
                </div>
                <div class="form-group">
                  <label for="password">Confirm New Password:</label>
                  <input type="password" class="form-control" id="confirm-password" name="confirm-password" required>
                </div>
                  <button type="submit" name="submit" value="submit">Submit</button>
              </form>
            </div>
          </section>
      <p>WARNING: IF YOU CLICK THIS BUTTON, YOU WILL NOT BE ABLE TO RECOVER YOUR ACCOUNT.</p>
      <button class="delete-account" onclick="showSectionVisible('deleteaccount')">Delete Account</button>
      <section id="deleteaccount">
      <h1>Delete Account</h1>
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      <form action="serverside/delete_account.php" method="post">
        <button type="submit" name="confirm-delete">Confirm Delete</button>
      </form>
      </section>
    </div>
  </section>

  <!-- About Us -->
  <section id="aboutus">
    <h2>About Us</h2>
    <p>Welcome to Bread👍, a family-owned bakery that specializes in breads that are popular among Filipinos. The name of the business “Bread👍” was coined on tiktok that focuses on bread or what we call “breadtiktok”. People will usually comment that under the bread loaf cutting videos.</p>
    <p>We opened our doors in January 2024 with a passion for sharing our culture and heritage and to bring nostalgia through our baked goods. Bread has been a staple in Filipinos’ lives other than rice throughout history. From the farmers to the office workers and in a household, bread can be consumed as a treat and also as a staple for the morning before starting the day.</p>
    <p>And so, it became our mission to offer fresh, delicious, and affordable breads that cater to the diverse tastes and preferences of our customers. It is also our goal to be able to deliver these fresh delicious breads in the Philippines nationwide. Rest assured that it will be kept in a special container upon delivery and will arrive at your doorstep like it just came out from the oven.</p>
  </section>

  <!-- Contact Us -->
  <section id="contactus">
      <h2>Contact Us</h2>
      <div class="address">
        <h3>Address:</h3>
        <p>1234, Kamuning, Quezon City</p>
      </div>

      <div class="contnum">
        <h3>Landline:</h3>
        <p>9-9000</p>
        <h3>Phone number:</h3>
        <p>+63998795623136</p>
      </div>

      <div class="emailadd">
        <h3>Email:</h3>
        <p>breadcustomersupport@bread.com.ph</p>

        <h3>For business inquiries:</h3>
        <p>breadbusiness@bread.com.ph</p>
      </div>
  </section>

  <!-- Product Description -->
  <section id="products">
    <h2>Product List</h2><br>

    <div class="display">
      <img src="images/pandesal.jpg" alt="pandesal">
      <h3>Pandesal</h3>
      <p>A most popular style of bread among Filipinos.</p>
      <p>It is known for its <i>pillowy texture</i> and <i>signature breadcrumbs</i> on top.</p>
    </div>

    <div class="display">
      <img src="images/panderegla.jpg" alt="panderegla">
      <h3>Pan de Regla</h3>
      <h4>Also known as <i>Kalihim</i></h4>
      <p>It is as pretty as it is tasty.</p>
      <p>Soft and delicious with a <i>sweet, bright-red pudding filling</i>, this bread, makes a great breakfast or snack treat.</p>
    </div>

      <div class="display">
        <img src="images/ensaymada.jpg" alt="ensaymada">
        <h3>Ensaymada</h3>
        <h4>Also spelled as <i>ensaimada or ensemada</i></h4>
        <p>It is a <i>soft, fluffy pastry</i> topped with <i>white sugar</i> and usually finely <i>grated cheese</i>.</p>
        <p>This bread is usually paired with a strong black coffee.☕</p>
      </div>

      <div class="display">
        <img src="images/spanishbread.jpg" alt="spanishbread">
        <h3>Spanish Bread</h3>
        <p>It is a <i>yeasted bread</i> that is <i>rolled into a log</i> enclosing within a <i>sugary and buttery filling</i>. They are then rolled in breadcrumbs before baking.</p>
        <p>It is normally enjoyed as an afternoon snack.</p>
      </div>

      <div class="display">
        <img src="images/tasty.jpg" alt="tasty">
        <h3>Tasty</h3>
        <p>The Filipino style <i>sliced bread</i>.</p>
        <p>It is simply a sliced loaf bread in the Philippines.</p>
      </div>

      <div class="display">
        <img src="images/kababayan.jpg" alt="kababayan">
        <h3>Kababayan</h3>
        <p>The Filipino style <i>sliced bread</i>.</p>
        <p>It is a <i>sweet muffin</i> known for its <i>golden brown exterior</i> and distinct <i>domed top shape</i>.</p>
      </div>

      <div class="display">
        <img src="images/monay.jpg" alt="monay">
        <h3>Monay</h3>
        <h4>The local adaptation of the Spanish <i>Pan de Monja</i>, which translates to <i>nun's bread</i>.</h4>
        <h4>Also known as the <i>"Mother of all Filipino bread"</i></h4>
        <p>It's a slightly <i>sweet, heavy, and dense bun</i> with a deep partition in the center, creating two cheeks.</p>
      </div>

  </section>

  <script src="action.js"></script>
</body>
</html>