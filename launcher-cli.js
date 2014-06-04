var rocketlauncher = require('./launcher');
var keypress = require('keypress');

keypress(process.stdin);

launcher = new rocketlauncher.RocketLauncher();

var queued_command = '';

process.stdin.on('keypress', function(chunk, key) {

    console.log(key);
    console.log(chunk);

    if(key && key.ctrl && key.name == 'c')
    {
      launcher.quit();
    }
    else if(key && key.name == 'j')
    {
      launcher.up();
    }
    else if(key && key.name == 'k')
    {
      launcher.down();
    }
    else if(key && key.name == 'h')
    {
      launcher.left();
    }
    else if(key && key.name == 'l')
    {
      launcher.right();
    }
    else if(key && key.name == 'g')
    {
      launcher.shoot();
    }
    else if(key && key.name == 'f')
    {
      launcher.stop();
    }
    else if(key && key.name == 'd')
    {
      launcher.boom();
    }
    else if(key && key.name == "enter")
    {
      launcher.runCommand(queued_command);
      queued_command = "";
    }
    else
    {
      queued_command = queued_command + chunk;
      console.log("Queued command is: " + queued_command + "\n");
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();
