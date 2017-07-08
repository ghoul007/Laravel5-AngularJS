<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'name' => 'Ahmed GHOUL',
            'email' => 'ghoul.ahmed5@gmail.com',
            'password' => \Hash::make('ghoul'),
        ]);
    }
}
