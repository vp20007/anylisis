<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmpresasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sectores')->insert([
            'id' => 1,
            'nombre' => 'Primario',
            'descripcion' => 'Sector primario'
        ]);
        DB::table('sectores')->insert([
            'id' => 2,
            'nombre' => 'Secundario',
            'descripcion' => 'Sector secundario',
        ]);
        DB::table('sectores')->insert([
            'id' => 3,
            'nombre' => 'Terciario',
            'descripcion' => 'Sector terciario',
        ]);
    }
}
