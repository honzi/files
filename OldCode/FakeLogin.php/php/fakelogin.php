<?php

// Wait a random number of microseconds.
usleep(mt_rand(100000, 3000000));

// Return to form, with an "error".
header('Location:../?invalid');
