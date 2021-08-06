<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MarcaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_list_marcas()
    {
        $test_marca = [
            'nombre' => 'Oscar',
            'referencia' => 'KKX90',
        ];
        $marca = $this->post('api/marcas', $test_marca);
        $marca->assertStatus(200);

        $marcas = $this->get('api/marcas');
        $marcas->assertStatus(200);

        $content_response = json_decode($marca->content());

        $edit_marca = [
            'nombre' => 'Oscar de la Renta',
            'referencia' => 'KKX90',
        ];
        $edit = $this->put('api/marcas/'.$content_response->id, $edit_marca);
        $edit->assertStatus(200);


        $delete = $this->delete('api/marcas/'.$content_response->id);
        $delete->assertStatus(200);
    }
}
