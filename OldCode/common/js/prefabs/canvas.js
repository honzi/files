'use strict';

// Required args: id,
function prefabs_canvas_fence_2d(args){
    args = core_args({
      'args': args,
      'defaults': {
        'color': '#777',
        'frequency': 60,
        'length_half': 25,
        'x': 0,
        'y': 0,
      },
    });

    const fence = [
      {
        'color': args.color,
        'vertices': [
          [
            'moveTo',
            -args.length_half,
            -20,
          ],
          [
            'lineTo',
            args.length_half,
            -20,
          ],
          [
            'lineTo',
            args.length_half,
            -15,
          ],
          [
            'lineTo',
            -args.length_half,
            -15,
          ],
        ],
        'x': args.x,
        'y': args.y,
      },
    ];

    for(let i = 0; i < args.length_half * 2; i += args.frequency){
        fence.push({
          'color': args.color,
          'vertices': [
            [
              'moveTo',
              -5,
              -25,
            ],
            [
              'lineTo',
              5,
              -25,
            ],
            [
              'lineTo',
              5,
              0,
            ],
            [
              'lineTo',
              -5,
              0,
            ],
          ],
          'y': args.y,
          'x': args.x - args.length_half + i,
        });
    }

    return fence;
}

// Required args: id
function prefabs_canvas_tree_2d(args){
    args = core_args({
      'args': args,
      'defaults': {
        'color_base': '#be6400',
        'color_leaf': '#' + core_random_hex(),
        'height_base': 25,
        'height_leaf': 75,
        'width_base': 25,
        'width_leaf': 75,
        'x': 0,
        'y': 0,
      },
    });

    const half_base = args.width_base / 2;
    const half_leaf = args.width_leaf / 2;

    return [
      {
        'color': args.color_base,
        'vertices': [
          [
            'moveTo',
            -half_base,
            -args.height_base,
          ],
          [
            'lineTo',
            half_base,
            -args.height_base,
          ],
          [
            'lineTo',
            half_base,
            0,
          ],
          [
            'lineTo',
            -half_base,
            0,
          ],
        ],
        'x': args.x,
        'y': args.y,
      },
      {
        'color': args.color_leaf,
        'vertices': [
          [
            'moveTo',
            -half_leaf,
            -args.height_leaf,
          ],
          [
            'lineTo',
            half_leaf,
            -args.height_leaf,
          ],
          [
            'lineTo',
            half_leaf,
            0,
          ],
          [
            'lineTo',
            -half_leaf,
            0,
          ],
        ],
        'x': args.x,
        'y': args.y - args.height_base,
      },
    ];
}
