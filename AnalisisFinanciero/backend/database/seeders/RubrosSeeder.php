<?php

namespace Database\Seeders;

use App\Models\Rubros;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RubrosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rubros')->insert([
            'codigo' => 1,
            'nombre' => 'Activos',
        ]);
        DB::table('rubros')->insert([
            'codigo' => 2,
            'nombre' => 'Pasivos',
        ]);
    }
}
