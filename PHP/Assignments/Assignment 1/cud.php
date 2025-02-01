<?php  
require_once ('db.inc.php');
class cud extends Database{

    public function __construct(){
        parent::__construct();
        
    }

    public function execute($query){
        $result = $this->connection->query($query);
        if ($result == false) {
            echo '<p>Error: cannot execute the command</p>';
            return false;
        } else {
            return true;
        }
    }

    public function sanitize($value){
        return $this->connection->real_escape_string($value);
    }
}

?>
