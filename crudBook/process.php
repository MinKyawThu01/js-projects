<?php
include('connect.php');
if (isset($_POST["create"])) {
    $title = mysqli_real_escape_string($con, $_POST["title"]);
    $type = mysqli_real_escape_string($con, $_POST["type"]);
    $author = mysqli_real_escape_string($con, $_POST["author"]);
    $description = mysqli_real_escape_string($con, $_POST["description"]);
    $sqlInsert = "INSERT INTO books(title, author, type, description) VALUE ('$title', '$author', '$type', '$description')";
    if(mysqli_query($con, $sqlInsert)){
        session_start();
        $_SESSION["create"] = "Book Added Successfully!";
        header('location:index.php');
    }else{
        die("Something went wrong.");
    }
}

if(isset($_POST["edit"])){
    $title = mysqli_real_escape_string($con, $_POST["title"]);
    $type = mysqli_real_escape_string($con, $_POST["type"]);
    $author = mysqli_real_escape_string($con, $_POST["author"]);
    $description = mysqli_real_escape_string($con, $_POST["description"]);
    $id = mysqli_real_escape_string($con, $_POST["id"]);
    $sqlUpdate = "UPDATE books SET title = '$title', type ='$type', author = '$author', description = '$description' WHERE id = '$id'";
    if(mysqli_query($con, $sqlUpdate)){
        session_start();
        $_SESSION["update"] = "Book Update Successfully!";
        header("location:index.php");
    }else{
        die("Something went wrong.");
    }
}
?>