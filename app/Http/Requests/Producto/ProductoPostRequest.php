<?php

namespace App\Http\Requests\Producto;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductoPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|unique:productos|max:255',
            'talla' => ['required', Rule::in(['S', 'M', 'L'])],
            'marca_id' => 'required|exists:marcas,id',
            'cantidad_inventario' => 'required|numeric',
            'fecha_embarque' => 'required'
        ];
    }

    /**
     * Get the rename attributes rules that apply to the request.
     *
     * @return array
     */
    public function attributes(): array
    {
        return [
            'marca_id' => 'marca',
        ];
    }

}
