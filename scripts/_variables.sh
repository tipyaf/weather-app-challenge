#!/usr/bin/env bash

# Directories
_scripts_dir=$(dirname ${0})
_project_dir=${_scripts_dir}/..


# Colors
_color_red='\033[0;31m'     # Red
_color_green='\033[0;32m'   # Green
_color_yellow='\033[0;33m'  # Yellow
_color_purple='\033[0;35m'  # Purple
_color_cyan='\033[0;36m'    # Cyan
_color_off='\033[0m'        # Color Reset

# return 1 if global command line program installed, else 0
# example
# echo "node: $(program_is_installed node)"
function program_is_installed {
  # set to 1 initially
  local return_=1
  # set to 0 if not found
  $1 --version foo >/dev/null 2>&1 || { local return_=0; }
  # return value
  echo "$return_"
}

safeRunCommand() {
   cmnd="$@"                    #...insure whitespace passed and preserved
   $cmnd
   ERROR_CODE=$?                #...so we have it for the command we want
   if [ ${ERROR_CODE} != 0 ]; then
      printf "Error when executing command: '${command}'\n"
      exit ${ERROR_CODE}        #...consider 'return()' here
   fi
}
