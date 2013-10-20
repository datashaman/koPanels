function addExtender(name, listener)
{
    ko.extenders[name] = function(target, options)
    {
        target.subscribe(listener);
        return target;
    }
}

$.widget('datashaman.koPanels', {
    options: {
        extender: 'changePanel'
    },

    _create: function() {
        var that = this;

        $.address.change(function(id) {
            that._changePanel(id);
        });

        addExtender(this.options.extender, function(id) {
            that.current(id);
        });

        var extend = { notify: 'always' };
        extend[this.options.extender] = null;

        this.options.observable.extend(extend);

        this.current(this.options.observable());
    },

    current: function(id) {
        if(typeof id == undefined) {
            return this.options.id;
        } else {
            this.options.id = id;
            $.address.value(id);
        }
    },

    _changePanel: function(event) {
        var id = event.value.substring(1);
        if(id) {
            this._showPanel(id);
        }
    },

    _showPanel: function(id) {
        this.element.children(':not(#' + id + ')').hide();
        this.element.children('#' + id).show();
    }
});
