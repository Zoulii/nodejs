const isPortReachable = require('is-port-reachable');

exports.tls = async (req, res) => {
    const port80 = (await isPortReachable(80, { host: 'google.com' }));
    const port443 = (await isPortReachable(443, { host: 'google.com' }));

    res.status(200).send({
        "port80": port80 ? "port 80 is reachable" : "port 80 is not reachable",
        "port443": port443 ? "port 443 is reachable" : "port 443 is not reachable"
    });

};
