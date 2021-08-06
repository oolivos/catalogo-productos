<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',255)
                ->unique('un_productos_nombre');
            $table->enum('talla', ['S', 'M', 'L']);
            $table->text('observaciones');
            $table->foreignId('marca_id')->constrained();
            $table->integer('cantidad_inventario');
            $table->timestamp('fecha_embarque');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
