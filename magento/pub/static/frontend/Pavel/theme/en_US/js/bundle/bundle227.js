require.config({"config": {
        "jsbuild":{"Klarna_Kp/js/action/set-payment-method-action.js":"define(\n    [\n        'jquery',\n        'Klarna_Kp/js/model/config'\n    ],\n    function ($, config) {\n        'use strict';\n\n        return function () {\n            $.mage.redirect(config.redirectUrl);\n        };\n    }\n);\n"}
}});
