<?php

namespace App\Http\Requests\Marca;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MarcaPutRequest extends FormRequest
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
    public function rules(): array
    {
        return [
            'nombre' => [
                Rule::unique('marcas', 'nombre')->ignore($this->marca->id), 'required'
            ],
            'referencia' => 'required|unique:marcas,referencia,'.$this->marca->id,
        ];
    }
}
