(function(params){

  Polymer('olos-destination', {

    volume: 0.5,
    on: false,
    color: '#00CCFF',
    width: 300,
    height: 100,
    rootfolder: '../olos-destination/',

    // handle i/o
    inputLeft: null,
    inputRight: null,
    output: null,

    ready: function() {
      var self = this;
      self._audioContext = audioContext;

      // for now, both L + R are the same
      self.inputLeft = self.inputRight = self.output = self._audioContext.createGain();
      self.inputLeft.connect(self._audioContext.destination);
    },

    _toggleStart: function() {
      if(!this.on) {
        this.inputLeft.connect(this._audioContext.destination);
      }
      else {
        this.inputLeft.disconnect();
      }
      this.on = !this.on;
    },

    _init: function() {
    },

    publicAudio: function() {
      this.output.gain.value = 1.0;
    }

  });

})();