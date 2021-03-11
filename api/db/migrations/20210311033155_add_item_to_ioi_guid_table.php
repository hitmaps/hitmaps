<?php
declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class AddItemToIoiGuidTable extends AbstractMigration {
    public function change(): void {
        $this->table('item_to_ioi_guid')
            ->addColumn('item_name', 'string')
            ->addColumn('ioi_guid', 'string')
            ->create();

        $rows = [
            ['item_name' => "Battle Axe", 'ioi_guid' => '58dceb1c-d7db-41dc-9750-55e3ab87fdf0'],
            ['item_name' => "Cleaver", 'ioi_guid' => '1bbf0ed5-0515-4599-a4c9-454ce59cff44'],
            ['item_name' => "Fire Axe", 'ioi_guid' => 'a8bc4325-718e-45ba-b0e4-000729c70ce4'],
            ['item_name' => "Hatchet", 'ioi_guid' => '3a8207bb-84f5-438f-8f30-5c83aef2af80'],
            ['item_name' => "Kitchen Knife", 'ioi_guid' => 'e17172cc-bf70-4df6-9828-d9856b1a24fd'],
            ['item_name' => "Letter Opener", 'ioi_guid' => 'f1f89faf-a441-4492-b442-9a923b5ecfd1'],
            ['item_name' => "Saber", 'ioi_guid' => '94f52181-b9ec-4363-baef-d53b4e424b74'],
            ['item_name' => "Scissors", 'ioi_guid' => '6ecf1f15-453c-4783-9c70-8777c83934d7'],
            ['item_name' => "Screwdriver", 'ioi_guid' => '12cb6b51-a6dd-4bf5-9653-0ab727820cac'],
            ['item_name' => "Amputation Knife", 'ioi_guid' => '62c2ac2e-329e-4648-822a-e45a29a93cd0'],
            ['item_name' => "Circumcision Knife", 'ioi_guid' => 'e312a416-5b56-4cb5-8994-1d4bc82fbb84'],
            ['item_name' => "Combat Knife", 'ioi_guid' => '2c037ef5-a01b-4532-8216-1d535193a837'],
            ['item_name' => "Folding Knife", 'ioi_guid' => 'a2c56798-026f-4d0b-9480-de0d2525a119'],
            ['item_name' => "Katana", 'ioi_guid' => '5631dace-7f4a-4df8-8e97-b47373b815ff'],
            ['item_name' => "Old Axe", 'ioi_guid' => '369c68f7-cbef-4e45-83c7-8acd0dc2d237'],
            ['item_name' => "Sapper's Axe", 'ioi_guid' => 'd2a7fa04-2cac-45d8-b696-47c566bb95ff'],
            ['item_name' => "Scalpel", 'ioi_guid' => '5d8ca32a-fe4c-4597-b074-51e36c3de898'],
            ['item_name' => "Shuriken", 'ioi_guid' => 'e55eb9a4-e79c-43c7-970b-79e94e7683b7'],
            ['item_name' => "Starfish", 'ioi_guid' => 'cad726d7-331d-4601-9723-6b8a17e5f91b'],
            ['item_name' => "Barber Razor", 'ioi_guid' => '5ce2f842-e091-4ead-a51c-1cc406309c8d'],
            ['item_name' => "Machete", 'ioi_guid' => '3e3819ca-4d19-4e0a-a238-4bd16c730e61'],
            ['item_name' => "Sacrificial Knife", 'ioi_guid' => 'b2321154-4520-4911-9d94-9256b85e0983'],
            ['item_name' => "Beak Staff", 'ioi_guid' => 'b153112f-9cd1-4a49-a9c6-ba1a34f443ab'],
            ['item_name' => "Broadsword", 'ioi_guid' => '12200bd8-9605-4111-8b26-4e73cb07d816'],
            ['item_name' => "Viking Axe", 'ioi_guid' => '9a7711c7-ede9-4230-853e-ab94c65fc0c9'],
            ['item_name' => "Antique Curved Knife", 'ioi_guid' => '5c211971-235a-4856-9eea-fe890940f63a'],
            ['item_name' => "Burial Dagger", 'ioi_guid' => '6d4c88f3-9a09-453c-9a6e-a081f1136bf3'],
            ['item_name' => "Hobby Knife", 'ioi_guid' => '9e728dc1-3344-4615-be7a-1bcbdd7ad4aa'],
            ['item_name' => "Tanto", 'ioi_guid' => '9488fa1e-10e1-49c9-bb24-6635d2e5bd49'],
            ['item_name' => "Jarl's Pirate Saber", 'ioi_guid' => 'fba6e133-78d1-4af1-8450-1ff30466c553'],
            ['item_name' => "Seashell", 'ioi_guid' => '7bc45270-83fe-4cf6-ad10-7d1b0cf3a3fd'],
            ['item_name' => "Ornate Scimitar", 'ioi_guid' => 'b4d4ed1a-0687-48a9-a731-0e3b99494eb6'],
            ['item_name' => "Shears", 'ioi_guid' => '42c7bb52-a71b-489c-8a74-7db0c09ba313'],
            ['item_name' => "Garden Fork", 'ioi_guid' => '1a105af8-fd30-447f-8b2c-f908f702e81c'],
            ['item_name' => "Unicorn Horn", 'ioi_guid' => '58769c58-3e70-4746-be8e-4c7114f8c2bb'],
            ['item_name' => "Scrap Sword", 'ioi_guid' => 'd73251b4-4860-4b5b-8376-7c9cf2a054a2'],
            ['item_name' => "Grape Knife", 'ioi_guid' => '2b1bd2af-554e-4ea7-a717-3f6d0eb0215f'],
            ['item_name' => "Icicle", 'ioi_guid' => 'd689f87e-c3b1-4018-8e78-2f0025cde2a9']
        ];

        $this->table('item_to_ioi_guid')->insert($rows)->save();
    }
}
