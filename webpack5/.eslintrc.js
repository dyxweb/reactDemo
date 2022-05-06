module.exports = {
  parser: "@typescript-eslint/parser",
  // 输出的规则
  plugins: ["react", "prettier", "@typescript-eslint"],
  // 规则集，会覆盖extends中的规则
  rules: {
    // 语句强制分号结尾
    semi: [2, "always"],
  },
};
