function Calendar( eventFactory, columns, view ){
    this.eventFactory = eventFactory
    this.columns = columns
    this.view = view
    this.width = 600
}

Calendar.prototype = {
    init: function( events ){
        this.events = this.eventFactory.init( events )
        this.layOutEvents()
    },

    columnsFinished: function( index ){
        return index === this.events.length - 1 || this.columns.maxTime < this.events[ index + 1 ].start
    },

    findUnrendered: function(){
        return _.findIndex( this.events, function( event ){
           return event.rendered == false
        })
    },

    layOutEvents: function(){
        this.view.reset()
        _.each( this.events, function( event, index ){
            this.columns.set( event )
            if( this.columnsFinished( index ) ){
                var unrenderedIndex = this.findUnrendered()
                for( var i = unrenderedIndex, len = index; i <= len; i++ ){
                    this.renderEvent( i )
                }
                this.columns.empty()
            }
        }, this )
    },

    renderEvent: function( index ){
        var event = this.events[ index ]
        var height = event.calculateHeight()
        var width = event.calculateWidth( this.width, this.columns.times.length )
        var left = event.calculateLeft( width, event.column )

        this.view.render( height, width, event.start, left )
        event.set( 'rendered', true )
    }
}
