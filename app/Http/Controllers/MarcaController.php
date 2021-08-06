<?php

namespace App\Http\Controllers;

use App\Http\Requests\Marca\MarcaPutRequest;
use App\Http\Requests\Marca\MarcaPostRequest;
use App\Models\Marca;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class MarcaController extends Controller
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
        $query = QueryBuilder::for(Marca::class)
            ->allowedFilters([
                AllowedFilter::scope('search'),
            ]);
        return response()->json($query->paginate($perPage));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  MarcaPostRequest  $request
     * @return JsonResponse
     */
    public function store(MarcaPostRequest $request): JsonResponse
    {
        return response()->json(Marca::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param Marca $marca
     * @return JsonResponse
     */
    public function show(Marca $marca): JsonResponse
    {
        return response()->json($marca);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  MarcaPutRequest  $request
     * @param Marca $marca
     * @return JsonResponse
     */
    public function update(MarcaPutRequest $request, Marca $marca): JsonResponse
    {
        return response()->json(
            $marca->update($request->all())
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Marca  $marca
     * @return JsonResponse
     */
    public function destroy(Marca $marca): JsonResponse
    {

        return  response()->json(
            $marca->delete()
        );
    }
}
