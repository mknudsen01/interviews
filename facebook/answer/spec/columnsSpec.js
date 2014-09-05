describe( 'Columns', function(){
    beforeEach( function(){
        columns = new Columns
        columns.times = [ 4, 40, 400 ]
        event = new CalEvent( 30, 90 )
    })

    describe( 'setMax', function(){
        it( 'sets the max time of the columns object', function(){
            columns.setMax( 10 )

            expect( columns.maxTime ).toEqual( 10 )
        })
    })

    describe( 'endsBefore', function(){
        it( 'returns -1 if no time within the collection ends before the given event', function(){
            expect( columns.endsBefore( 0 ) ).toEqual( -1 )
        })

        it( 'returns index if first time within the collection ends before the given event', function(){
            expect( columns.endsBefore( 50 ) ).toEqual( 0 )
        })
    })

    describe( 'add', function(){
        it( 'adds a time to the collection', function(){
            columns.add( 300 )
            expect( _.last( columns.times ) ).toEqual( 300 )
        })
    })

    describe( 'update', function(){
        it( 'updates a time in the collection', function(){
            columns.update( 900, 0 )
            expect( _.first( columns.times ) ).toEqual( 900 )
        })
    })

    describe( 'empty', function(){
        it( 'wipes away the stored column times', function(){
            columns.empty()
            expect(columns.times.length ).toEqual( 0 )
        })
    })
})



