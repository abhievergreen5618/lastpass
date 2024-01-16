<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Year;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $years = [
            ['year' => '2024'],
            ['year' => '2025'],
            ['year' => '2026'],
            ['year' => '2027'],
            ['year' => '2028'],
            ['year' => '2029'],
            ['year' => '2030'],
            ['year' => '2031'],
            ['year' => '2032'],
            ['year' => '2033'],
            ['year' => '2034'],
            ['year' => '2035'],
            ['year' => '2036'],
            ['year' => '2037'],
            ['year' => '2038'],
            ['year' => '2039'],
            ['year' => '2040'],
            ['year' => '2041'],
            ['year' => '2042'],
            ['year' => '2043'],
            ['year' => '2044'],
        ];

        Year::insert($years);
    }
}
