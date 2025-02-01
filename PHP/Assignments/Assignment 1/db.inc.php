<?php
  class Database{
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $db = 'assignment_1';
    protected $connection;


    public function __construct(){
      if(!isset($this->connection)){
        $this->connection = new mysqli($this->host, $this->username, $this->password, $this->db);
        if($this->connection->connect_error){
          die('Cannot connect to database server');
          exit();
        }
        else{
          echo '<p>Connection established</p>';
        }
      }
      // return $this->connection;
    }
  }

?>

<!--val-idation Strings: !preg_match("/^[a-zA-Z]*$/", $F_name) where if true, shoots an error because of the negation-->