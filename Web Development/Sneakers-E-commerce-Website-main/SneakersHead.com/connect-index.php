<?php
    // Database connection
	$conn = new mysqli('localhost','root','','p1');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
	    $Name = $_POST['Name'];
        $Email = $_POST['Email'];
	    $Contact = $_POST['Contact'];
        $Feed = $_POST['Feed'];

		$stmt = $conn->prepare("insert into feedback(Name, Email, Contact, Feed) values(?, ?, ?, ?)");
		$stmt->bind_param("siss", $Name, $Contact, $Email, $Feed);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successful...";
		$stmt->close();
		$conn->close();
	}
?>