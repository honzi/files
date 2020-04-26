'use strict';

function draw_logic(){
    canvas_draw_path({
      'style': 'stroke',
      'vertices': [
        {
          'type': 'moveTo',
          'x': points['origin']['x'],
          'y': points['origin']['y'],
        },
        {
          'x': points['origin']['x'],
          'y': points['target']['y'],
        },
        {
          'x': points['target']['x'],
          'y': points['target']['y'],
        },
        {
          'x': points['target']['x'],
          'y': points['origin']['y'],
        },
        {
          'x': points['origin']['x'],
          'y': points['origin']['y'],
        },
        {
          'x': points['target']['x'],
          'y': points['target']['y'],
        },
      ],
    });

    canvas_setproperties({
      'properties': {
        'fillStyle': '#0f0',
      },
    });
    canvas_buffer.fillText(
      points['dx'],
      points['origin']['x'] - points['dx-half'],
      points['origin']['y']
    );
    canvas_buffer.fillText(
      points['dx'],
      points['target']['x'] + points['dx-half'],
      points['target']['y']
    );
    canvas_buffer.fillText(
      points['dy'],
      points['origin']['x'],
      points['origin']['y'] - points['dy-half']
    );
    canvas_buffer.fillText(
      points['dy'],
      points['target']['x'],
      points['target']['y'] + points['dy-half']
    );
    canvas_buffer.fillText(
      points['hypotenuse'],
      points['origin']['x'] - points['dx-half'],
      points['origin']['y'] - points['dy-half']
    );

    canvas_setproperties({
      'properties': {
        'fillStyle': '#f00',
      },
    });
    canvas_buffer.fillText(
      points['angle-0'],
      points['origin']['x'] + 25 * points['x-direction'] - 25,
      points['origin']['y'] + 50 * points['y-direction']
    );
    canvas_buffer.fillText(
      points['angle-1'],
      points['origin']['x'] + 50 * points['x-direction'] - 25,
      points['origin']['y'] + 25 * points['y-direction']
    );
}

function logic(){
    core_ui_update({
      'ids': {
        'distance': points['hypotenuse'],
        'x': points['angle-0'],
        'y': points['angle-1'],
      },
    });
}

function repo_init(){
    core_repo_init({
      'globals': {
        'points': {},
      },
      'mousebinds': {
        'contextmenu': {
          'preventDefault': true,
        },
        'mousedown': {
          'todo': function(){
              update_point({
                'point': core_mouse['down-0']
                  ? 'target'
                  : 'origin',
                'x': core_mouse['x'],
                'y': core_mouse['y'],
              });
          },
        },
        'mousemove': {
          'todo': function(){
              if(core_mouse['down-0']
                || core_mouse['down-2']){
                  update_point({
                    'point': core_mouse['down-0']
                      ? 'target'
                      : 'origin',
                    'x': core_mouse['x'],
                    'y': core_mouse['y'],
                  });
              }
          },
        },
      },
      'title': 'Trigonometry.htm',
      'ui': 'Distance: <span id=distance></span><br>X-Axis Angle: <span id=x></span><br>Y-Axis Angle: <span id=y></span>',
    });
    canvas_init();

    points = {
      'origin': {
        'x': canvas_properties['width-half'],
        'y': canvas_properties['height-half'],
      },
      'target': {},
    };
    update_point();
}
