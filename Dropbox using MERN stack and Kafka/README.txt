
Install ReactJS

On the terminal: npm install -g create-react-app

Follow the steps on the terminal to start the servers:

1) Start the Zookeeper Server
	zkserver

2) Start the Kafka Server
	1. cd C:\kafka_2.11-0.11.0.1
	2. .\bin\windows\kafka-server-start.bat .\config\server.properties
	
3) Create the Kafka Topics - Request and Response 
	1. .\bin\windows\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic Topic3
	2. .\bin\windows\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic Topic3res

3) Kafkka Back-end server
	1. cd kafka-nodelogin
	2. npm install
	3. npm start

4) Back-end server
	1. cd nodelogin
	2. npm install
	3. npm start

5) Front-end server
	1. cd reactlogin
	2. npm install
	3. npm start
