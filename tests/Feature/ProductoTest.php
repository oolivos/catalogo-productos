<?php

namespace Tests\Feature;

use App\Models\Marca;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductoTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $marca = Marca::first();

        $test_producto = [
            'nombre' => 'Camisa',
            'talla' => 'L',
            'marca_id' => $marca->id,
            'observaciones' => 'Test Obs',
            'cantidad_inventario' => 90,
            'fecha_embarque' => '2021-08-12'
        ];
        $producto = $this->post('api/productos', $test_producto);
        $producto->assertStatus(200);

        $productos = $this->get('api/productos');
        $productos->assertStatus(200);

        $content_response = json_decode($producto->content());

        $edit_producto = [
            'nombre' => 'Camisa',
            'talla' => 'L',
            'marca_id' => $marca->id,
            'observaciones' => 'Test Obs Modificada',
            'cantidad_inventario' => 120,
            'fecha_embarque' => '2021-08-12'
        ];
        $edit = $this->put('api/productos/'.$content_response->id, $edit_producto);
        $edit->assertStatus(200);

        $delete = $this->delete('api/productos/'.$content_response->id);
        $delete->assertStatus(200);
    }
}
