describe( 'EventFactory', function(){
    beforeEach( function(){
        eventFactory = new EventFactory
        eventPojo = { start: 30, end: 90 }
    })

    describe( 'create', function(){
        it( 'creates a CalEvent object from a POJO', function(){
            expect( eventFactory.create( eventPojo ) ).toEqual( jasmine.any( CalEvent ) )
        })
    })

    describe( 'sort', function(){
        it( 'sorts calEvents by start time', function(){
            var events = [ new CalEvent( 40, 60, 1 ), new CalEvent( 30, 90, 0 ) ]
            var sortedEvents = eventFactory.sort( events )

            expect( sortedEvents[ 0 ].start ).toEqual( 30  )
        })
    })
})
