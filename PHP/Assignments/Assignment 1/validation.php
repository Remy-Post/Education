<?php
    class Validate{


        public function VcheckEmpty($data, $fields){
            $msg = null;
            foreach ($fields as $value) {
                if(empty($data[$value])){
                    $msg .= "<p>$value field is empty</p>";
                }
            }
            return $msg;
        }

        public function Vint($data){
            if(preg_match("/^[0-9]*$/", $data)){
                return true;
            }
            return false;
        }

        public function VE_mail($data){
            if(filter_var($data, FILTER_VALIDATE_EMAIL)){
                return true;
            }
            return false;
        }


    }

?>