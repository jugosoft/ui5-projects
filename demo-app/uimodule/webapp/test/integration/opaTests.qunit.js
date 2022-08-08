/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/rus/development/demoApp/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
