#!/usr/bin/env bash

# Include main variables
source "$(dirname ${0})/_variables.sh"

cd ${_project_dir}

echo -e "${_color_cyan} \n\n Tools verification \n ${_color_off}"

# Require Node
if [[ $(program_is_installed node) == 1 ]]; then
    echo -e "- Node : ${_color_green}$(node --version)${_color_off}"
else
    echo -e "- Node : ${_color_red}Not installed. Please download & install NodeJS.${_color_off}"
    exit 1
fi

# Require NPM
if [[ $(program_is_installed npm) == 1 ]]; then
    echo -e "- NPM : ${_color_green}$(npm --version)${_color_off}"
else
    echo -e "- NPM : ${_color_red}Not installed. Please download & install NPM.${_color_off}"
    exit 1
fi

# Require json-server
if [[ $(program_is_installed json-server) == 1 ]]; then
    echo -e "- Json-server : ${_color_green}$(json-server -v )${_color_off}"
else
    echo -e "- Json-server : ${_color_red}Not installed. ${_color_off}"
    echo -e "${_color_yellow}Start install json-server globally ${_color_off}"
    safeRunCommand "npm i json-server -g"
fi

# Install client
safeRunCommand "npm i"

#Ask to run server
echo -e "${_color_red}Do you wish to run json-server ?${_color_off}"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) safeRunCommand "bash scripts/run-fake-server.sh"; break;;
        No ) break;;
    esac
done

exit 0
