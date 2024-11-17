<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RazonesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('razon_financieras')->insert([
           'id' => 1,
            'nombre' => 'Rotación de inventario',
         ]);
        DB::table('ratios')->insert([
            'id' => 1,
           'nombre' => 'Rotación de inventario',
           'razonFinancieras_id' => 1
         ]);
        DB::table('ratio_empresas')->insert([
            'id' => 1,
          'anio_referencia' => 2020,
          'valor_ratio_empresas' => 0.5,
          'ratios_id' => 1,
           'empresas_id' => 1
         ]);
          DB::table('ratio_sectores')->insert([
              'parametro_comparacion' => 0.9,
              'actividad_economicas_id' => 1,
              'ratios_id' => 1,
          ]);
    }
}
