<?php
    // Database connection
	$conn = new mysqli('localhost','root','','p1');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
	    $email = $_POST['email'];
        $password = $_POST['password'];

		$stmt = $conn->prepare("insert into login(email, password) values(?, ?)");
		$stmt->bind_param("ss", $email, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successful...";
		$stmt->close();
		$conn->close();
	}
?>