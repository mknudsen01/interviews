describe( 'CalEvent', function(){
    beforeEach( function(){
        calEvent = new CalEvent( 30, 90 )
    })

    describe( 'calculateHeight', function(){
        it( 'calculate height of event object to be rendered', function(){
            expect( calEvent.calculateHeight() ).toEqual( 60 )
        })
    })

    describe( 'calculateLeft', function(){
        it( 'calculate left-position of event object to be rendered', function(){
            expect( calEvent.calculateLeft( 60, 1) ).toEqual( 70 )
        })
    })
    describe( 'calculateWidth', function(){
        it( 'calculate width of event object to be rendered', function(){
            expect( calEvent.calculateWidth( 600, 3 ) ).toEqual( 200 )
        })
    })
})
