'use strict';

function circle(i0, i1, i2, i3, xx){
    var q = [
      i0 + x - i2 / 2,
      i1 + y - i3 / 2,
      i0 + x,
      i1 + y,
      (i2 / 2) * .5522848,
      (i3 / 2) * .5522848,
    ];
    xx.moveTo(
      q[0],
      q[3]
    );
    xx.bezierCurveTo(
      q[0],
      q[3] - q[5],
      q[2] - q[4],
      q[1],
      q[2],
      q[1]
    );
    xx.bezierCurveTo(
      q[2] + q[4],
      q[1],
      q[2] + i2 / 2,
      q[3] - q[5],
      q[2] + i2 / 2,
      q[3]
    );
    xx.bezierCurveTo(
      q[2] + i2 / 2,
      q[3] + q[5],
      q[2] + q[4],
      q[3] + i3 / 2,
      q[2],
      q[3] + i3 / 2
    );
    xx.bezierCurveTo(
      q[2] - q[4],
      q[3] + i3 / 2,
      q[0],
      q[3] + q[5],
      q[0],
      q[3]
    );
}

function draw(){
    canvas.drawImage(
      document.getElementById('buffer'),
      0,
      0
    );

    // Variable to check if mouse is over some UI.
    var mouse_over_ui = false;

    // Check if mouse is over UI tab buttons or off the canvas.
    if((core_mouse['x'] <= 200 && core_mouse['y'] <= 50)
     || core_mouse['y'] > document.getElementById('canvas').height){
        mouse_over_ui = true;

    }else if(core_mouse['y'] >= 50
      && ui_selected != 0){
        // If tool seletion tab open, check if mouse over tool list.
        if(ui_selected === 1){
            if(core_mouse['x'] <= 50
              && core_mouse['y'] <= 254){
                mouse_over_ui = true;
            }

        // If color selection or settings tabs open, check if mouse over them.
        }else if(ui_selected === 2
          || ui_selected === 3){
            if(core_mouse['x'] <= 350
              && core_mouse['y'] <= (ui_selected === 3 ? 356 : 305)){
                mouse_over_ui = true;
            }

        // If save/load tab open, check if mouse is over that.
        }else if(ui_selected === 4
          && core_mouse['x'] <= 200
          && core_mouse['y'] <= 153){
            mouse_over_ui = true;
        }
    }

    if(!mouse_over_ui){
        if(object_count > 0){
            // If X locked, set core_mouse['x'] to x of most recently placed object.
            if(lock[1]){
                core_mouse['x'] = objects[object_count * 11 - 10] + x;
            }

            // If Y locked, set core_mouse['y'] to y of most recently placed object.
            if(lock[0]){
                core_mouse['y'] = objects[object_count * 11 - 9] + y;
            }
        }

        canvas.beginPath();
        // If any tool except for line tool is selected, draw sample object.
        if(display_ui
          && selected_tool != 0){
            // Save current canvas state.
            canvas.save();

            // Setup translate/rotate for sample object.
            canvas.translate(
              core_mouse['x'],
              core_mouse['y']
            );
            canvas.rotate(settings[2] * math_degree);

            if(selected_tool === 3){
                circle(
                  -x,
                  -y,
                  settings[3],
                  settings[4],
                  canvas
                );

            }else if(selected_tool === 2){
                canvas.rect(
                  -settings[3] / 2,
                  -settings[4] / 2,
                  settings[3],
                  settings[4]
                );

            }else if(selected_tool === 1){
                canvas.moveTo(
                  0,
                  -settings[3] / 2
                );
                canvas.lineTo(
                  settings[3] / 2,
                  settings[4] / 2
                );
                canvas.lineTo(
                  -settings[3] / 2,
                  settings[4] / 2
                );
            }

            // Restore canvas state.
            canvas.restore();

            canvas.fillStyle='rgba('
              + colors[0][0] + ', '
              + colors[0][1] + ', '
              + colors[0][2] + ', '
              + (settings[1] / 100) + ')';
            canvas.fill();

        // If line_start placed but ending not yet set, draw line from start to mouse.
        }else if(line_start['x'] != -1){
            canvas.moveTo(
              line_start['x'] + x,
              line_start['y'] + y
            );
            canvas.lineTo(
              core_mouse['x'],
              core_mouse['y']
            );
            canvas.strokeStyle = 'rgba('
              + colors[0][0] + ','
              + colors[0][1] + ','
              + colors[0][2] + ','
              + (settings[1] / 100) + ')';
            canvas.lineWidth = settings[0];
            canvas.stroke();
        }
        canvas.closePath();
    }

    if(!display_ui){
        return;
    }

    canvas.lineWidth = 2;
    canvas.strokeStyle = '#000';

    // Draw settings tab icon.
    canvas.beginPath();
    canvas.translate(
      100,
      0
    );
    canvas.rect(
      0,
      0,
      50,
      50
    );
    canvas.translate(
      -100,
      0
    );
    canvas.closePath();
    canvas.fillStyle = canvas.createPattern(
      gear_image,
      'repeat'
    );
    canvas.fill();
    canvas.stroke();

    // Draw tool and save/load tab backgrounds.
    canvas.beginPath();
    canvas.rect(
      0,
      0,
      50,
      50
    );
    canvas.rect(
      150,
      0,
      50,
      50
    );
    canvas.closePath();
    canvas.fillStyle = '#444';
    canvas.fill();
    canvas.stroke();

    // Draw three rectangles for the save/load tab icon.
    canvas.fillStyle = '#ddd';
    canvas.fillRect(
      155,
      5,
      40,
      10
    );
    canvas.fillRect(
      155,
      20,
      40,
      10
    );
    canvas.fillRect(
      155,
      35,
      40,
      10
    );

    canvas.fillStyle = '#444';
    // If colors tab is selected, draw UI.
    if(ui_selected === 2){
        canvas.beginPath();
        canvas.rect(
          100,
          50,
          150,
          255
        );

        var loop_counter = 4;
        do{
            canvas.rect(
              250,
              50 + 51 * loop_counter,
              100,
              51
            );
        }while(loop_counter--);

        canvas.closePath();
        canvas.fill();
        canvas.stroke();

        loop_counter = 4;
        do{
            canvas.beginPath();
            canvas.rect(
              0,
              50 + 51 * loop_counter,
              50,
              51
            );
            canvas.closePath();
            canvas.fillStyle = 'rgb('
              + colors[loop_counter + 5][0] + ', '
              + colors[loop_counter + 5][1] + ', '
              + colors[loop_counter + 5][2] + ')';
            canvas.fill();
            canvas.stroke();

            canvas.beginPath();
            canvas.rect(
              50,
              50 + 51 * loop_counter,
              50,
              51
            );
            canvas.closePath();
            canvas.fillStyle = 'rgb('
              + colors[loop_counter][0] + ', '
              + colors[loop_counter][1] + ', '
              + colors[loop_counter][2] + ')';
            canvas.fill();
            canvas.stroke();
        }while(loop_counter--);

        canvas.beginPath();

        loop_counter = 2;
        do{
            canvas.rect(
              100 + 50 * loop_counter,
              305,
              50,
              -colors[0][loop_counter]
            );
        }while(loop_counter--);

        canvas.closePath();
        canvas.fill();
        canvas.stroke();
        canvas.fillStyle = '#ddd';
        canvas.fillText(
          colors[0][0],
          255,
          85
        );
        canvas.fillText(
          colors[0][1],
          255,
          136
        );
        canvas.fillText(
          colors[0][2],
          255,
          187
        );
        canvas.fillText(
          'Random',
          255,
          238
        );
        canvas.fillText(
          'Set BG',
          255,
          289
        );

    // If tools tab is selected, draw UI.
    }else if(ui_selected === 1){
        canvas.beginPath();
        var loop_counter = 3;
        do{
            canvas.rect(
              0,
              50 + 51 * loop_counter,
              50,
              51
            );
        }while(loop_counter--);
        canvas.closePath();
        canvas.fill();
        canvas.stroke();

    // If settings tab is selected, draw UI.
    }else if(ui_selected === 3){
        canvas.beginPath();
        var loop_counter = 4;
        do{
            canvas.rect(
              0,
              50 + 51 * loop_counter,
              250,
              51
            );
            canvas.rect(
              250,
              50 + 51 * loop_counter,
              50,
              51
            );
            canvas.rect(
              300,
              50 + 51 * loop_counter,
              50,
              51
            );
        }while(loop_counter--);
        canvas.rect(
          0,
          305,
          175,
          51
        );
        canvas.rect(
          175,
          305,
          175,
          51
        );
        canvas.closePath();
        canvas.fill();
        canvas.stroke();

        canvas.fillStyle = '#ddd';

        loop_counter = 4;
        do{
            canvas.fillText(
              settings[loop_counter] + [
                'px Line Width',
                '% Opacity',
                '° Rotation',
                'px Width (X)',
                'px Height (Y)'
              ][loop_counter],
              10,
              85 + 51 * loop_counter
            );
            canvas.fillText(
              '-1',
              265,
              85 + 51 * loop_counter
            );
            canvas.fillText(
              '+1',
              310,
              85 + 51 * loop_counter
            );
        }while(loop_counter--);

        canvas.fillText(
          (lock[0] ? 'Unl' : 'L') + 'ock X',
          10,
          340
        );
        canvas.fillText(
          (lock[1] ? 'Unl' : 'L') + 'ock Y',
          185,
          340
        );

    // If save/load tab is selected, draw UI.
    }else if(ui_selected === 4){
        canvas.beginPath();
        var loop_counter = 1;
        do{
            canvas.rect(
              0,
              50 + 51 * loop_counter,
              200,
              51
            );
        }while(loop_counter--);
        canvas.closePath();
        canvas.fill();
        canvas.stroke();

        canvas.fillStyle = '#ddd';
        canvas.fillText(
          'Load from .txt',
          10,
          85
        );
        canvas.fillText(
          'Save as .txt',
          10,
          136
        );
    }

    // Draw selected color as tab background.
    canvas.beginPath();
    canvas.rect(
      50,
      0,
      50,
      50
    );
    canvas.closePath();
    canvas.fillStyle = 'rgb('
      + colors[0][0] + ', '
      + colors[0][1] + ', '
      + colors[0][2] + ')';
    canvas.fill();
    canvas.stroke();

    // Draw selected tool as tab icon.
    canvas.fillStyle = '#ddd';

    // Draw rectangle tool.
    if(selected_tool === 2){
        canvas.fillRect(
          10,
          10,
          30,
          30
        );

    }else{
        canvas.beginPath();
        // Draw line tool.
        if(selected_tool === 0){
            canvas.strokeStyle = '#ddd';
            canvas.lineWidth = 4;
            canvas.moveTo(
              10,
              40
            );
            canvas.lineTo(
              40,
              10
            );
            canvas.stroke();

        // Draw triangle tool.
        }else if(selected_tool === 1){
            canvas.moveTo(
              25,
              10
            );
            canvas.lineTo(
              40,
              40
            );
            canvas.lineTo(
              10,
              40
            );
            canvas.fill();

        // Draw cirlce tool.
        }else if(selected_tool === 3){
            canvas.arc(
              25,
              25,
              15,
              0,
              math_tau,
              false
            );
            canvas.fill();
        }
        canvas.closePath();
    }

    // If tool selection UI tab is open, draw tools.
    if(ui_selected === 1){
        canvas.strokeStyle = '#fff';
        canvas.lineWidth = 4;

        // Draw line tool.
        canvas.beginPath();
        canvas.moveTo(
          10,
          90
        );
        canvas.lineTo(
          40,
          60
        );
        canvas.stroke();

        // Draw triangle tool.
        canvas.moveTo(
          25,
          111
        );
        canvas.lineTo(
          40,
          141
        );
        canvas.lineTo(
          10,
          141
        );
        canvas.fill();
        canvas.closePath();

        canvas.beginPath();
        // Draw circle tool.
        canvas.arc(
          25,
          228,
          15,
          0,
          math_tau,
          false
        );

        // Draw rectangle tool.
        canvas.rect(
          10,
          162,
          30,
          30
        );

        canvas.closePath();
        canvas.fill();
    }
}

