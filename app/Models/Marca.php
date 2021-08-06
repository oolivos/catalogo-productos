<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'referencia'];

    public function scopeSearch(Builder $query, $search) : Builder
    {
        return $query->where(function($query) use($search){
            $query->where('nombre','LIKE','%'.$search.'%')
                ->orWhere('referencia','LIKE','%'.$search.'%');
        });
    }
}
