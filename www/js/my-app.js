var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
  {
    path: '/',
    url: './index.html',
  },
  ],
});
var app = new Framework7();

var $$ = Dom7;

// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});

// Instance Events
var panelRight = app.panel.right;
panelRight.on('open', function () {
  console.log('Panel right: open');
});
panelRight.on('opened', function () {
  console.log('Panel right: opened');
});

// App Events
app.on('panelClose', function (panel) {
  console.log('Panel ' + panel.side + ': close');
});
app.on('panelClosed', function (panel) {
  console.log('Panel ' + panel.side + ': closed');
});

var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 100
}); 
var app = new Framework7();

var $$ = Dom7;


/*=== Default standalone ===*/
var myPhotoBrowserStandalone = app.photoBrowser.create({
    photos : [
        'https://cdn.framework7.io/placeholder/sports-1024x1024-1.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});

/*=== Popup ===*/
var myPhotoBrowserPopup = app.photoBrowser.create({
    photos : [
        'https://cdn.framework7.io/placeholder/sports-1024x1024-1.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
    ],
    type: 'popup'
});
$$('.pb-popup').on('click', function () {
    myPhotoBrowserPopup.open();
});

/*=== As Page ===*/
var myPhotoBrowserPage = app.photoBrowser.create({
    photos : [
        'https://cdn.framework7.io/placeholder/sports-1024x1024-1.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});

/*=== Standalone Dark ===*/
var myPhotoBrowserDark = app.photoBrowser.create({
    photos : [
        'https://cdn.framework7.io/placeholder/sports-1024x1024-1.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark').on('click', function () {
    myPhotoBrowserDark.open();
});

/*=== Popup Dark ===*/
var myPhotoBrowserPopupDark = app.photoBrowser.create({
    photos : [
        'https://cdn.framework7.io/placeholder/sports-1024x1024-1.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
        'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
    ],
    theme: 'dark',
    type: 'popup'
});
$$('.pb-popup-dark').on('click', function () {
    myPhotoBrowserPopupDark.open();
});

/*=== With Captions ===*/
var myPhotoBrowserPopupDark = app.photoBrowser.create({
    photos : [
        {
            url: 'https://cdn.framework7.io/placeholder/sports-1024x1024-1.jpg',
            caption: 'Caption 1 Text'
        },
        {
            url: 'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
            caption: 'Second Caption Text'
        },
        // This one without caption
        {
            url: 'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-captions').on('click', function () {
    myPhotoBrowserPopupDark.open();
});

/*=== With Video ===*/
var myPhotoBrowserPopupDark = app.photoBrowser.create({
    photos : [
        {
            html: '<iframe src="//www.youtube.com/embed/lmc21V-zBq0" frameborder="0" allowfullscreen></iframe>',
            caption: 'Woodkid - Run Boy Run (Official HD Video)'
        },
        {
            url: 'https://cdn.framework7.io/placeholder/sports-1024x1024-2.jpg',
            caption: 'Second Caption Text'
        },
        {
            url: 'https://cdn.framework7.io/placeholder/sports-1024x1024-3.jpg',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-video').on('click', function () {
    myPhotoBrowserPopupDark.open();
});