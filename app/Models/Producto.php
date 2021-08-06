<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Producto extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'talla',
        'observaciones',
        'marca_id',
        'cantidad_inventario',
        'fecha_embarque'
    ];
    public function marca(){
        return $this->belongsTo(Marca::class);
    }
    public function scopeSearch(Builder $query,$search) : Builder
    {
        return $query->where(function($query) use($search){
            $query->where('nombre','LIKE','%'.$search.'%');
        });
    }
}
