var Kafka = require('node-rdkafka');
var driver_options = {
    //'debug': 'all',
    'metadata.broker.list': 'light-insecure-kafka-bootstrap-tonye1cpi4.cp4intpg-wdc04-bk5i4x-8946bbc006b7c6eb0829d088919818bb-0000.us-east.containers.appdomain.cloud:443',
    'security.protocol': 'sasl_ssl',
    'ssl.ca.location': '/Users/tonyefremenko/Documents/sandbox/mq/kafka/tonytopicstarter_properties/truststore.p12',
    'sasl.mechanisms': 'PLAIN',
    'sasl.username': 'token',
    'sasl.password': 'gC2kM0fmwxtztuB4hCWMnRZ4ReLBg8Js3jBssCJhyQDe',
    'broker.version.fallback': '0.10.0',
    'log.connection.close' : false,
    'client.id': 'Es-NodeJS-101'
};
var topicName = "MyTopic"