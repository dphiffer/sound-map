var sm2 = {
  
  sounds: {},
  ready: false,
  queue: [],
  count: 0,
  
  defaults: {
    url: './assets/soundmanager2/swf/',
    flashVersion: 9,
    useFlashBlock: true,
    consoleOnly: true,
    bgColor: '#FFFFFF'
  },
  
  initialize: function(options) {
    if (!options) {
      options = {};
    }
    for (var key in this.defaults) {
      soundManager[key] = this.defaults[key];
    }
    for (var key in options) {
      soundManager[key] = options[key];
    }
    var self = this;
    soundManager.onready(function() {
      self.ready = true;
      if (self.queue) {
        for (var i = 0; i < self.queue.length; i++) {
          self.play(self.queue[i]);
        }
        self.queue = [];
      }
    });
    soundManager.ontimeout(function() {
      alert('Oops, there was a problem playing sound!');
    });
  },
  
  play: function(url, loop) {
    if (!this.ready) {
      this.queue.push(url);
      return false;
    }
    var sound = this.sounds[url];
    if (!sound) {
      this.count++;
      sound = soundManager.createSound({
        id: 'sm2_' + this.count,
        url: url,
        onfinish: function() {
          if (this.loop) {
            this.play();
          };
        }
      });
      this.sounds[url] = sound;
    }
    sound.loop = loop;
    sound.play();
    return true;
  },
  
  pause: function(url) {
    if (!this.sounds[url]) {
      return false;
    }
    this.sounds[url].pause();
  },
  
  toggle: function(url, loop) {
    if (!this.sounds[url] || this.sounds[url].paused) {
      this.play(url, loop);
      return true;
    } else {
      this.pause(url);
      return false;
    }
  }
  
};
