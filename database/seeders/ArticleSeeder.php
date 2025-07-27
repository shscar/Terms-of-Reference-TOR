<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articles = [
            [
                // 'id' => Str::uuid(),
                'title' => 'Intelijen Siber Asia Tenggara',
                'content' => 'Konten lengkap terkait aktivitas siber di Asia Tenggara.',
                'tags' => json_encode(['cybersecurity', 'asia', 'osint']),
                'status' => 'verified',
                'classification' => 'SECRET',
                'source' => 'OSINT',
                'location' => 'Jakarta, Indonesia',
                'date' => now(),
                'threat' => 'high',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Operasi HUMINT di Timur Tengah',
                'content' => 'Isi laporan lengkap operasi HUMINT di Irak.',
                'tags' => json_encode(['humint', 'middle-east', 'critical']),
                'status' => 'active',
                'classification' => 'TOP SECRET',
                'source' => 'HUMINT',
                'location' => 'Baghdad, Irak',
                'date' => now(),
                'threat' => 'critical',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Laporan OSINT Perbatasan',
                'content' => 'Isi laporan OSINT mengenai Papua.',
                'tags' => json_encode(['osint', 'border', 'papua']),
                'status' => 'pending',
                'classification' => 'CONFIDENTIAL',
                'source' => 'OSINT',
                'location' => 'Papua, Indonesia',
                'date' => now(),
                'threat' => 'medium',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        DB::table('articles')->insert($articles);
    }
}