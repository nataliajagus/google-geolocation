(function() {

    let map = {

        makeMap: function() {
            let loc = this.location.split(",");
            let pos = new google.maps.LatLng(loc[0], loc[1]);

            let mapOptions = {
                zoom: 16,
                center: pos,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.mapObj = new google.maps.Map(document.querySelector("#map"), mapOptions);

            let marker = new google.maps.Marker({
                map: this.mapObj,
                position: pos,
                animation: google.maps.Animation.BOUNCE,
                icon: this.options.mapMarker
            });
        },

        init: function(options) {

            if(!options.location) return;

            try { google.maps.event.addDomListener(window, "load", this.makeMap.bind(this)); } catch(e) { return; };

            this.options = options;
            this.location = this.options.location;
        }


    };

    map.init({
        location: "52.2296756, 21.012228700000037",
        mapMarker: "location.png"
    });

})();