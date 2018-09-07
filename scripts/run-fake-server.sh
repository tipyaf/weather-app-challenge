#!/usr/bin/env bash

source "$(dirname ${0})/_variables.sh"

cd ${_project_dir}

json-server --watch fake-db/db.json