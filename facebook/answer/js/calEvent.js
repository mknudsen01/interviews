function CalEvent( start, end ){
    this.start = start
    this.end = end
    this.column = 0
    this.rendered = false
}

CalEvent.prototype = {
    calculateHeight: function(){
        return this.end - this.start
    },

    calculateLeft: function( width, column ){
        return width * column + 10
    },

    calculateWidth: function( calWidth, overlaps ){
        return calWidth / overlaps
    },

    set: function( property, value ){
        this[ property ] =  value
    }
}
