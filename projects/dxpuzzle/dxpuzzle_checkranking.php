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

	// query the database
	$sqlQuery = "SELECT id, username, score FROM ranking ORDER BY score ASC LIMIT 3";
	$result = $conn->query($sqlQuery);

	// check if any result returns
	if ($result -> num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	$output[] = $row;
	    }
	} else {
	    echo "0 results";
	}

	print(json_encode($output));

	// close the database
	$conn->close();
?>