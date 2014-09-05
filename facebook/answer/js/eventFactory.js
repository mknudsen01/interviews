function EventFactory(){}

EventFactory.prototype = {
    init: function( events ){
        var events = this.sort( events )
        return this.convert( events )
    },

    create: function( obj ){
        if( obj.start < 0 || obj.end > 720 ){ return false }
        return new CalEvent( obj.start, obj.end )
    },

    convert: function( events ){
        var calEvents = []

        _.each( events, function( e ){
            var calEvent = this.create( e )
            if( calEvent ){ calEvents.push( calEvent ) }
        }, this )

        return calEvents
    },

    sort: function( events ){
        return _.sortBy( events, 'start' )
    }
}
