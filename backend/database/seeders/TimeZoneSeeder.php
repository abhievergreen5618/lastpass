<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TimeZone;

class TimeZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $timezone = [
            ['timezone' => '(+04:30)','name' => 'Afghanistan'],
            ['timezone' => '(+01:00)','name' => 'Albania'],
            ['timezone' => '(+01:00)','name' => 'Algeria'],
            ['timezone' => '(+01:00)','name' => 'Andorra'],
            ['timezone' => '(+01:00)','name' => 'Angola'],
            ['timezone' => '(-04:00)','name' => 'Antigua and Barbuda'],
            ['timezone' => '(-03:00)','name' => 'Argentina'],
            ['timezone' => '(+04:00)','name' => 'Armenia'],
            ['timezone' => '(+10:00)','name' => 'Australia'],
            ['timezone' => '(+01:00)','name' => 'Austria'],
            ['timezone' => '(+04:00)','name' => 'Azerbaijan'],

            ['timezone' => '(-05:00)','name' => 'Bahamas'],
            ['timezone' => '(+03:00)','name' => 'Bahrain'],
            ['timezone' => '(+06:00)','name' => 'Bangladesh'],
            ['timezone' => '(-04:00)','name' => 'Barbados'],
            ['timezone' => '(+03:00)','name' => 'Belarus'],
            ['timezone' => '(+01:00)','name' => 'Belgium'],
            ['timezone' => '(-06:00)','name' => 'Belize'],
            ['timezone' => '(+01:00)','name' => 'Benin'],
            ['timezone' => '(+06:00)','name' => 'Bhutan'],
            ['timezone' => '(-04:00)','name' => 'Bolivia'],
            ['timezone' => '(+01:00)','name' => 'Bosnia and Herzegovina'],
            ['timezone' => '(+02:00)','name' => 'Botswana'],
            ['timezone' => '(-03:00)','name' => 'Brazil'],
            ['timezone' => '(+08:00)','name' => 'Brunei'],
            ['timezone' => '(+02:00)','name' => 'Bulgaria'],
            ['timezone' => '(+02:00)','name' => 'Burundi'],

            ['timezone' => '(+07:00)','name' => 'Cambodia'],
            ['timezone' => '(+01:00)','name' => 'Cameroon'],
            ['timezone' => '(-05:00)','name' => 'Canada'],
            ['timezone' => '(+01:00)','name' => 'Central African Republic'],
            ['timezone' => '(+01:00)','name' => 'Chad'],
            ['timezone' => '(-03:00)','name' => 'Chile'],
            ['timezone' => '(+08:00)','name' => 'China'],
            ['timezone' => '(-05:00)','name' => 'Colombia'],  
            ['timezone' => '(+03:00)','name' => 'Comoros'],
            ['timezone' => '(-06:00)','name' => 'Costa Rica'],
            ['timezone' => '(+01:00)','name' => 'Croatia'],
            ['timezone' => '(-05:00)','name' => 'Cuba'],
            ['timezone' => '(+02:00)','name' => 'Cyprus'],

            ['timezone' => '(+01:00)','name' => 'Denmark'],
            ['timezone' => '(+03:00)','name' => 'Djibouti'],
            ['timezone' => '(-04:00)','name' => 'Dominica'],
            ['timezone' => '(-04:00)','name' => 'Dominican Republic'],

            ['timezone' => '(-06:00)','name' => 'Ecuador'],
            ['timezone' => '(+02:00)','name' => 'Egypt'],
            ['timezone' => '(-06:00)','name' => 'El Salvador'],
            ['timezone' => '(+01:00)','name' => 'Equatorial Guinea'],
            ['timezone' => '(+03:00)','name' => 'Eritrea'],
            ['timezone' => '(+02:00)','name' => 'Estonia'],
            ['timezone' => '(+03:00)','name' => 'Ethiopia'],

            ['timezone' => '(+12:00)','name' => 'Fiji'],
            ['timezone' => '(+02:00)','name' => 'Finland'],
            ['timezone' => '(+01:00)','name' => 'France'],

            ['timezone' => '(+01:00)','name' => 'Gabon'],
            ['timezone' => '(+04:00)','name' => 'Georgia'],
            ['timezone' => '(+01:00)','name' => 'Germany'],
            ['timezone' => '(+02:00)','name' => 'Greece'],
            ['timezone' => '(-04:00)','name' => 'Grenada'],
            ['timezone' => '(-06:00)','name' => 'Guatemala'],
            ['timezone' => '(-04:00)','name' => 'Guyana'],

            ['timezone' => '(-05:00)','name' => 'Haiti'],
            ['timezone' => '(+01:00)','name' => 'Holy See'],
            ['timezone' => '(06:00)','name' => 'Honduras'],
            ['timezone' => '(+01:00)','name' => 'Hungary'],

            ['timezone' => '(+05:30)','name' => 'India'],
            ['timezone' => '(+07:00)','name' => 'Indonesia'],
            ['timezone' => '(+03:30)','name' => 'Iran'],
            ['timezone' => '(+03:00)','name' => 'Iraq'],
            ['timezone' => '(+02:00)','name' => 'Israel'],
            ['timezone' => '(+01:00)','name' => 'Italy'],

            ['timezone' => '(-05:00)','name' => 'Jamaica'],
            ['timezone' => '(+09:00)','name' => 'Japan'],
            ['timezone' => '(+03:00)','name' => 'Jordan'],

            ['timezone' => '(+06:00)','name' => 'Kazakhstan'],
            ['timezone' => '(+03:00)','name' => 'Kenya'],
            ['timezone' => '(+14:00)','name' => 'Kiribati'],
            ['timezone' => '(+09:00)','name' => 'Korea'],
            ['timezone' => '(+03:00)','name' => 'Kuwait'],
            ['timezone' => '(+06:00)','name' => 'Kyrgystan'],

            ['timezone' => '(+07:00)','name' => 'Laos'],
            ['timezone' => '(+02:00)','name' => 'Latvia'],
            ['timezone' => '(+02:00)','name' => 'Lebanon'],
            ['timezone' => '(+02:00)','name' => 'Lesotho'],
            ['timezone' => '(+02:00)','name' => 'Libya'],
            ['timezone' => '(+01:00)','name' => 'Liechtenstein'],
            ['timezone' => '(+02:00)','name' => 'Lithuania'],
            ['timezone' => '(+01:00)','name' => 'Luxembourg'],

            ['timezone' => '(+03:00)','name' => 'Madagascar'],
            ['timezone' => '(+02:00)','name' => 'Malawi'],
            ['timezone' => '(+08:00)','name' => 'Malaysia'],
            ['timezone' => '(+05:00)','name' => 'Maldives'],
            ['timezone' => '(+01:00)','name' => 'Malta'],
            ['timezone' => '(+12:00)','name' => 'Marshall Islands'],
            ['timezone' => '(+04:00)','name' => 'Mauritius'],
            ['timezone' => '(-06:00)','name' => 'Mexico'],
            ['timezone' => '(+10:00)','name' => 'Micronesia'],
            ['timezone' => '(+02:00)','name' => 'Moldova'],
            ['timezone' => '(+01:00)','name' => 'Monaco'],
            ['timezone' => '(+08:00)','name' => 'Mongolia'],
            ['timezone' => '(+01:00)','name' => 'Montenegro'],
            ['timezone' => '(+01:00)','name' => 'Morocco'],
            ['timezone' => '(+02:00)','name' => 'Mozambique'],

            ['timezone' => '(+02:00)','name' => 'Namibia'],
            ['timezone' => '(+12:00)','name' => 'Nauru'],
            ['timezone' => '(+05:00)','name' => 'Nepal'],
            ['timezone' => '(+01:00)','name' => 'Netherlands, The'],
            ['timezone' => '(+13:00)','name' => 'New Zealand'],
            ['timezone' => '(-06:00)','name' => 'Nicaragua'],
            ['timezone' => '(+01:00)','name' => 'Niger'],
            ['timezone' => '(+01:00)','name' => 'Nigeria'],
            ['timezone' => '(+01:00)','name' => 'Norway'],

            ['timezone' => '(+04:00)','name' => 'Oman'],

            ['timezone' => '(+05:00)','name' => 'Pakistan'],
            ['timezone' => '(+09:00)','name' => 'Palau'],
            ['timezone' => '(-05:00)','name' => 'Panama'],
            ['timezone' => '(+11:00)','name' => 'Papua New Guinea'],
            ['timezone' => '(-03:00)','name' => 'Paraguay'],
            ['timezone' => '(-05:00)','name' => 'Peru'],
            ['timezone' => '(+08:00)','name' => 'Philippines'],
            ['timezone' => '(+01:00)','name' => 'Poland'],

            ['timezone' => '(+03:00)','name' => 'Qatar'],

            ['timezone' => '(+02:00)','name' => 'Romania'],
            ['timezone' => '(+0302:00)','name' => 'Russia'],
            ['timezone' => '(+:00)','name' => 'Rwanda'],

            ['timezone' => '(-04:00)','name' => 'Saint Kitts and Nevis'],
            ['timezone' => '(-04:00)','name' => 'Saint Lucia'],
            ['timezone' => '(-04:00)','name' => 'Saint Vincent and the Grenadines'],
            ['timezone' => '(+13:00)','name' => 'Samoa'],
            ['timezone' => '(+01:00)','name' => 'San Marino'],
            ['timezone' => '(+03:00)','name' => 'Saudi Arabia'],
            ['timezone' => '(+01:00)','name' => 'Serbia'],
            ['timezone' => '(+04:00)','name' => 'Seychelles'],
            ['timezone' => '(+08:00)','name' => 'Singapore'],
            ['timezone' => '(+01:00)','name' => 'Slovakia'],
            ['timezone' => '(+01:00)','name' => 'Slovenia'],
            ['timezone' => '(+11:00)','name' => 'Solomon Islands, The'],
            ['timezone' => '(+03:00)','name' => 'Somalia'],
            ['timezone' => '(+02:00)','name' => 'South Africa'],
            ['timezone' => '(+02:00)','name' => 'South Sudan'],
            ['timezone' => '(+01:00)','name' => 'Spain'],
            ['timezone' => '(+05:00)','name' => 'Sri Lanka'],
            ['timezone' => '(+02:00)','name' => 'Sudan'],
            ['timezone' => '(-03:00)','name' => 'Suriname'],
            ['timezone' => '(+01:00)','name' => 'Sweden'],
            ['timezone' => '(+01:00)','name' => 'Switzerland'],
            ['timezone' => '(+03:00)','name' => 'Syria'],

            ['timezone' => '(+05:00)','name' => 'Tajikistan'],
            ['timezone' => '(+03:00)','name' => 'Tanzania'],
            ['timezone' => '(+07:00)','name' => 'Thailand'],
            ['timezone' => '(+09:00)','name' => 'Timor-Leste'],
            ['timezone' => '(+13:00)','name' => 'Tonga'],
            ['timezone' => '(-04:00)','name' => 'Trinidad and Tobago'],
            ['timezone' => '(+01:00)','name' => 'Tunisia'],
            ['timezone' => '(+03:00)','name' => 'Turkey'],
            ['timezone' => '(+05:00)','name' => 'Turkmenistan'],
            ['timezone' => '(+12:00)','name' => 'Tuvalu'],

            ['timezone' => '(+03:00)','name' => 'Uganda'],
            ['timezone' => '(+03:00)','name' => 'Ukraine'],
            ['timezone' => '(+04:00)','name' => 'United Arab Emirates, The'],
            ['timezone' => '(-03:00)','name' => 'Uruguay'],
            ['timezone' => '(+05:00)','name' => 'Uzbekistan'],

            ['timezone' => '(+11:00)','name' => 'Vanuatu'],
            ['timezone' => '(-04:00)','name' => 'Venezuela'],
            ['timezone' => '(+07:00)','name' => 'Vietnam'],

            ['timezone' => '(+03:00)','name' => 'Yemen'],
            ['timezone' => '(+02:00)','name' => 'Zambia'],
            ['timezone' => '(+02:00)','name' => 'Zimbabwe'],
        ];

        TimeZone::insert($timezone);
    }
}
