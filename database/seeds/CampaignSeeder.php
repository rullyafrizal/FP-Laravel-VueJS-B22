<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class CampaignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('campaigns')->insert([
            'id' => Uuid::uuid4()->toString(),
            'title' => 'Bantu Korban Bencana Kalimantan',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt dolor, sed malesuada ex. Praesent hendrerit tortor fringilla est porta luctus luctus eget elit. Pellentesque eu eros quis neque auctor ornare id sit amet ligula. Etiam eget odio id risus ornare posuere. Mauris finibus orci ultricies velit feugiat feugiat. Fusce sed ligula accumsan, consequat neque quis, pulvinar nunc. Proin lorem dui, euismod sed ligula id, fermentum pretium lacus. Curabitur laoreet vestibulum nulla eu placerat. Donec ornare justo sit amet semper pellentesque',
            'address' => 'Jl. Merdeka Selatan no.24',
            'image' => '/photos/campaign/' . Uuid::uuid4()->toString() . '.jpg',
            'required' => 34500000,
            'collected' => 18570000,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('campaigns')->insert([
            'id' => Uuid::uuid4()->toString(),
            'title' => 'Usap Tangis Bayi Kelaparn',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt dolor, sed malesuada ex. Praesent hendrerit tortor fringilla est porta luctus luctus eget elit. Pellentesque eu eros quis neque auctor ornare id sit amet ligula. Etiam eget odio id risus ornare posuere. Mauris finibus orci ultricies velit feugiat feugiat. Fusce sed ligula accumsan, consequat neque quis, pulvinar nunc. Proin lorem dui, euismod sed ligula id, fermentum pretium lacus. Curabitur laoreet vestibulum nulla eu placerat. Donec ornare justo sit amet semper pellentesque',
            'address' => 'Jl. Merdeka Selatan no.24',
            'image' => '/photos/campaign/' . Uuid::uuid4()->toString() . '.jpg',
            'required' => 104500000,
            'collected' => 3070000,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('campaigns')->insert([
            'id' => Uuid::uuid4()->toString(),
            'title' => 'Bantu Anak NTT Meraih Mimpi',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt dolor, sed malesuada ex. Praesent hendrerit tortor fringilla est porta luctus luctus eget elit. Pellentesque eu eros quis neque auctor ornare id sit amet ligula. Etiam eget odio id risus ornare posuere. Mauris finibus orci ultricies velit feugiat feugiat. Fusce sed ligula accumsan, consequat neque quis, pulvinar nunc. Proin lorem dui, euismod sed ligula id, fermentum pretium lacus. Curabitur laoreet vestibulum nulla eu placerat. Donec ornare justo sit amet semper pellentesque',
            'address' => 'Jl. Merdeka Timur no.24',
            'image' => '/photos/campaign/' . Uuid::uuid4()->toString() . '.jpg',
            'required' => 64500000,
            'collected' => 5770000,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('campaigns')->insert([
            'id' => Uuid::uuid4()->toString(),
            'title' => 'Bantu Korban Tanah Longsor Jambi',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt dolor, sed malesuada ex. Praesent hendrerit tortor fringilla est porta luctus luctus eget elit. Pellentesque eu eros quis neque auctor ornare id sit amet ligula. Etiam eget odio id risus ornare posuere. Mauris finibus orci ultricies velit feugiat feugiat. Fusce sed ligula accumsan, consequat neque quis, pulvinar nunc. Proin lorem dui, euismod sed ligula id, fermentum pretium lacus. Curabitur laoreet vestibulum nulla eu placerat. Donec ornare justo sit amet semper pellentesque',
            'address' => 'Jl. Merdeka Barat no.24',
            'image' => '/photos/campaign/' . Uuid::uuid4()->toString() . '.jpg',
            'required' => 104500000,
            'collected' => 55570000,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('campaigns')->insert([
            'id' => Uuid::uuid4()->toString(),
            'title' => 'Bantu Nindya Membayar Sekolah',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et tincidunt dolor, sed malesuada ex. Praesent hendrerit tortor fringilla est porta luctus luctus eget elit. Pellentesque eu eros quis neque auctor ornare id sit amet ligula. Etiam eget odio id risus ornare posuere. Mauris finibus orci ultricies velit feugiat feugiat. Fusce sed ligula accumsan, consequat neque quis, pulvinar nunc. Proin lorem dui, euismod sed ligula id, fermentum pretium lacus. Curabitur laoreet vestibulum nulla eu placerat. Donec ornare justo sit amet semper pellentesque',
            'address' => 'Jl. Merdeka Barat no.24',
            'image' => '/photos/campaign/' . Uuid::uuid4()->toString() . '.jpg',
            'required' => 4500000,
            'collected' => 5500000,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
