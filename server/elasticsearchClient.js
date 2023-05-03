const { Client } = require('@elastic/elasticsearch');

// elasticsearch_endpoint = "https://25e665ec665e4a23a5d31c4ab3231601.us-central1.gcp.cloud.es.io"
// elasticsearch_port = "9243"
// elasticsearch_user = "jmac"
// elasticsearch_password="W0mbat"


elasticsearch_endpoint = process.env.ELASTICSEARCH_URL;
elasticsearch_port = process.env.ELASTICSEARCH_PORT;
elasticsearch_user = process.env.ELASTICSERCH_USER;
elasticsearch_password=process.env.ELASTICSERCH_PASSWORD;


// Elasticsearch client
const client = new Client({
  node: elasticsearch_endpoint+":"+elasticsearch_port, // Replace with your Elasticsearch instance
  auth: {
    username: elasticsearch_user,
    password: elasticsearch_password,
  },
});

module.exports = client;
