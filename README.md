#Introduction
With JsYouThumb library you can get all the generated thumbnail images for a specific YouTube video.
JsYouThumb is designed to work with pure JavaScript, you don't need any other library to make it work.

#Installation
You can simply install with:
- Install with [Bower](http://bower.io): `bower install js.youthumb`

And you need only to include the JsYouThumb.js file to use this library.
```html
<script type="text/javascript" src="./../src/JsYouThumb.js"></script>
```

#Usage
Below you can see how fast and simple JsYouThumb is:
```javascript
//create the JsYouThumb object, you only need the video id
var thumb = new JsYouThumb('IdLHAqL8KJw');

//create a new image with the high resolution thumbnail
document.getElementById('thumb-div').innerHTML = thumb.getImg('high');

//you can also get the normal thumbnail url and replace the existing image src attribute
document.getElementById('image-one').src = thumb.getUrl('normal');
```

#Available Thumbnail Dimensions
JsYouThumb is able to get all the thumbnails generated for a YouTube video.
When you call JsYouThumb you need to specify the *quality key*, if this is not available or not valid **normal** is used as default.
Below are listed all the different sizes.

Quality key     | YouTube key     | Thumb Resolution [px] | Thumb Format
:-------------: | :-------------: | :-------------: | :-------------: 
normal          | default         | 120x90          | jpg
high            | hqdefault       | 480x360         | jpg
medium          | mqdefault       | 320x180         | jpg
standard        | sddefault       | 640x480         | jpg
max             | maxresdefault   | up to 1920x1080 | jpg
player          | 0               | 480x360         | jpg
start           | 1               | 120x90          | jpg
middle          | 2               | 120x90          | jpg
end             | 3               | 120x90          | jpg
