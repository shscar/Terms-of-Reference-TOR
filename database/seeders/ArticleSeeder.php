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
                'article_id' => Str::uuid(),
                'title' => 'Intelijen Siber Asia Tenggara',
                'classification' => 'SECRET',
                'source' => 'OSINT',
                'location' => 'Jakarta, Indonesia',
                'status' => 'verified',
                'threat' => 'high',
                'content' => 'Konten lengkap terkait aktivitas siber di Asia Tenggara.',
                'tags' => json_encode(['cybersecurity', 'asia', 'osint']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'article_id' => Str::uuid(),
                'title' => 'Operasi HUMINT di Timur Tengah',
                'classification' => 'TOP SECRET',
                'source' => 'HUMINT',
                'location' => 'Baghdad, Irak',
                'status' => 'active',
                'threat' => 'critical',
                'content' => 'Isi laporan lengkap operasi HUMINT di Irak.',
                'tags' => json_encode(['humint', 'middle-east', 'critical']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'article_id' => Str::uuid(),
                'title' => 'Laporan OSINT Perbatasan',
                'classification' => 'CONFIDENTIAL',
                'source' => 'OSINT',
                'location' => 'Papua, Indonesia',
                'status' => 'pending',
                'threat' => 'medium',
                'content' => 'Isi laporan OSINT mengenai Papua.',
                'tags' => json_encode(['osint', 'border', 'papua']),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        DB::table('articles')->insert($articles);
    }
}
