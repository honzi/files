'use strict';

function load_data(){
    race_unload();

    race_checkpoints = [
      {
        'next': 1,
        'x': 250,
        'y': -150,
      },
      {
        'next': 2,
        'x': 250,
        'y': 150,
      },
      {
        'next': 3,
        'x': 0,
        'y': -50,
      },
      {
        'next': 4,
        'x': -225,
        'y': 175,
      },
      {
        'next': 5,
        'x': -250,
        'y': -150,
      },
      {
        'lap': true,
        'next': 0,
        'x': 0,
        'y': -150,
      },
    ];
    race_racer_create({
      'id': 'player',
      'properties': {
        'ai': false,
        'color': core_storage_data['color-positive'],
        'y': -150,
      },
    });
    race_racer_create({
      'id': 'ai',
      'properties': {
        'color': core_storage_data['color-negative'],
        'y': -150,
      },
    });
    /*
    race_walls = [
      {
        'height': 10,
        'width': 390,
        'x': -200,
        'y': -125,
      },
      {
        'height': 200,
        'width': 10,
        'x': -200,
        'y': -125,
      },
      {
        'height': 150,
        'width': 10,
        'x': 0,
        'y': 50,
      },
      {
        'height': 200,
        'width': 10,
        'x': 185,
        'y': -125,
      },
    ];
    */
}
