function Columns(){
    this.maxTime = 0
    this.times = []
}

Columns.prototype = {
    add: function( time ){
        this.times.push( time )
    },

    endsBefore: function( eventTime ){
        return _.findIndex( this.times, function( time ){
            return time < eventTime
        })
    },

    empty: function(){
        this.times = []
    },

    set: function( event ){
        var index = this.endsBefore( event.start )
        if( index > -1 ){
            event.set( 'column', index )
            this.update( event.end, index )
        } else {
            event.set( 'column', this.times.length )
            this.add( event.end )
        }
        this.setMax( event.end )
    },

    setMax: function( time ){
        this.maxTime =  Math.max( time, this.maxTime )
    },

    update: function( time, index ){
        this.times[ index ] = time
    }
}
