<?php

namespace App\Http\Controllers;

use App\Models\Marca;

class ComplementosController extends Controller
{
    public function getMarcas(): \Illuminate\Http\JsonResponse
    {
        return response()->json(Marca::all());
    }
}
