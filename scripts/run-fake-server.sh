#!/usr/bin/env bash

# Include main variables
source "$(dirname ${0})/_variables.sh"

cd ${_project_dir}

json-server --watch fake-server/db.json
