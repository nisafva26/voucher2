'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a91086b95b0f260c850ada4f2fc12a5d",
"index.html": "814c0f3bf1a438e48aca22b88e2983e6",
"/": "814c0f3bf1a438e48aca22b88e2983e6",
"main.dart.js": "62b1a1154657c24011b45bf17e9af5ae",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b84aac0c742d8e97448923cddd07285",
".git/config": "eeb30fc19522730c40122e6de47be8b7",
".git/objects/61/2133edbb121d7e90a5fa1dd118a31a423901ef": "4e05e4bf35af9674a1680844535338ff",
".git/objects/66/074e1256a3d56df43bc1a4069ee7dc79079b55": "1607719e4d5640626d9614fa38be3643",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/61a19a13a914347df71916b08f21137de482b4": "24851d85f96ee4dbec822a207ed5020e",
".git/objects/5a/99332098a4e6b753c8370541221114ed1fd9cc": "0f9c8f94c639624add0e11b496a020b4",
".git/objects/5a/dc182db33a496ab7991c02fc993ec6eba2c419": "4c9cb537fa584aa8da67cdb2c8ae20eb",
".git/objects/9c/273ca04641d1fa47ecfda8a3bf8be14ac42716": "7d1d3383b8955bab5907f4d8818f0ced",
".git/objects/a3/74ba2cc7a948a5c990a86938e0885fb4762edf": "10c01f7b5bfcd855023c63a0984383a7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/685e051f4ad79da31452776dc6f5b8deb7de93": "201b105b35677bbc59a3f7266ec7dfa1",
".git/objects/df/0b59a35d4f169d9ed7df499e1d6b095d4b16fe": "f58f29848d9751886630691e15bc3d68",
".git/objects/df/d2d3db30a791ccf652b3bf909bf9793a25a7c2": "7784dae74de714ab0e88fed73ff90329",
".git/objects/bd/2689e53315408e8b4080f9095f8bd72a9ef45d": "a825b1720706b4a3315da68f427c5585",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/f96b388f6fb65b8d7ad86a2ee5bb37d4eb209a": "5604a8b0953654587b1d05440ee7ad9b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/859f0a18b08e689c0866e3fda477b4f5d38027": "df762c8596ce394464b16a82469d060e",
".git/objects/c6/d8ab03897e165277aa579fecd4ecc5aea6965f": "d259568938834b7d1d96a0df3bac2aba",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/63844432caf7572fb580c5398250e5e3a3e029": "96c7b62f6919fde6a88e0081fe2fedbb",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/17/378a5883f65ac32fdd3683a45dfa197df5af22": "a4e1b53df136a7836a769b26773275b3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c22460dec49ce080b1a9ddc63c69fc4d2229ea": "3c39c7ca8910ea53a6a3f96faaa8071c",
".git/objects/72/e20579479f3b2ce865c5fe14b65813a3343a6e": "abd467f0f37ab134278edbe93752161e",
".git/objects/43/6175883b97a1102bbc8a9f63ffddaaf46f8f8f": "131cc87044eec156589042ef312790d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/0f/8fb8ecc5c1be2aa6a6d3bf61f8228d8fb4a0ea": "edb55f9f95eaa40c00c9d0c8456d4fe6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/10a270da1fd68b8984941cc70788c03f545c0b": "94026de02d2f0ad47388de33e2929619",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/31af1257035bee9f75ee1928cfea7edb9e46d8": "4e14cea603cbcd85b5bce61a97115706",
".git/objects/dc/161617b72fa4d3521a92ffd65fc98ac0446a2f": "8bbed13c009f295b457e30bfea9e80e4",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/94ce90741fbce7bc1570d20f021b74ea5cafe9": "6ea272eefdb082c326c5b1c3b7c25db5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/0feea08af8ed4827e658e7a3200e372776d054": "ff8570c8c3d8dad4a9ac4041be0b6a0b",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/ab0627556c8651e61c4a4eb9b5f598f6051c12": "90bbd2190652c40ddd80e28e7b7bbd7e",
".git/objects/41/bf8dcd7d9f6896aefd35a469179c4db7763a78": "9b2a03936dd58c34cd9473c3b4223abc",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/35e4d522829b4524fe5067fef3d70986685433": "3db0329da8d5fd12357a9952d92b6c2d",
".git/objects/4f/be79681f09cc8e4ea0ef56f4e4776f6c29bffa": "dff78023d0d961fb33e6f40fdd315895",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/4b7a0f977a6e54c497765aa1795a09a3641469": "c85f16524675db3ddc20df309a4b4d95",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2b/45dbffd3ace69201f12e40c6f32ebe5a917301": "ec28be72758d471d03665bd1b3dea2c9",
".git/objects/7f/39fee059a26af706e8f2c5a4302c5b22c333be": "ac477c1d983ab3ff4ea90874aa98501e",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/14/671fd232243f1edd1b210a3ec8faa22585f6d8": "acb3b1654324b07e9e3fd5e2d843b497",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1d0b7f6b1aaa1fe335e46cf4e05b2ab",
".git/logs/refs/heads/main": "f1e47a4ee0c0e94c583250cd704dfa1e",
".git/logs/refs/remotes/origin/main": "c247aba8e910e0798c0639f9e45476ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d694286f3c9bdd33c24088abc536e38a",
".git/refs/remotes/origin/main": "d694286f3c9bdd33c24088abc536e38a",
".git/index": "2488d4c141f51a1d0dbc25f86919a83d",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "fc37a5039ed97dcae24c9231ce1222d9",
"assets/NOTICES": "22ac6b33ea856a4150cd27c8c285fdb0",
"assets/FontManifest.json": "e9c192f949aca27b73b0c5cf22c1ae27",
"assets/AssetManifest.bin.json": "673d8fe73a60b6569004f11c5e558010",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cdb675a3042d98d503b3165c9faa39d5",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/appstore.svg": "e50f90e03e42d613caf13df455c27355",
"assets/assets/confetti.json": "630638b7daae8cc0dd8136d2ed5fdfaf",
"assets/assets/printer_audio.mpeg": "d830e29a12530c9a1ec1f6ca74aeae8c",
"assets/assets/trophy.svg": "7101ef7c9a90aa554bd3f6cdeeee52df",
"assets/assets/download_icon.svg": "ff39da48ccd1b41c540d3cc636d0e102",
"assets/assets/voucher_bg.png": "d93a4eb5a8fbb1aea8bcffc3ea90ed7c",
"assets/assets/printer.svg": "c56a435e03b1a99e1c1c3bd9b8d4372d",
"assets/assets/stars.svg": "4b558b74f396961bac0ef59056614226",
"assets/assets/playstore.svg": "badd948f058a184a52d9c9384dab6fe2",
"assets/assets/dreampot_logo.svg": "9bfe7fc127ea9c9978710d0a37b9fee4",
"assets/assets/dreampot_logo_white.svg": "bf35976e35720243f91e3435fcdc2200",
"assets/assets/fonts/avenir/AvenirBlack.ttf": "968e784956ff9b6a05c29cc3be18cad0",
"assets/assets/fonts/avenir/AvenirRegular.ttf": "77ce85fec67e99ffc50ed8edac7a4890",
"assets/assets/printer_audio_wav.wav": "419cdc8072942bdc702bb9527b3e847e",
"assets/assets/users.svg": "4e3a894798e257336363361eb7afb656",
"assets/assets/voucher_icon.png": "cc7f1b0d60d5f33e1c0b48d56d6976a3",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
