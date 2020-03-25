#!/usr/bin/env bash
echo "Creating users..."
mongo admin --host localhost -u root -p root --eval "db.createUser({user: 'rpuser', pwd: 'rppass',roles: [{role: 'readWrite', db: 'MyAppDb'}]}); db.createUser({user: 'rpadmin', pwd: 'rpadmin', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});"
echo "Users created."