/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/xtendhr/hello/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
