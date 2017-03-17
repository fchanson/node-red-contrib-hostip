# node-red-contrib-hostip

This node provides the IP address of the machine hosting the Node-red.

### Install

From your node-red directory:

    npm install node-red-contrib-hostip
    
or
    
in the Node-red, Manage palette, Install node-red-contrib-hostip



### Usage

<p>This node provides the IP address of the machine hosting the Node-red.</p>
    <p>The output message contains all IP addresses <b>(but not the internal ones)</b>.</p>
    <p>The output <b>msg.payload</b> is an Array and contains for each address : </p>
    <ul>
        <li>address : the IP address.</li>
        <li>family : the IP family (IPv4 or IPV6).</li>
        <li>scopeid : the Scope ID in case of IPv6.</li>
    </ul>
