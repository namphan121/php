<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(),
        'slug' => $faker->slug(),
        'description' => $faker->sentences(20, true),
        'status' => 'active',
        'category_id' => function () {
            return factory(\App\Category::class)->create()->id;
        }
    ];
});
