<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TiposCuentaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipos_cuentas')->insert([
            'codigo' => 1,
            'tipoCuenta' => 'Activo Circulante',
        ]);
        DB::table('tipos_cuentas')->insert([
            'codigo' => 2,
            'tipoCuenta' => 'Activo Fijo',
        ]);
    }
}
