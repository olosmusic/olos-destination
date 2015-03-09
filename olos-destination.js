(function(params){

  Polymer('olos-destination', {

    volume: 0.5,
    on: false,
    color: '#00CCFF',
    width: 300,
    height: 100,
    rootfolder: '../olos-destination/',

    // handle i/o
    input: null,
    input2: null,
    inputCount: 2,
    outputCount: 0,
    inputs: [],

    // ports: {
    //   'in' : [
    //     {
    //       'sources': [],
    //       'destination': []
    //     },
    //     {
    //       'sources': [],
    //       'destination': []
    //     }
    //   ],
    //   'out': []
    // },

    ready: function() {
      var self = this;
      self._audioContext = audioContext;
      self.input = self.output = self._audioContext.createGain();
      self.input.connect(self._audioContext.destination);
      console.log(self.ports);
    },

    // inputChanged: function() {
    //   var self = this;
    //   if (self.input instanceof AudioNode) {
    //     self.input.connect(self.gainNode);
    //   }
    //   else if (self.input) {
    //     console.log('not an audio node');
    //   } else {

    //   }
    // },

    // TO DO: when an input is removed, remove it from ports
    // inputremoveChanged: function() {

    // }

    _toggleStart: function() {
      if(!this.on) {
        this.input.connect(this._audioContext.destination);
      }
      else {
        this.input.disconnect();
      }
      this.on = !this.on;
    },

    setOutput: function(obj) {
      var self = this;
      self._osc.connect(obj);
      self._output = obj;
    },

    _init: function() {
      var self = this;

    },

    publicAudio: function() {
      this.output.gain.value = 1.0;
    }

  });

})();