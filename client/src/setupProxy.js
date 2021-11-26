const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            target: "https://garin.r-e.kr:8443",
            changeOrigin: true,
        })
    );
};