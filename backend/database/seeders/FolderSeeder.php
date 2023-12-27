<?php

namespace Database\Seeders;

use App\Models\Folders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FolderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Folders::insert([
            ['folder_name' => 'uncategorized']
        ]);
    }
}
