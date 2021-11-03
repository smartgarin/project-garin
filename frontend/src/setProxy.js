import proxy from "http-proxy-middleware";

module.exports = () => {
    app.use(
        proxy("/api", {
            target: "http://localhost:5000/"
        })
    );
};