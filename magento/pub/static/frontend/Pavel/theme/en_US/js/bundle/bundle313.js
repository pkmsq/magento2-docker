require.config({"config": {
        "jsbuild":{"Dotdigitalgroup_Sms/js/internationalTelephoneInput.js":"define([\n    'jquery',\n    'intlTelInput'\n], function ($) {\n    'use strict';\n\n    return function (config, node) {\n        var telephoneInput = $(node)[0];\n        var iti = window.intlTelInput($(node)[0], config);\n\n        telephoneInput.addEventListener('blur', function() {\n            telephoneInput.value = iti.getNumber();\n        });\n    };\n});\n"}
}});
