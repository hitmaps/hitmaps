<?php


use Phinx\Migration\AbstractMigration;

class SetMapBoundariesForHitman extends AbstractMigration {
    public function up() {
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-95.125', 
              `map_center_longitude` = '107.25',
              `top_left_coordinate` = '-0.0625,0.0625',
              `bottom_right_coordinate` = '-136.625,187.375' 
          WHERE `slug` = 'freeform-training'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-92.875', 
              `map_center_longitude` = '93.125',
              `top_left_coordinate` = '.3125,-.125',
              `bottom_right_coordinate` = '-186.625,187.25' 
          WHERE `slug` = 'the-final-test'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-99.625', 
              `map_center_longitude` = '152.25',
              `top_left_coordinate` = '-0.25,.25',
              `bottom_right_coordinate` = '-191.625,249.625' 
          WHERE `slug` = 'the-showstopper'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-106.5', 
              `map_center_longitude` = '107.125',
              `top_left_coordinate` = '-0.375,0.25',
              `bottom_right_coordinate` = '-184.125,187.125' 
          WHERE `map_folder_name` = 'sapienza'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-104.875', 
              `map_center_longitude` = '107.875',
              `top_left_coordinate` = '-0.25,0.375',
              `bottom_right_coordinate` = '-169.625,195.625' 
          WHERE `map_folder_name` = 'marrakesh'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-90.875', 
              `map_center_longitude` = '126.375',
              `top_left_coordinate` = '-23,0.25',
              `bottom_right_coordinate` = '-170.625,203.125' 
          WHERE `map_folder_name` = 'bangkok'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-103.875', 
              `map_center_longitude` = '128.375',
              `top_left_coordinate` = '-23.25,0.25',
              `bottom_right_coordinate` = '-187.25,187.25' 
          WHERE `map_folder_name` = 'colorado'");
        $this->execute("UPDATE `missions` 
          SET `map_center_latitude` = '-79.375', 
              `map_center_longitude` = '93.875',
              `top_left_coordinate` = '-27.875,0.375',
              `bottom_right_coordinate` = '-135.75,156.125' 
          WHERE `map_folder_name` = 'hokkaido'");
    }

    public function down() {
    }
}
