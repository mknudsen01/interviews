function layOutEvents( events ){
    var view = new View
    var eventFactory = new EventFactory
    var columns = new Columns
    var calendar = new Calendar( eventFactory, columns, view )
    calendar.init( events )
}