FX.getFrame('jquery-1.3.2', function($){

    FX.register('elastic', [ 'elastic' ], function(attrs){
        var $this = $(this);
        $this.elastic();
    }, {});

});
