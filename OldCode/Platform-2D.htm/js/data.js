'use strict';

function data_logic(id){
    // Randomized lava corridor logic.
    if(id === -1){
        // Create next obstacle every 400px traveled.
        if(platform_players['player']['x'] > 400){
            // Move the player back 400px.
            platform_players['player']['x'] -= 400;

            // Move the lava wall back 400px.
            world_dynamic[0]['x'] -= 400;

            // Move all world objects back 400px, except for lava wall and floor/ceiling.
            for(const object in world_dynamic){
                if(object > 1){
                    world_dynamic[object]['x'] -= 400;
                }
            }

            // Randomly pick next obstacle.
            const obstacle = core_random_integer({
              'max': 4,
            });

            // Lava pit obstacle.
            if(obstacle === 0){
                world_dynamic.push(
                  {
                    'height': 25,
                    'type': 'lavaleaf',
                    'width': 25,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 50 + core_random_integer({
                      'max': 150,
                    }),
                    'y': 25,
                    'y-speed': 2,
                    'y-target-max': 25,
                    'y-target-min': -200,
                  },
                  {
                    'height': 75,
                    'type': 'stone',
                    'width': 50,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'],
                    'y': -25,
                  },
                  {
                    'height': 50,
                    'type': 'lavaleaf',
                    'width': 175,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 50,
                    'y': 0,
                  },
                  {
                    'height': 75,
                    'type': 'stone',
                    'width': 50,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 225,
                    'y': -25,
                  }
                );

            // Booster obstacle.
            }else if(obstacle === 1){
                world_dynamic.push(
                  {
                    'height': 200,
                    'type': 'lavaleaf',
                    'width': 25,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'],
                    'y': -200,
                  },
                  {
                    'boost': -14,
                    'height': 25,
                    'type': 'boost',
                    'width': 25,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 75,
                    'y': 25,
                  },
                  {
                    'height': 175,
                    'type': 'lavaleaf',
                    'width': 25,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 100,
                    'y': -125,
                  }
                );

            // Wall backtrack obstacle.
            }else if(obstacle === 2){
                world_dynamic.push(
                  {
                    'height': 192,
                    'type': 'stone',
                    'width': 32,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 16,
                    'y': -200,
                  },
                  {
                    'height': 32,
                    'type': 'stone',
                    'width': 32,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 48,
                    'y': -40,
                  },
                  {
                    'height': 178,
                    'type': 'stone',
                    'width': 32,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 160,
                    'y': -128,
                  }
                );

            // Lava pillars obstacle.
            }else{
                world_dynamic.push(
                  {
                    'height': 50,
                    'type': 'lavaleaf',
                    'width': 25,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'],
                    'y': 0,
                  },
                  {
                    'height': 75,
                    'type': 'lavaleaf',
                    'width': 25,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 100,
                    'y': -25,
                  },
                  {
                    'height': 50,
                    'type': 'lavaleaf',
                    'width': 25,
                    'x': platform_players['player']['x'] + canvas_properties['width-half'] + 200,
                    'y': 0,
                  }
                );
            }
        }

        // Set lava wall goal to player position to keep it moving.
        world_dynamic[0]['x-target-max'] = platform_players['player']['x'];

        // Reset floor X position to match player position.
        world_dynamic[1]['x'] = platform_players['player']['x'] - 50;

        // Delete objects that are eaten by the lava wall.
        for(const object in world_dynamic){
            if(object > 1
              && world_dynamic[object]['x'] < world_dynamic[0]['x']){
                world_dynamic.splice(
                  object,
                  1
                );
            }
        }
    }
}

