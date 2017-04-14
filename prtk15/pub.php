<?php

$vald=strtotime($_POST["gd"]);
if ($vald==699318000){
    die("Датта введена не верно");
} else echo "Дата ведена верно";
 ?>