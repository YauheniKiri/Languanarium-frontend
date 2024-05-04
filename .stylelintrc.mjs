import propertyGroups from "stylelint-config-recess-order/groups";

export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  plugins: ["stylelint-order"],
  rules: {
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules",
    ],
    "order/properties-order": propertyGroups,
    "at-rule-empty-line-before": [
      "always",
      {
        ignore: ["first-nested"],
      },
    ],
  },
};
