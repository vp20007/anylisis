<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActividadEconomicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('actividad_economicas')->insert([
            'id' => 1,
            'nombre' => 'Agricultura, ganadería, silvicultura y pesca',
            'descripcion' => 'Agricultura, ganadería, silvicultura y pesca',
            'sector_id' => 1
        ]);
        DB::table('actividad_economicas')->insert([
            'id' => 2,
            'nombre' => 'Turismo',
            'descripcion' => 'Turismo',
            'sector_id' => 3
        ]);
        DB::table('actividad_economicas')->insert([
            'id' => 3,
            'nombre' => 'Industria manufacturera',
            'descripcion' => 'Industria manufacturera',
            'sector_id' => 2
        ]);
    }
}
