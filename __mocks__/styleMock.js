module.exports = new Proxy(
    {},
    {
        get(target, key) {
            if (key === '__esModule') {
                return false;
            }

            return `stub_${key}`;
        },
    },
);