function mousepress(){
    // If pressed opacity setting buttons.
    if(mousepress_info[0] === 1){
        settings[1] = mousepress_info[1]
          ? (settings[1] < 100
            ? settings[1] + 1
            : 0
          )
          : (settings[1] < 1
            ? 100
            : settings[1] - 1
          );

    // If pressed rotation setting buttons.
    }else if(mousepress_info[0] === 2){
        settings[2] = mousepress_info[1]
          ? (settings[2] < 359
            ? settings[2] + 1
            : 0
          )
          : (settings[2] < 1
            ? 359
            : settings[2] - 1
          );

    // All other setting buttons.
    }else{
        settings[mousepress_info[0]] = mousepress_info[1]
          ? settings[mousepress_info[0]] + 1
          : (settings[mousepress_info[0]] < 2
            ? 1
            : settings[mousepress_info[0]] - 1
          );
    }

    // If mouse is still pressed.
    if(core_mouse['down']){
        // Repeat this function in 50ms.
        mousepress_repeat = window.setTimeout(
          mousepress,
          50
        );

    // Else reset mousepress_info.
    }else{
        mousepress_info = -1;
    }

    draw();
}

function new_image(path){
    var image = new Image();
    image.src = path;
    return image;
}

function repo_escape(){
    ui_selected = 0;
    line_start = {
      'x': -1,
      'y': -1,
    };
    draw();
}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(){
            if(object_count > 0){
                return 'Did you save your work?';
            }
        },
      },
      'keybinds': {
        48: {
          'todo': function(){
              colors[0] = [
                core_random_integer(),
                core_random_integer(),
                core_random_integer(),
              ];
              draw();
          }
        },
        49: {
          'todo': function(){
              line_start = {
                'x': -1,
                'y': -1,
              };
              selected_tool = 0;
              draw();
          },
        },
        50: {
          'todo': function(){
              line_start = {
                'x': -1,
                'y': -1,
              };
              selected_tool = 1;
              draw();
          },
        },
        51: {
          'todo': function(){
              line_start = {
                'x': -1,
                'y': -1,
              };
              selected_tool = 2;
              draw();
          },
        },
        52: {
          'todo': function(){
              line_start = {
                'x': -1,
                'y': -1,
              };
              selected_tool = 3;
              draw();
          },
        },
        72: {
          'todo': function(){
              display_ui = !display_ui;
              draw();
          },
        },
        89: {
          'todo': function(){
              if(objects_undo.length > 0){
                  var loop_counter = 10;
                  do{
                      objects.push(
                        objects_undo[objects_undo.length - 1 - loop_counter]
                      );
                  }while(loop_counter--);

                  objects_undo.splice(
                    objects_undo.length - 11,
                    11
                  );
                  object_count += 1;
                  update_buffer();
              }
          },
        },
        90: {
          'todo': function(){
              if(object_count > 0){
                  var loop_counter = 10;
                  do{
                      objects_undo.push(
                        objects[objects.length - 1 - loop_counter]
                      );
                  }while(loop_counter--);

                  objects.splice(objects.length - 11, 11);
                  object_count -= 1;
                  update_buffer();
              }
          },
        },
      },
      'mousebinds': {
        'mousedown': {
          'todo': function(event){
              // Only check for left clicks.
              if(event.which != 1){
                  return;
              }

              event.preventDefault();

              // Variable to check if mouse is over some UI.
              var mouse_over_ui = false;

              if(display_ui){
                  // Check if mouse is over UI tab buttons or off the canvas.
                  if((core_mouse['x'] <= 200
                    && core_mouse['y'] <= 50)
                    || core_mouse['x'] > document.getElementById('canvas').width
                    || core_mouse['y'] > document.getElementById('canvas').height){
                      mouse_over_ui = true;

                  }else if(core_mouse['y'] >= 50){
                      // If tool seletion tab open, check if mouse over tool list.
                      if(ui_selected === 1){
                          if(core_mouse['x'] <= 50
                            && core_mouse['y'] <= 254){
                              mouse_over_ui = true;
                          }

                      // If color selection or settings tabs open, check if mouse over them.
                      }else if(ui_selected === 2
                        || ui_selected === 3){
                          if(core_mouse['x'] <= 350
                            && core_mouse['y'] <= 305 + (ui_selected === 3 ? 51 : 0)){
                              mouse_over_ui = true;
                          }

                      // If save/load tab open, check if mouse is over that.
                      }else if(ui_selected === 4
                        && core_mouse['x'] <= 200
                        && core_mouse['y'] <= 203){
                          mouse_over_ui = true;
                      }
                  }
              }

              // If UI is hidden or mouse is not over some UI.
              if(!mouse_over_ui){
                  if(object_count > 0){
                      // If X locked, set core_mouse['x'] to x of most recently placed object.
                      if(lock[1]){
                          core_mouse['x'] = objects[object_count * 11 - 10] + x;
                      }

                      // If Y locked, set core_mouse['y'] to y of most recently placed object.
                      if(lock[0]){
                          core_mouse['y'] = objects[object_count * 11 - 9] + y;
                      }
                  }

                  // If not using line tool or line_start already set.
                  if(selected_tool != 0
                    || line_start['x'] != -1){
                      objects_undo = [];
                      objects.push(selected_tool);// Object type
                      objects.push(core_mouse['x'] - x);// X position
                      objects.push(core_mouse['y'] - y);// Y position
                      objects.push(settings[0]);// Line width
                      objects.push(colors[0][0]);// Red color
                      objects.push(colors[0][1]);// Green color
                      objects.push(colors[0][2]);// Blue color
                      objects.push(line_start['x'] != -1
                        ? line_start['x']
                        : settings[3]
                      );// Line_start X or object width
                      objects.push(line_start['y'] != -1
                        ? line_start['y']
                        : settings[4]
                      );// Line_start Y or object height
                      objects.push(settings[2]);// Object rotation
                      objects.push(settings[1]);// Object opacity

                      // Reset line_start.
                      line_start = {
                        'x': -1,
                        'y': -1,
                      };

                      // New object is added.
                      object_count += 1;

                  // If using line tool and line_start not already set.
                  }else{
                      line_start = {
                        'x': core_mouse['x'] - x,
                        'y': core_mouse['y'] - y,
                      };
                  }

                  update_buffer();
              }

              // Only handle mouse clicks if UI is displayed.
              if(!display_ui){
                  return;
              }

              var update = false;

              // Clicked on UI tab buttons.
              if(core_mouse['y'] <= 50){
                  var loop_counter = 3;
                  do{
                      if(core_mouse['x'] >= 50 * loop_counter
                        && core_mouse['x'] < 50 + 50 * loop_counter){
                          ui_selected = ui_selected != loop_counter + 1
                            ? loop_counter + 1
                            : 0;
                          update = true;
                      }
                  }while(loop_counter--);

              }else{
                  // Tool selection UI tab.
                  if(ui_selected === 1){
                      if(core_mouse['x'] <= 50
                        && core_mouse['y'] <= 254){
                          selected_tool = Math.floor((core_mouse['y'] - 51) / 51);
                          line_start = {
                            'x': -1,
                            'y': -1,
                          };
                          update = true;
                      }

                  // Color UI tab.
                  }else if(ui_selected === 2){
                      if(core_mouse['y'] <= 305){
                          // Clicked on saved colors, swap colors.
                          if(core_mouse['x'] <= 100){
                              var temp = colors[0];
                              var temp_clicked = Math.floor((core_mouse['y'] - 51) / 51)
                                + (core_mouse['x'] <= 50 ? 5 : 0);
                              colors[0] = colors[temp_clicked];
                              colors[temp_clicked] = temp;
                              update = true;

                          // Clicked on red color bar, set red.
                          }else if(core_mouse['x'] <= 150){
                              colors[0][0] = 305 - core_mouse['y'];
                              update = true;

                          // Clicked on green color bar, set green.
                          }else if(core_mouse['x'] <= 200){
                              colors[0][1] = 305 - core_mouse['y'];
                              update = true;

                          // Clicked on blue color bar, set blue.
                          }else if(core_mouse['x'] <= 250){
                              colors[0][2] = 305 - core_mouse['y'];
                              update = true;

                          // Right side buttons.
                          }else if(core_mouse['x'] <= 350){
                              // Clicked on red color value, randomize red.
                              if(core_mouse['y'] <= 101){
                                  colors[0][0] = core_random_integer();

                              // Clicked on green color value, randomize green.
                              }else if(core_mouse['y'] <= 152){
                                  colors[0][1] = core_random_integer();

                              // Clicked on blue color value, randomize blue.
                              }else if(core_mouse['y'] <= 203){
                                  colors[0][2] = core_random_integer();

                              // Clicked on Random.
                              }else if(core_mouse['y'] <= 254){
                                  colors[0] = [
                                    core_random_integer(),
                                    core_random_integer(),
                                    core_random_integer(),
                                  ];

                              // Clicked on Set BG.
                              }else if(core_mouse['y'] <= 305){
                                  background = [
                                    colors[0][0],
                                    colors[0][1],
                                    colors[0][2],
                                  ];
                              }
                              update = true;
                          }
                      }

                  // Settings UI tab.
                  }else if(ui_selected === 3){
                      if(core_mouse['y'] > 305
                        && core_mouse['y'] <= 356){
                          // Clicked on Lock X.
                          if(core_mouse['x'] <= 175){
                              lock[0] = !lock[0];
                              update = true;

                          // Clicked on Lock Y.
                          }else if(core_mouse['x'] <= 350){
                              lock[1] = !lock[1];
                              update = true;
                          }

                      }else{
                          // Loop through all 5 settings.
                          var loop_counter = 4;
                          do{
                              if(core_mouse['y'] <= 50 + 51 * loop_counter
                                || core_mouse['y'] > 101 + 51 * loop_counter){
                                  continue;
                              }

                              // Clicked on -.
                              if(core_mouse['x'] >= 250
                                && core_mouse['x'] <= 300){
                                  // Opacity cannot be below 0.
                                  if(loop_counter === 1){
                                      settings[1] = settings[1] < 1
                                        ? 100
                                        : settings[1] - 1;

                                  // Rotation cannot be below 0.
                                  }else if(loop_counter === 2){
                                      settings[2] = settings[2] < 1
                                        ? 359
                                        : settings[2] - 1;

                                  // All other settings cannot be below 1.
                                  }else{
                                      settings[loop_counter] = settings[loop_counter] > 2
                                        ? settings[loop_counter] - 1
                                        : 1;
                                  }

                                  mousepress_info = [
                                    loop_counter,
                                    0,
                                  ];

                              // Clicked on +.
                              }else if(core_mouse['x'] > 300
                                && core_mouse['x'] <= 350){
                                  // Opacity cannot be above 100.
                                  if(loop_counter === 1){
                                      settings[1] = settings[1] > 99
                                        ? 0
                                        : settings[1] + 1;

                                  // Rotation cannot be above 359.
                                  }else if(loop_counter === 2){
                                      settings[2] = settings[2] > 358
                                        ? 0
                                        : settings[2] + 1;

                                  // All other settings aren't limited.
                                  }else{
                                      settings[loop_counter] += 1;
                                  }

                                  mousepress_info = [
                                    loop_counter,
                                    1,
                                  ];
                              }

                              // Click and hold.
                              if(mousepress_info != -1){
                                  update = true;
                                  mousepress_repeat = window.setTimeout(
                                    mousepress,
                                    750
                                  );
                              }
                          }while(loop_counter--);
                      }

                  // Save/load UI tab.
                  }else if(ui_selected === 4
                    && core_mouse['x'] <= 200){
                      // Clicked on Load from .txt.
                      if(core_mouse['y'] <= 101){
                          var savefile_string = window.prompt(
                            'Input savefile string:',
                            ''
                          ).split(',');

                          // Add each object.
                          if(savefile_string.length % 11 === 0){
                              objects = savefile_string;

                              var loop_counter = objects.length - 1;
                              do{
                                  objects[loop_counter] = parseInt(
                                    objects[loop_counter],
                                    10
                                  );
                              }while(loop_counter--);

                              object_count = Math.floor(objects.length / 11);

                              line_start = {
                                'x': -1,
                                'y': -1,
                              };
                          }
                          update = true;

                      // Clicked on Save as .txt.
                      }else if(core_mouse['y'] <= 152){
                          window.prompt(
                            'Save this string:',
                            objects
                          );
                      }
                  }
              }

              if(update){
                  update_buffer();
              }
          },
        },
        'mousemove': {
          'todo': draw,
        },
        'mouseup': {
          'todo': function(){
              clearTimeout(mousepress_repeat);
          },
        },
      },
      'title': 'ArtEditor.htm',
    });

    var loop_counter = 9;
    do{
        colors.push([
          core_random_integer(),
          core_random_integer(),
          core_random_integer(),
        ]);
    }while(loop_counter--);

    resize();

    window.onresize = resize;
}

