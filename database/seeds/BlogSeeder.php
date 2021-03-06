<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blogs')->insert([
            'id' => Uuid::uuid4()->toString(),
            'title' => 'Seorang bocah di garut membutuhkan pertolongan anda',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt dolor, sed malesuada ex. Praesent hendrerit tortor fringilla est porta luctus luctus eget elit. Pellentesque eu eros quis neque auctor ornare id sit amet ligula. Etiam eget odio id risus ornare posuere. Mauris finibus orci ultricies velit feugiat feugiat. Fusce sed ligula accumsan, consequat neque quis, pulvinar nunc. Proin lorem dui, euismod sed ligula id, fermentum pretium lacus. Curabitur laoreet vestibulum nulla eu placerat. Donec ornare justo sit amet semper pellentesque',
            'image' => 'photos/blogs/' . Uuid::uuid4()->toString() . '.jpg',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('blogs')->insert([
            'id' => Uuid::uuid4()->toString(),
            'title' => 'Trend crowdfunding meningkat di tahun 2021',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt dolor, sed malesuada ex. Praesent hendrerit tortor fringilla est porta luctus luctus eget elit. Pellentesque eu eros quis neque auctor ornare id sit amet ligula. Etiam eget odio id risus ornare posuere. Mauris finibus orci ultricies velit feugiat feugiat. Fusce sed ligula accumsan, consequat neque quis, pulvinar nunc. Proin lorem dui, euismod sed ligula id, fermentum pretium lacus. Curabitur laoreet vestibulum nulla eu placerat. Donec ornare justo sit amet semper pellentesque',
            'image' => 'photos/blogs/' . Uuid::uuid4()->toString() . '.jpg',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
