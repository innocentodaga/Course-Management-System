// set-packager-hostname.js

const { execSync } = require('child_process');
const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
}

const localIP = getLocalIP();
if (localIP) {
  console.log(`Setting REACT_NATIVE_PACKAGER_HOSTNAME to ${localIP}`);
  execSync(`setx /M REACT_NATIVE_PACKAGER_HOSTNAME ${localIP}`);
} else {
  console.error('Unable to determine local IP address.');
  process.exit(1);
}
