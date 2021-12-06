const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "",
    APISecret: "",
  },
  production: {
    APIKey: "8Ui0GnXoQzOjntKkx1DR_w",
    APISecret: "iG3VITaXq9c1tT8RsxKzGt8bR4QpKsn3pbqC",
  },
};

module.exports = config[env];
