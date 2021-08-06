<?php

namespace App\Http\Controllers;

use App\Http\Requests\Producto\ProductoPutRequest;
use App\Http\Requests\Producto\ProductoPostRequest;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $perPage = $request->get('per_page') ?? 50;
        $query = QueryBuilder::for(Producto::class)
            ->allowedFilters([
                AllowedFilter::scope('search')
            ]);
        $query->with('marca');
        return response()->json($query->paginate($perPage));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param ProductoPostRequest $request
     * @return JsonResponse
     */
    public function store(ProductoPostRequest $request) : JsonResponse
    {
        return response()->json(Producto::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param Producto $producto
     * @return JsonResponse
     */
    public function show(Producto $producto) : JsonResponse
    {
        return response()->json($producto);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductoPutRequest $request
     * @param Producto $producto
     * @return JsonResponse
     */
    public function update(ProductoPutRequest $request, Producto $producto) : JsonResponse
    {
        return response()->json(
            $producto->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Producto  $producto
     * @return JsonResponse
     */
    public function destroy(Producto $producto) : JsonResponse
    {
        return response()->json(
            $producto->delete()
        );
    }
}
