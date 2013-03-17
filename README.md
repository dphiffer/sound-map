Sound Map
================================

Put MP3s on an interactive map

Code by [Dan Phiffer](http://phiffer.org/), example audio by [Ellie Irons](http://ellieirons.com/)

Powered by
--------------------------------

* mapbox.js JavaScript API
* SoundManager 2 sound API
* OpenStreetMap street data
* sm2.js wrapper library

Customize the template
--------------------------------

#### `sound_map.js` ####

Set your map's center point and zoom.

```js
map.centerzoom({
  lat: 40.764,
  lon: -73.981
}, 12);
```

Add each of your sound markers, including an on/off icon image and MP3 file. The
included on/off images were generated from [Nicolas Mollet's site](http://mapicons.nicolasmollet.com/markers/media/audio/?custom_color=5c5d91).

```js
markers.add_feature({
  geometry: {
    coordinates: [-73.976972, 40.760941]
  },
  properties: {
    title: "Beeps and Bubbles",
    offIcon: "assets/off.png",
    onIcon: "assets/on.png",
    mp3: "beeps_bubbles.mp3"
  }
});
```

#### `sound_map.css` ####

Tweak the CSS if your icon images aren't 32x37 pixels.

```css
.marker-image {
  width: 32px;
  height: 37px;
  margin-left: -16px;
  margin-top: -37px;
  position: absolute;
  cursor: pointer;
  pointer-events: all;
}
```

Troubleshooting
--------------------------------

#### My MP3 isn't playing when I click on a marker ####
If you opened the HTML file from your computer (i.e., the URL starts with
`file://`) Firefox will not be able to use the SoundManager 2 library
to play MP3s.

#### It still isn't playing ####
Check your JavaScript console for any errors being reported.
Sound Manager 2 is pretty verbose with its console messages.
