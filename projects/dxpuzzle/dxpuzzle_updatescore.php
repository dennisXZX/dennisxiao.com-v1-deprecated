<?php

	$servername = "localhost";
	$username = "root";
	$password = "MnbI7eO5eC";
	$dbname = "dxpuzzle";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	// store the values from Android application
	$username = $_POST['username'];
	$score = $_POST['score'];

	// create an insert SQL statement
	$recordInsert = "INSERT INTO ranking (username, score) VALUES ('$username', '$score')";

	if ($conn->query($recordInsert) === TRUE) {
    	echo "New record created successfully";
	} else {
	    echo "Error: " . $recordInsert . "<br>" . $conn->error;
	}

	// close the database
	$conn->close();

?>