function load_data(){
    core_interval_remove({
      'id': 'logic',
    });

    platform_player_reset({
      'all': true,
    });

    platform_score_goal = 1;
    scenery.length = 0;
    world_dynamic.length = 0;

    // Randomized level.
    if(core_storage_data['level'] === 1){
        canvas_properties['clearColor'] = '#111';

        let tile_count = Math.max(
          core_random_integer({
            'max': core_storage_data['random-tiles'],
          }) + 1,
          1
        );
        if(tile_count % 2 === 0){
            tile_count += 1;
        }
        const total_tiles = tile_count;
        let endtile_left = 0;
        let endtile_right = 0;
        const side = core_random_boolean() ? 1 : 0;

        world_dynamic = [
          [
            {
              'height': 256,
              'type': 'goal',
              'width': 25,
              'x': (-total_tiles * 208) / 2 - 208,
              'y': -168,
            },
            {
              'height': 260,
              'type': 'locked-wall',
              'width': 30,
              'x': (-total_tiles * 208) / 2 - 208,
              'y': -170,
            },
          ],
          [
            {
              'height': 256,
              'type': 'goal',
              'width': 25,
              'x': (total_tiles * 208) / 2 + 184,
              'y': -168,
            },
            {
              'height': 260,
              'type': 'locked-wall',
              'width': 30,
              'x': (total_tiles * 208) / 2 + 179,
              'y': -170,
            },
          ],
        ][side];

        const tree_y = core_random_integer();
        prefabs_canvas_tree_2d({
          'id': 'tree',
          'x': -60 + 125 * side,
          'y': 50,
        });

        world_dynamic.push(
          {
            'height': 352,
            'type': 'stone',
            'width': 32,
            'x': (total_tiles * 208) / 2 + 208,
            'y': -200,
          },
          {
            'height': 352,
            'type': 'stone',
            'width': 32,
            'x': (-total_tiles * 208) / 2 - 240,
            'y': -200,
          },
          {
            'height': 112,
            'type': 'stone',
            'width': 208,
            'x': -104,
            'y': 40,
          }
        );

        let tile_middle_x = 0;

        do{
            let top = true;
            const tile_type = core_random_integer({
              'max': 9,
            });
            tile_middle_x = (-total_tiles * 208) / 2 + tile_count * 208 + (tile_count >= total_tiles / 2 ? 0 : -208);

            if(tile_count === 0){
                endtile_left = tile_type;

            }else if(tile_count === total_tiles){
                endtile_right = tile_type;
            }

            if(tile_type === 1){
                world_dynamic.push(
                  core_random_boolean()
                    ? {
                        'height': 32,
                        'type': 'stone',
                        'width': 80,
                        'x': tile_middle_x + 70,
                        'x-speed': core_random_boolean()
                          ? 1
                          : -1,
                        'x-target-max': tile_middle_x + 110,
                        'x-target-min': tile_middle_x + 10,
                        'y': -25,
                      }
                    : {
                        'height': 32,
                        'type': 'stone',
                        'width': 80,
                        'x': tile_middle_x + 57,
                        'y': 0,
                        'y-speed': core_random_boolean()
                          ? 1
                          : -1,
                        'y-target-max': 75,
                        'y-target-min': -25,
                      },
                  {
                    'height': 175,
                    'type': 'lavaleaf',
                    'width': 25,
                    'x': tile_middle_x + 85,
                    'y': -100,
                  }
                );

            }else if(tile_type === 0
              || tile_type === 3){
                if(core_random_boolean({
                    'chance': .25,
                  })){
                    world_dynamic.push(
                      {
                        'height': 32,
                        'type': 'stone',
                        'width': 208,
                        'x': tile_middle_x,
                        'y': 40,
                      },
                      {
                        'height': 100,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + 45,
                        'y': -25,
                        'y-speed': core_random_boolean({
                          'chance': .2,
                        })
                          ? 1
                          : 0,
                        'y-target-max': -25,
                        'y-target-min': -168,
                      },
                      {
                        'height': 100,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + 130,
                        'y': -25,
                        'y-speed': core_random_boolean({
                          'chance': .2,
                        })
                          ? 1
                          : 0,
                        'y-target-max': -25,
                        'y-target-min': -168,
                      }
                    );
                }else if(core_random_boolean()){
                    world_dynamic.push(
                      {
                        'height': 32,
                        'type': 'stone',
                        'width': 208,
                        'x': tile_middle_x,
                        'y': 40,
                      },
                      {
                        'height': 75,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x,
                        'y': 0,
                        'y-speed': core_random_boolean({
                          'chance': .2,
                        })
                          ? 1
                          : 0,
                        'y-target-max': 0,
                        'y-target-min': -168,
                      },
                      {
                        'height': 100,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + 87.5,
                        'y': -25,
                        'y-speed': core_random_boolean({
                          'chance': .2,
                        })
                          ? 1
                          : 0,
                        'y-target-max': -25,
                        'y-target-min': -168,
                      },
                      {
                        'height': 75,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + 183,
                        'y': 0,
                        'y-speed': core_random_boolean({
                          'chance': .2,
                        })
                          ? 1
                          : 0,
                        'y-target-max': 0,
                        'y-target-min': -168,
                      }
                    );
                }else{
                    world_dynamic.push(
                      {
                        'height': 32,
                        'type': 'stone',
                        'width': 208,
                        'x': tile_middle_x,
                        'y': 40,
                      },
                      {
                        'height': 100,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + core_random_integer({
                          'max': 183,
                        }),
                        'x-speed': core_random_boolean({
                          'chance': .4,
                        })
                          ? 1
                          : -1,
                        'x-target-max': tile_middle_x + 183,
                        'x-target-min': tile_middle_x,
                        'y': -25,
                      }
                    );
                }

            }else if(tile_type === 2
              || tile_type === 4){
                world_dynamic.push({
                  'height': 32,
                  'type': 'stone',
                  'width': 32,
                  'x': tile_middle_x + 85,
                  'y': 40,
                });
                if(core_random_boolean({
                    'chance': .4,
                  })){
                    world_dynamic.push(
                      {
                        'height': 25,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + 40,
                        'y': 100 - core_random_integer({
                          'max': 275,
                        }),
                        'y-speed': 2,
                        'y-target-max': 100,
                        'y-target-min': -168,
                      }
                    );
                }
                if(core_random_boolean({
                    'chance': .4,
                  })){
                    world_dynamic.push(
                      {
                        'height': 25,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + 135,
                        'y': 100 - core_random_integer({
                          'max': 275,
                        }),
                        'y-speed': 2,
                        'y-target-max': 100,
                        'y-target-min': -168,
                      }
                    );
                }

            }else if(tile_type === 5){
                world_dynamic.push({
                  'boost': -12,
                  'height': 25,
                  'type': 'boost',
                  'width': 208,
                  'x': tile_middle_x,
                  'y': 50,
                });
                if(core_random_boolean({
                    'chance': .2,
                  })){
                    top = false;
                    world_dynamic.push(
                      {
                        'boost': -12,
                        'height': 25,
                        'type': 'boost',
                        'width': 25,
                        'x': tile_middle_x + core_random_integer({
                          'max': 183,
                        }),
                        'x-speed': core_random_boolean()
                          ? 2
                          : -2,
                        'x-target-max': tile_middle_x + 183,
                        'x-target-min': tile_middle_x,
                        'y': -core_random_integer({
                          'max': 150,
                        }),
                      },
                      {
                        'height': 32,
                        'type': 'lavaleaf',
                        'width': 208,
                        'x': tile_middle_x,
                        'y': -200,
                      }
                    );
                }else{
                    world_dynamic.push(
                      {
                        'height': 25,
                        'type': 'lavaleaf',
                        'width': 25,
                        'x': tile_middle_x + core_random_integer({
                          'max': 183,
                        }),
                        'x-speed': core_random_boolean()
                          ? 2
                          : -2,
                        'x-target-max': tile_middle_x + 183,
                        'x-target-min': tile_middle_x,
                        'y': -core_random_integer({
                          'max': 150,
                        }),
                      }
                    );
                }

            }else if(tile_type === 6){
                world_dynamic.push(
                  {
                    'height': 64,
                    'type': 'stone',
                    'width': 32,
                    'x': tile_middle_x,
                    'y': 8,
                  },
                  {
                    'height': 64,
                    'type': 'stone',
                    'width': 32,
                    'x': tile_middle_x + 176,
                    'y': 8,
                  }
                );
                if(core_random_boolean({
                    'chance': .6,
                  })){
                    if(core_random_boolean()){
                        world_dynamic.push(
                          {
                            'height': 25,
                            'type': 'lavaleaf',
                            'width': 25,
                            'x': tile_middle_x + 50,
                            'y': 100 - core_random_integer({
                              'max': 275,
                            }),
                            'y-speed': core_random_boolean()
                              ? 2
                              : -2,
                            'y-target-max': 100,
                            'y-target-min': -168,
                          },
                          {
                            'height': 25,
                            'type': 'lavaleaf',
                            'width': 25,
                            'x': tile_middle_x + 125,
                            'y': 100 - core_random_integer({
                              'max': 275,
                            }),
                            'y-speed': core_random_boolean()
                              ? 2
                              : -2,
                            'y-target-max': 100,
                            'y-target-min': -168,
                          }
                        );
                    }else{
                        world_dynamic.push({
                          'height': 25,
                          'type': 'lavaleaf',
                          'width': 25,
                          'x': core_random_integer({
                            'max': 125,
                          }) + tile_middle_x + 25,
                          'y': 100 - core_random_integer({
                            'max': 275,
                          }),
                          'y-speed': 2,
                          'y-target-max': 100,
                          'y-target-min': -168,
                        });
                    }
                }

            }else if(tile_type === 7){
                world_dynamic.push({
                  'height': 75,
                  'type': 'stone',
                  'width': 208,
                  'x': tile_middle_x,
                  'y': 40,
                });
                const tree_x = core_random_integer({
                  'max': 183,
                });
                tree_y = core_random_integer();
                prefabs_canvas_tree_2d({
                  'id': 'tree-' + entity_id_count,
                  'height-base': 25 + core_random_integer({
                    'max': 100,
                  }),
                  'x': tile_middle_x + tree_x + 10,
                  'y': 40,
                });

            }else if(tile_type === 8){
                world_dynamic.push(
                  {
                    'height': 64,
                    'type': 'stone',
                    'width': 64,
                    'x': tile_middle_x,
                    'y': 8,
                  },
                  {
                    'height': 64,
                    'type': 'stone',
                    'width': 64,
                    'x': tile_middle_x + 144,
                    'y': 8,
                  },
                  {
                    'height': 16,
                    'type': 'stone',
                    'width': 80,
                    'x': tile_middle_x + 64,
                    'y': 56,
                  },
                  {
                    'height': 50,
                    'type': 'lavaleaf',
                    'width': 208,
                    'x': tile_middle_x,
                    'y': -core_random_integer({
                      'max': 150,
                    }) - 25,
                    'y-speed': core_random_boolean()
                      ? 1.5
                      : -1.5,
                    'y-target-max': -42,
                    'y-target-min': -168,
                  }
                );
            }

            world_dynamic.push(
              {
                'height': 50,
                'type': 'lavaleaf',
                'width': 208,
                'x': tile_middle_x,
                'y': 72,
              },
              {
                'height': 32,
                'type': 'stone',
                'width': 208,
                'x': tile_middle_x,
                'y': 120,
              },
            );

            if(top){
                world_dynamic.push({
                  'height': 32,
                  'type': 'stone',
                  'width': 208,
                  'x': tile_middle_x,
                  'y': -200,
                });
            }

        }while(tile_count--);

        world_dynamic.push({
          'height': 32,
          'type': 'stone',
          'width': 210,
          'x': -105,
          'y': -200,
        });

        let key_y = 0;
        if(side){
            if(endtile_left === 1){
                key_y = -70;

            }else if(endtile_left === 6
              || endtile_left === 8){
                key_y = -40;

            }else if(endtile_left === 9){
                key_y = -110;
            }

            let key_x = (-total_tiles * 208) / 2 - 208;
            if(endtile_left === 2
              || endtile_left === 4){
                key_x += 75;
            }

            world_dynamic.push({
              'height': 40,
              'type': 'key',
              'width': 50,
              'x': key_x,
              'y': key_y,
            });

        }else{
            if(endtile_right === 1){
                key_y = -70;

            }else if(endtile_right === 6
              || endtile_right === 8){
                key_y = -40;

            }else if(endtile_right === 9){
                key_y = -110;
            }

            let key_x = (total_tiles * 208) / 2 + 150;
            if(endtile_right === 2
              || endtile_right === 4){
                key_x -= 75;
            }

            world_dynamic.push({
              'height': 40,
              'type': 'key',
              'width': 50,
              'x': key_x,
              'y': key_y,
            });
        }

    // Randomized lava corridor.
    }else if(core_storage_data['level'] === 2){
        canvas_properties['clearColor'] = '#222';

        world_dynamic = [
          {
            'height': 250,
            'type': 'lavaleaf',
            'width': 50,
            'x': -250,
            'x-speed': core_storage_data['corridor-speed'],
            'x-target-max': 200,
            'x-target-min': -250,
            'y': -200,
          },
          {
            'color': '#222',
            'height': 32,
            'type': 'locked-wall',
            'width': 96,
            'x': -50,
            'y': 50,
          },
        ];
        scenery = [
          {
            'color': '#000',
            'vertices': [
              {
                'type': 'moveTo',
                'x': -canvas_properties['width'],
                'y': -200,
              },
              {
                'x': canvas_properties['width'],
                'y': -200,
              },
              {
                'x': canvas_properties['width'],
                'y': 50,
              },
              {
                'x': -canvas_properties['width'],
                'y': 50,
              },
            ],
          },
        ];

        core_interval_modify({
          'id': 'logic',
          'todo': function(){
              data_logic(-1);
          },
        });

    // Premade levels.
    }else{
        canvas_properties['clearColor'] = '#000';

        world_dynamic = [
          {
            'height': 32,
            'type': 'stone',
            'width': 321,
            'x': -896,
            'y': 496,
          },
          {
            'height': 160,
            'type': 'stone',
            'width': 32,
            'x': -576,
            'y': 496,
          },
          {
            'boost': -17,
            'height': 25,
            'type': 'boost',
            'width': 25,
            'x': -546,
            'y': 624,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 17,
            'x': -448,
            'y': -32,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 17,
            'x': -448,
            'y': 64,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 17,
            'x': -448,
            'y': 160,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 17,
            'x': -448,
            'y': 256,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 528,
            'x': -464,
            'y': 352,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 512,
            'x': -448,
            'y': -128,
          },
          {
            'height': 384,
            'type': 'stone',
            'width': 32,
            'x': -432,
            'y': -96,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 448,
            'x': -352,
            'y': 256,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 416,
            'x': -352,
            'y': 64,
          },
          {
            'height': 25,
            'type': 'goal',
            'width': 25,
            'x': 8,
            'y': 328,
          },
          {
            'height': 256,
            'type': 'stone',
            'width': 32,
            'x': 32,
            'y': -96,
          },
          {
            'height': 80,
            'type': 'stone',
            'width': 32,
            'x': 32,
            'y': 272,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 128,
            'x': 288,
            'y': 256,
          },
          {
            'height': 32,
            'type': 'stone',
            'width': 96,
            'x': 592,
            'y': 256,
          },
          {
            'height': 25,
            'type': 'goal',
            'width': 25,
            'x': 640,
            'y': 232,
          },
        ];
        scenery = [
          {
            'color': '#444',
            'vertices': [
              {
                'type': 'moveTo',
                'x': -1430,
                'y': -125,
              },
              {
                'x': -955,
                'y': -125,
              },
              {
                'x': -955,
                'y': 350,
              },
              {
                'x': -1430,
                'y': 350,
              },
            ],
          },
          {
            'color': '#222',
            'vertices': [
              {
                'type': 'moveTo',
                'x': -1430,
                'y': 350,
              },
              {
                'x': -955,
                'y': 350,
              },
              {
                'x': -1123,
                'y': 555,
              },
            ],
          },
          {
            'color': '#222',
            'vertices': [
              {
                'type': 'moveTo',
                'x': -896,
                'y': 528,
              },
              {
                'x': -574,
                'y': 528,
              },
              {
                'x': -574,
                'y': 656,
              },
            ],
          },
          {
            'color': '#222',
            'vertices': [
              {
                'type': 'moveTo',
                'x': -464,
                'y': 384,
              },
              {
                'x': 64,
                'y': 384,
              },
              {
                'x': -192,
                'y': 656,
              },
            ],
          },
          {
            'color': '#191919',
            'vertices': [
              {
                'type': 'moveTo',
                'x': -432,
                'y': 288,
              },
              {
                'x': 32,
                'y': 288,
              },
              {
                'x': 32,
                'y': 352,
              },
              {
                'x': -432,
                'y': 352,
              },
            ],
          },
          {
            'color': '#231105',
            'vertices': [
              {
                'type': 'moveTo',
                'x': -400,
                'y': -96,
              },
              {
                'x': 64,
                'y': -96,
              },
              {
                'x': 64,
                'y': 288,
              },
              {
                'x': -400,
                'y': 288,
              },
            ],
          },
          {
            'color': '#222',
            'vertices': [
              {
                'type': 'moveTo',
                'x': 288,
                'y': 288,
              },
              {
                'x': 416,
                'y': 288,
              },
              {
                'x': 360,
                'y': 352,
              },
            ],
          },
          {
            'color': '#222',
            'vertices': [
              {
                'type': 'moveTo',
                'x': 592,
                'y': 288,
              },
              {
                'x': 688,
                'y': 288,
              },
              {
                'x': 637,
                'y': 320,
              },
            ],
          },
        ];
        prefabs_canvas_tree_2d({
          'id': 'tree-0',
          'height-base': 50,
          'x': -864,
          'y': 496,
        });
        prefabs_canvas_tree_2d({
          'id': 'tree-1',
          'height-base': 75,
          'x': 375,
          'y': 256,
        });
        prefabs_canvas_fence_2d({
          'id': 'fence-0',
          'frequency': 67,
          'length-half': 170,
          'x': -720,
          'y': 496,
        });

        platform_score_goal = 2;
    }
}
