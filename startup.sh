#!/bin/sh

xrandr -o right

cd /home/fattali/hallway-screen && git pull
./install.sh
./run.sh