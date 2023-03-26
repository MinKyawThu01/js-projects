<?php 
if(isset($_GET['id'])){
    include("connect.php");
    $id = $_GET['id'];
    $sql = "DELETE FROM books WHERE id='$id'";
    if(mysqli_query($con, $sql)){
        session_start();
        $_SESSION['delete'] = "Book Delete Successfully!";
        header('location:index.php');
    }else{
        die("Something went wrong");
    }
    }else{
        echo "<h2> Book does not exits</h2>";
    }
?>