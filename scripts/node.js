#!/bin/bash
# Make user own /usr/local/  after all this is where we want OUR program to run :)
sudo chown -R $USER /usr/local

# Install node.js
sudo apt-get install -y python-software-properties
sudo apt-add-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

# install npm to /usr/local/
curl http://npmjs.org/install.sh | npm_config_prefix=/usr/local sh

# install nvm
git clone git://github.com/creationix/nvm.git ~/nvm
echo "# nvm config" >> ~/.bashrc
echo ". ~/nvm/nvm.sh" >> ~/.bashrc
