# docker run --rm -it -e VCAP_SERVICES=${VCAP_SERVICES} node-rdkafka
# OR
# docker run --rm -it node-rdkafka <kafka_brokers_sasl> <api_key> /etc/ssl/certs
#docker run --rm -it node-rdkafka kafka_brokers_sasl gC2kM0fmwxtztuB4hCWMnRZ4ReLBg8Js3jBssCJhyQDe /Users/tonyefremenko/Documents/sandbox/mq/kafka/tonytopicstarter_properties/truststore.p12
docker run --rm -it node-rdkafka kafka_brokers_sasl gC2kM0fmwxtztuB4hCWMnRZ4ReLBg8Js3jBssCJhyQDe /etc/ssl/certs
