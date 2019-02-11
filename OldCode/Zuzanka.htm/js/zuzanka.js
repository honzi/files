'use strict';

function draw_logic(){
    // Background circle.
    canvas_draw_path({
      'properties': {
        'fillStyle': '#a42',
      },
      'vertices': [
        {
          'endAngle': math_tau,
          'radius': 300,
          'startAngle': 0,
          'type': 'arc',
          'x': canvas_x,
          'y': canvas_y,
        },
      ],
    });

    // Setup text display.
    canvas_buffer.fillStyle = '#720';

    // Save current buffer state.
    canvas_buffer.save();

    // Translate to center of center circle.
    canvas_buffer.translate(
      canvas_x - 25,
      canvas_y - 90
    );

    // Draw ZUZ.
    canvas_buffer.fillText(
      'ZUZ',
      -81,
      250
    );

    // Save current buffer state.
    canvas_buffer.save();

    // Draw ANKA, rotated.
    canvas_buffer.rotate(-25 * math_degree);
    canvas_buffer.fillText(
      'ANKA',
      -63,
      245
    );

    // Restore the buffer state.
    canvas_buffer.restore();

    // Rotate lines and squares.
    canvas_buffer.rotate(rotation * math_degree);

    // Draw squares.
    canvas_buffer.fillStyle = '#831';
    var loop_counter = 54;
    do{
        canvas_buffer.fillRect(
          [
            35, 35, 50, 60, 65, 75, 95,
            75, 95, 105, 120, 125, 135, 145, 150, 160,
            60, 75, 95, 99, 120, 125, 130, 150,
            -5, -15, 9, -30, 0, 30, -25,
            -70, -85, -105, -110, -130, -135, -140, -160,
            -85, -105, -115, -130, -135, -145, -155, -160, -170,
            -45, -45, -60, -70, -75, -85, -105,
          ][loop_counter],
          [
            -105, -145, -170, -115, -140, -165, -145,
            -30, -55, -35, -60, -85, -40, -110, -65, -35,
            40, 70, 45, 95, 50, 75, 99, 55,
            70, 90, 99, 110, 120, 130, 135,
            40, 70, 45, 95, 50, 75, 99, 55,
            -30, -55, -35, -60, -85, -40, -110, -65, -35,
            -105, -145, -170, -115, -140, -165, -145,
          ][loop_counter],
          10,
          10
        );
    }while(loop_counter--);

    // Draw lines.
    canvas_draw_path({
      'style': 'stroke',
      'vertices': [
        {// Top line.
          'type': 'moveTo',
          'x': -10,
          'y': -200,
        },
        {
          'x': 0,
          'y': 0,
        },
        {// Top-left line.
          'type': 'moveTo',
          'x': 0,
          'y': 0,
        },
        {
          'x': -157,
          'y': -157,
        },
        {// Top-right line.
          'type': 'moveTo',
          'x': 0,
          'y': 0,
        },
        {
          'x': 130,
          'y': -160,
        },
        {// Left line.
          'type': 'moveTo',
          'x': -200,
          'y': 25,
        },
        {
          'x': 0,
          'y': 0,
        },
        {// Right line.
          'type': 'moveTo',
          'x': 0,
          'y': 15,
        },
        {
          'x': 200,
          'y': 15,
        },
        {// Bottom-left line.
          'type': 'moveTo',
          'x': 0,
          'y': 0,
        },
        {
          'x': -105,
          'y': 165,
        },
        {// Bottom-right line.
          'type': 'moveTo',
          'x': 0,
          'y': 0,
        },
        {
          'x': 95,
          'y': 165,
        },
      ],
    });

    // Draw circle in middle of lines.
    canvas_draw_path({
      'properties': {
        'fillStyle': '#942',
      },
      'vertices': [
        {
          'endAngle': math_tau,
          'radius': 60,
          'startAngle': 0,
          'type': 'arc',
          'x': 0,
          'y': -9,
        },
      ],
    });

    // Draw mini cirlces in middle circle middle.
    loop_counter = 12;
    canvas_buffer.fillStyle = '#b64';
    do{
        canvas_draw_path({
          'vertices': [
            {
              'endAngle': math_tau,
              'radius': 9,
              'startAngle': 0,
              'type': 'arc',
              'x': [
                -35,
                -25,
                -20,
                -15,
                -10,
                -5,
                0,
                5,
                10,
                15,
                20,
                25,
                35,
              ][loop_counter],
              'y': [
                0,
                -35,
                -15,
                5,
                25,
                -30,
                -10,
                10,
                -45,
                -25,
                -5,
                15,
                -20,
              ][loop_counter],
            },
          ],
        });
    }while(loop_counter--);

    // Restore the buffer state.
    canvas_buffer.restore();
}

function repo_escape(){
    rotation = 0;
    canvas_draw();
}

function repo_init(){
    core_events_bind({
      'keybinds': {
        'all': {
          'todo': function(){
              rotation += 5;
              canvas_draw();
          },
        },
      },
      'mousebinds': {
        'mousedown': {
          'todo': function(){
              rotation += 5;
              canvas_draw();
          },
        },
      },
    });
    canvas_init();
}

function resize_logic(){
    canvas_buffer.font = '43pt sans-serif';
    canvas_buffer.lineWidth = 55;
    canvas_buffer.strokeStyle = '#e40';

    canvas_draw();
}

var rotation = 0;
