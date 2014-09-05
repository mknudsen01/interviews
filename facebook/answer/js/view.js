function View(){}

View.prototype = {
    render: function( height, width, top, left ){
        var $event = $( this.cloneEvent() )

        $event.height( height )
        $event.width( width )
        $event.css( 'top', top + 'px' )
        $event.css( 'left', left + 'px' )

        $( '.event-container' ).append( $event )
    },

    cloneEvent: function(){
        return $( '.event-template' ).html().trim()
    },

    reset: function(){
        $('.event-container').empty()
    }
}
