koPanels
========

Knockout-based panels, using an observable to store the current panel's ID.

Examples speak louder than words. Open test.html in a browser.

The URL overrides and sets the observable value in the model.

If no URL hash value is specified, the model's observable
value decides what panel is shown.

Setting the models' observable value sets the URL via the address plugin,
which triggers the show of the correct panel.

Uses jQuery, KnockoutJS, jQuery Address plugin and the widget scaffolding of jQuery UI.
