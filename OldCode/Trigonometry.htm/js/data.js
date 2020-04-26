'use strict';

function update_point(args){
    args = core_args({
      'args': args,
      'defaults': {
        'point': 'target',
        'x': canvas_properties['width-half'] + 230,
        'y': canvas_properties['height-half'] + 230,
      },
    });

    points[args['point']]['x'] = args['x'];
    points[args['point']]['y'] = args['y'];
    points['origin']['display-x'] = points['origin']['x'] - canvas_properties['width-half'];
    points['origin']['display-y'] = points['origin']['y'] - canvas_properties['height-half'];
    points['target']['display-x'] = points['target']['x'] - canvas_properties['width-half'];
    points['target']['display-y'] = points['target']['y'] - canvas_properties['height-half'];
    points['dx'] = Math.abs(points['target']['display-x'] - points['origin']['display-x']);
    points['dy'] = Math.abs(points['target']['display-y'] - points['origin']['display-y']);
    points['dx-half'] = (points['origin']['display-x'] - points['target']['display-x']) / 2;
    points['dy-half'] = (points['origin']['display-y'] - points['target']['display-y']) / 2;
    points['hypotenuse'] = math_distance({
      'x0': points['origin']['x'],
      'x1': points['target']['x'],
      'y0': points['origin']['y'],
      'y1': points['target']['y'],
    });

    points['angle-0'] = math_radians_to_degrees({
      'radians': Math.atan(points['dx'] / points['dy']),
    });
    points['angle-1'] = math_radians_to_degrees({
      'radians': Math.atan(points['dy'] / points['dx']),
    });
    points['x-direction'] = args['x'] < points['origin']['x']
      ? -1
      : 1;
    points['y-direction'] = args['y'] < points['origin']['y']
      ? -1
      : 1;
}
