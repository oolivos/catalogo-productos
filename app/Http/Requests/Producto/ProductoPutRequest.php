<?php

namespace App\Http\Requests\Producto;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductoPutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => 'required|max:255|unique:marcas,nombre,'.$this->producto->id,
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
