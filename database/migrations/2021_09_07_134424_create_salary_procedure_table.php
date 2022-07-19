<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalaryProcedureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salary_procedure', function (Blueprint $table) {
            $table->id();
            $table -> varchar('staffcategory');
            $table -> varchar('basic');
            $table -> varchar('OTrate');
            $table -> varchar('wrkhrs');
            $table -> varchar('time');
            $table -> varchar('staffstatus');
            $table -> varchar('EPF');
            $table -> varchar('ETF');
            $table -> date('begginingdate');
            $table -> date('closingdate');
            $table -> varchar('doctorrate');
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
        Schema::dropIfExists('salary_procedure');
    }
}
