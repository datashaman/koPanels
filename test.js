jQuery(document).ready(function($)
{
    var model = {
        currentPanel: ko.observable('first-panel')
    };

    var container = $('#panels').koPanels({
        observable: model.currentPanel
    });

    $('input[type=button]').click(function() {
        model.currentPanel($(this).data('dest'));
    });

    ko.applyBindings(model);
});
