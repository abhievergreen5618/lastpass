<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Month;

class MonthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $month = [
            ['monthid' => '01','monthname' => 'January'],
            ['monthid' => '02','monthname' => 'Februaury'],
            ['monthid' => '03','monthname' => 'March'],
            ['monthid' => '04','monthname' => 'April'],
            ['monthid' => '05','monthname' => 'May'],
            ['monthid' => '06','monthname' => 'June'],
            ['monthid' => '07','monthname' => 'July'],
            ['monthid' => '08','monthname' => 'August'],
            ['monthid' => '09','monthname' => 'September'],
            ['monthid' => '10','monthname' => 'October'],
            ['monthid' => '11','monthname' => 'November'],
            ['monthid' => '12','monthname' => 'December'],
        ];

        Month::insert($month);
    }
}
