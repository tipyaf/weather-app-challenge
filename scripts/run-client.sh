#!/usr/bin/env bash

# Include main variables
source "$(dirname ${0})/_variables.sh"

cd ${_project_dir}

#Require client's dependencies
if [ -d "node_modules" ]; then
   echo -e "${_color_purple} \n\n Dependencies already installed \n ${_color_off}"

else
    safeRunCommand "npm i"

fi

# Run Client
safeRunCommand "npm run start"


exit 0