function resize(){
    document.getElementById('buffer').height = window.innerHeight;
    document.getElementById('canvas').height = document.getElementById('buffer').height;
    y = document.getElementById('canvas').height / 2;

    document.getElementById('buffer').width = window.innerWidth;
    document.getElementById('canvas').width = document.getElementById('buffer').width;
    x = document.getElementById('canvas').width / 2;

    canvas.font = '18pt sans-serif';
    update_buffer();
}

function update_buffer(){
    // Draw clearing rect with background color over previous buffer.
    buffer.fillStyle = 'rgb('
      + background[0] + ', '
      + background[1] + ', '
      + background[2] + ')';
    buffer.fillRect(
      0,
      0,
      document.getElementById('buffer').width,
      document.getElementById('buffer').height
    );

    if(object_count > 0){
        var loop_counter = object_count - 1;
        do{
            buffer_object = [];
            var j = 10;
            var q = object_count - loop_counter - 1;

            // Add object properties to temp buffer_object.
            do{
                buffer_object.push(
                  objects[q * 11 + (10 - j)]
                );
            }while(j--);

            buffer.beginPath();
            // Draw non-line objects on buffer.
            if(buffer_object[0] != 0){
                // Save current buffer state.
                buffer.save();

                // Setup translate/rotate for object.
                buffer.translate(
                  buffer_object[1] + x,
                  buffer_object[2] + y
                );
                buffer.rotate(buffer_object[9] * math_degree);

                // Draw cirlce object on buffer.
                if(buffer_object[0] === 3){
                    circle(
                      -x,
                      -y,
                      buffer_object[7],
                      buffer_object[8],
                      buffer
                    );

                // Draw rectangle object on buffer.
                }else if(buffer_object[0] === 2){
                    buffer.rect(
                      -buffer_object[7] / 2,
                      -buffer_object[8] / 2,
                      buffer_object[7],
                      buffer_object[8]
                    );

                // Draw triangle object on buffer.
                }else{
                    buffer.moveTo(
                      0,
                      -buffer_object[8] / 2
                    );
                    buffer.lineTo(
                      buffer_object[7] / 2,
                      buffer_object[8] / 2
                    );
                    buffer.lineTo(
                      -buffer_object[7] / 2,
                      buffer_object[8] / 2
                    );
                }

                // Restore buffer state.
                buffer.restore();

                buffer.fillStyle = 'rgba('
                  + buffer_object[4] + ', '
                  + buffer_object[5] + ', '
                  + buffer_object[6] + ', '
                  + (buffer_object[10] / 100) + ')';
                buffer.fill();

            // Draw line object on buffer.
            }else{
                buffer.moveTo(
                  buffer_object[1] + x,
                  buffer_object[2] + y
                );
                buffer.lineTo(
                  buffer_object[7] + x,
                  buffer_object[8] + y
                );
                buffer.strokeStyle = 'rgba('
                  + buffer_object[4] + ', '
                  + buffer_object[5] + ', '
                  + buffer_object[6] + ', '
                  + (buffer_object[10] / 100) + ')';
                buffer.lineWidth = buffer_object[3];
                buffer.stroke();
            }
            buffer.closePath();

        }while(loop_counter--);
    }

    draw();
}

var background = [
  0,
  0,
  0,
];
var buffer = document.getElementById('buffer').getContext('2d');
var buffer_object = [];
var canvas = document.getElementById('canvas').getContext('2d');
var colors = [];
var display_ui = true;
var gear_image = new_image('../common/images/gear.png');
var line_start = {
  'x': -1,
  'y': -1,
};
var lock = [
  false,
  false,
];
var mousepress_info = -1;
var mousepress_repeat = 0;
var object_count = 0;
var objects = [];
var objects_undo = [];
var selected_tool = 2;
var settings = [
  4,
  100,
  0,
  50,
  50,
];
var ui_selected = 0;
var x = 0;
var y = 0;
