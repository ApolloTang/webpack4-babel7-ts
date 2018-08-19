const presets = [
  ["@babel/env", {
    targets: {
      "IE": "11"
    },
    useBuiltIns: "usage"
  }]
];

module.exports = {presets};
