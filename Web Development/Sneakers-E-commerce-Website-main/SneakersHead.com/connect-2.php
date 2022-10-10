<?php
    // Database connection
	$conn = new mysqli('localhost','root','','p1');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
	    $FirstName = $_POST['FirstName'];
	    $LastName = $_POST['LastName'];
	    $Address = $_POST['Address'];
	    $Contactnumber = $_POST['Contactnumber'];
	    $EmailAddress = $_POST['EmailAddress'];
        $Payment = $_POST['Payment'];
	    $Coupon = $_POST['Coupon'];

		$stmt = $conn->prepare("insert into ordershoes(FirstName, LastName, Address, Contactnumber, EmailAddress, Payment, Coupon) values(?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssisss", $FirstName, $LastName, $Address, $Contactnumber, $EmailAddress, $Payment, $Coupon);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successful...";
		$stmt->close();
		$conn->close();
	}
?>