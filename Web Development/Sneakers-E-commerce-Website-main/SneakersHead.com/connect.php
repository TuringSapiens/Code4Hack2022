<?php
    // Database connection
	$conn = new mysqli('localhost','root','','web1');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
	    $FirstName = $_POST['FirstName'];
	    $LastName = $_POST['LastName'];
	    $SneakerType = $_POST['SneakerType'];
	    $Contactnumber = $_POST['Contactnumber'];
	    $EmailAddress = $_POST['EmailAddress'];
        $DesignStyle = $_POST['DesignStyle'];
	    $Time = $_POST['Time'];

		$stmt = $conn->prepare("insert into customn(FirstName, LastName, SneakerType, Contactnumber, EmailAddress, DesignStyle, Time) values(?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssissi", $FirstName, $LastName, $SneakerType, $Contactnumber, $EmailAddress, $DesignStyle, $Time);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successful...";
		$stmt->close();
		$conn->close();
	}
?>