<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    /** @use HasFactory<\Database\Factories\ArticlesFactory> */
    use HasFactory;

    protected $table = 'articles';
    protected $fillable = [
        'title',
        'summary',
        'tags',
        'status',
        'classification',
        'source',
        'location',
        'date',
        'threat',
    ];

    protected $casts = [
        'tags' => 'array',
        'date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

}