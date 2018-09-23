#!/usr/bin/env bash

# Include main variables
source "$(dirname ${0})/_variables.sh"

cd ${_project_dir}

echo -e "${_color_cyan} \n\n Tools verification \n ${_color_off}"


#Ask to uninstall client
if [ -d "node_modules" ]; then
    echo -e "${_color_red}Do you wish to uninstall client's dependencies?${_color_off}"
    select yn in "Yes" "No"; do
        case $yn in
            Yes )   safeRunCommand "rm -rf node_modules";
                    echo -e "${_color_purple}node_modules removed !${_color_off}"
                break;;
            No ) echo -e "${_color_purple}node_modules not removed.${_color_off}"; break;;
        esac
    done

else
    echo -e "- client dependencies : ${_color_red}Not installed. ${_color_off}"

fi

echo -e "${_color_green}Enjoy !  :)${_color_off}"

exit 0
