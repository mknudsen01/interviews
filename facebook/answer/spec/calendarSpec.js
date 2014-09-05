describe( 'Calendar', function(){
    beforeEach( function(){
        var events = [ new CalEvent( 40, 60 ),
                       new CalEvent( 30, 90 ),
                       new CalEvent( 200, 400 ),
                       new CalEvent( 300, 400 ) ]
        calendar = new Calendar( new EventFactory, new Columns, new View )
        calendar.events = calendar.eventFactory.init( events )
    })

    describe( 'columnsFinished', function(){
        it( 'returns true if we are on the last event', function(){
            expect( calendar.columnsFinished( 3 ) ).toEqual( true )
        })

        it( 'returns true if we are not on the last event BUT the current event starts after than the column end time', function(){
            expect( calendar.columnsFinished( 0 ) ).toEqual( true )
        })

        it( 'returns false if we are not on the last event AND the current event starts before than the column end time', function(){
            calendar.columns.set( calendar.events[ 2 ] )
            expect( calendar.columnsFinished( 1 ) ).toEqual( false )
        })
    })

    describe( 'findUnrendered', function(){
        it( 'returns the index of the first unrendered event', function(){
            calendar.events[ 0 ].rendered = true
            expect( calendar.findUnrendered() ).toEqual( 1 )
        })
    })
})



