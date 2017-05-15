# node-red-contrib-hostip

This node provides the IP address of the machine hosting the Node-red.

### Install

From your node-red directory:

    npm install node-red-contrib-hostip
    
or
    
in the Node-red, Manage palette, Install node-red-contrib-hostip



### Usage

This node provides the IP address of the machine hosting the Node-red.<p>
The output message contains all IP addresses **(but not the internal ones)**.<br>
The output **msg.payload** is an Array and contains for each address : <br>


- address : the IP address.
- family : the IP family (IPv4 or IPV6).
- scopeid : the Scope ID in case of IPv6.

### License 

MIT License