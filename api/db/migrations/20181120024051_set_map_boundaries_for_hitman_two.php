<?php


use Phinx\Migration\AbstractMigration;

class SetMapBoundariesForHitmanTwo extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-148.125', 
              `map_center_longitude` = '164.875',
              `top_left_coordinate` = '-0.125,0.09375',
              `bottom_right_coordinate` = '-220.90625,307.40625' 
          WHERE `slug` = 'nightcall'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-139.5', 
              `map_center_longitude` = '147.5',
              `top_left_coordinate` = '-0.25,0.25',
              `bottom_right_coordinate` = '-314.25,281.09375' 
          WHERE `slug` = 'finish-line'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-158.75', 
              `map_center_longitude` = '177.875',
              `top_left_coordinate` = '-39.5625,35.84375',
              `bottom_right_coordinate` = '-241.5,301.375' 
          WHERE `slug` = 'three-headed-serpent'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-136.875', 
              `map_center_longitude` = '221.125',
              `top_left_coordinate` = '-35.875,0.75',
              `bottom_right_coordinate` = '-200.375,409.875' 
          WHERE `slug` = 'chasing-a-ghost'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-221', 
              `map_center_longitude` = '238.125',
              `top_left_coordinate` = '-1,0.5',
              `bottom_right_coordinate` = '-381.125,388.25' 
          WHERE `slug` = 'another-life'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-163.875', 
              `map_center_longitude` = '181.375',
              `top_left_coordinate` = '-0.5,0.5',
              `bottom_right_coordinate` = '-241.375,373.375' 
          WHERE `slug` = 'ark-society'");
    }

    public function down() {
    }
}
