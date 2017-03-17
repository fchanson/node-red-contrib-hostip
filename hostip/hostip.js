
module.exports = function(RED) {
	"use strict";
	var os = require('os');

	function HostIP(n) {
		RED.nodes.createNode(this, n);
		this.name = n.name;
		var node = this;

		node.on("input", function(msg) {
			if (msg) {
				msg.payload = [];

				var interfaces = os.networkInterfaces();

				for ( var i in interfaces) {

					interfaces[i].forEach(function(details) {

						if (!details.internal) {
							delete details.netmask;
							delete details.mac;
							delete details.internal;

							msg.payload.push(details);

						}
					});

				}
				
				node.send(msg);

			}
		});

	}
	RED.nodes.registerType("hostip", HostIP);

};
