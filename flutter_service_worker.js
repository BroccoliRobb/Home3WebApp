'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "de8cacabdf8797c921167d754b98f4a4",
"assets/AssetManifest.bin.json": "659e3292fc9fbdef820b56e275ae2b87",
"assets/AssetManifest.json": "2c04cfd8fe122b927b27cea74468df64",
"assets/assets/ai-icon.png": "66073a569da5246289dfe3ea34ca877a",
"assets/assets/Alert.png": "9425c08bd1ab9fff28d1a490ccdc0f80",
"assets/assets/AppleIcon.png": "1c72c3172282bb43aed14462a0142ecf",
"assets/assets/Coins/EthereumCoin.png": "32cf040c938597a643f02ada20e34e9d",
"assets/assets/Coins/Home3Coin.png": "1c66a88e5be81646c337a968938d6990",
"assets/assets/FacebookIcon.png": "b3b0721ecb75edaa22b73e00869134cd",
"assets/assets/Fonts/Gabarito-Black.ttf": "655ea355bff820f2d05923de35c477e4",
"assets/assets/Fonts/Gabarito-Bold.ttf": "72f9604d43184f3559a742a24e8d09c5",
"assets/assets/Fonts/Gabarito-ExtraBold.ttf": "3fd950468691227d944caacecaf0d9a3",
"assets/assets/Fonts/Gabarito-Medium.ttf": "0f50bea0e0791e08253e8c8930413f06",
"assets/assets/Fonts/Gabarito-Regular.ttf": "00294c6779dc4fb84f6f3e27080c87a5",
"assets/assets/Fonts/Gabarito-SemiBold.ttf": "050ac2f3adff35b04d722fa7bd97a1d7",
"assets/assets/Fonts/Gabarito-VariableFont_wght.ttf": "887b265d506e09cc1587b73f90407f88",
"assets/assets/Fonts/GeneralSans-Bold.otf": "398fa49258135c6cefe9383eb0cb19e7",
"assets/assets/Fonts/GeneralSans-BoldItalic.otf": "000bd8eca0031554a1190c7f47efc444",
"assets/assets/Fonts/GeneralSans-Extralight.otf": "d35362553b83cb5a9e3134d85bb82358",
"assets/assets/Fonts/GeneralSans-ExtralightItalic.otf": "45d6739d54e52a55830e12c7c58482b2",
"assets/assets/Fonts/GeneralSans-Italic.otf": "d32078af87e2d326240d90653f1a6b7e",
"assets/assets/Fonts/GeneralSans-Light.otf": "f157d9c685de22f8c85bf0fe970e5e25",
"assets/assets/Fonts/GeneralSans-LightItalic.otf": "ea7c179aed9921eb8c2168ca787871c8",
"assets/assets/Fonts/GeneralSans-Medium.otf": "543e455dde358b0724b7b27e5e9abcce",
"assets/assets/Fonts/GeneralSans-MediumItalic.otf": "4e22145744fc4db1094cc293c9f5373f",
"assets/assets/Fonts/GeneralSans-Regular.otf": "95afa0447815d0498c2ed4c828cdd92a",
"assets/assets/Fonts/GeneralSans-Semibold.otf": "858d81205b791170eaf0bc30c2ec7bc5",
"assets/assets/Fonts/GeneralSans-SemiboldItalic.otf": "66769d07de37c35812f354231a059b5e",
"assets/assets/Fonts/HankenGrotesk-Black.otf": "616709b89e6ede82f6e0ff78340ce9e5",
"assets/assets/Fonts/HankenGrotesk-Bold.otf": "20ff8eb53d4a283e2f209b798eee2406",
"assets/assets/Fonts/HankenGrotesk-ExtraLight.otf": "e6a0e3191d44af4cc513522302c5cc34",
"assets/assets/Fonts/HankenGrotesk-Light.otf": "1560bfb540835b1e19dbdcf5cc84eff0",
"assets/assets/Fonts/HankenGrotesk-Medium.otf": "15c02b419e20a4dab2cc3316aacddd7b",
"assets/assets/Fonts/HankenGrotesk-Regular.otf": "9e8bb12f3324035305def0b40a99a390",
"assets/assets/Fonts/HankenGrotesk-SemiBold.otf": "50ace5e03807c35672d4fc0da94edd8e",
"assets/assets/Fonts/IBMPlexMono-Bold.ttf": "6921067a6596496232b0170b0434a6d2",
"assets/assets/Fonts/IBMPlexMono-BoldItalic.ttf": "384388ea66120629c839d12dc2deca25",
"assets/assets/Fonts/IBMPlexMono-ExtraLight.ttf": "a4cbfb87dd9f55a8b8a3a0872de7854e",
"assets/assets/Fonts/IBMPlexMono-ExtraLightItalic.ttf": "f581d546d044a0e5f008b8c90fdeb229",
"assets/assets/Fonts/IBMPlexMono-Italic.ttf": "52f1a0b3b4221bbcef827d57eed8b60d",
"assets/assets/Fonts/IBMPlexMono-Light.ttf": "0f6bcff4d5c55875483ba848fdd8dbad",
"assets/assets/Fonts/IBMPlexMono-LightItalic.ttf": "7fefc171ef39e1bed03f941b81359416",
"assets/assets/Fonts/IBMPlexMono-Medium.ttf": "5768c0973ec2d5490bd3e57c25b26719",
"assets/assets/Fonts/IBMPlexMono-MediumItalic.ttf": "65a2cf5e1b9440a020dbfd975a44bd10",
"assets/assets/Fonts/IBMPlexMono-Regular.ttf": "6c48837e3790973f33677a28e3accb41",
"assets/assets/Fonts/IBMPlexMono-SemiBold.ttf": "72f8680a21230b730ca1d51b9af4a6a0",
"assets/assets/Fonts/IBMPlexMono-SemiBoldItalic.ttf": "74c089a2f6877379a5ab57f2c99ece2f",
"assets/assets/Fonts/IBMPlexMono-Thin.ttf": "60115f1cbb85ac43f227d4715cb12732",
"assets/assets/Fonts/IBMPlexMono-ThinItalic.ttf": "a8733ac2148a809aab313baf655214b4",
"assets/assets/Fonts/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/assets/Fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/Fonts/Inter_18pt-Black.ttf": "b797a429ef21b9b7d44b96038cdb10f2",
"assets/assets/Fonts/Inter_18pt-BlackItalic.ttf": "6a6d7edd78447c5edcb33570ce97efe8",
"assets/assets/Fonts/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/Fonts/Inter_18pt-BoldItalic.ttf": "66469edaf106f7a1e14f4061212a1123",
"assets/assets/Fonts/Inter_18pt-ExtraBold.ttf": "a6ed481bff60bc9270904d214947ab13",
"assets/assets/Fonts/Inter_18pt-ExtraBoldItalic.ttf": "b03bfa9ceab3df1f81834d0523331c30",
"assets/assets/Fonts/Inter_18pt-ExtraLight.ttf": "2c6c78d98816958b53fea58451f921d3",
"assets/assets/Fonts/Inter_18pt-ExtraLightItalic.ttf": "24df6449633144fa3f4258c775dd67c5",
"assets/assets/Fonts/Inter_18pt-Italic.ttf": "ab4004692577ac82604c777fa83da556",
"assets/assets/Fonts/Inter_18pt-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/Fonts/Inter_18pt-LightItalic.ttf": "6eb3a2d2c6f095080ac034867886d0bf",
"assets/assets/Fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/Fonts/Inter_18pt-MediumItalic.ttf": "c64a8c393f4d6ffd87f80723727b7f2c",
"assets/assets/Fonts/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/Fonts/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/Fonts/Inter_18pt-SemiBoldItalic.ttf": "0f93bef7d8e8ea0612ba37a71efcccff",
"assets/assets/Fonts/Inter_18pt-Thin.ttf": "6f2d2f41f504aee66da88684f15d7e1d",
"assets/assets/Fonts/Inter_18pt-ThinItalic.ttf": "95d83862ccec5b0d0487f243e34fcc61",
"assets/assets/Fonts/Inter_24pt-Black.ttf": "2392341284c30f5fffb9fe0ab0cd983e",
"assets/assets/Fonts/Inter_24pt-BlackItalic.ttf": "1fa0b44e2ca8a6ce911e0fc8cc3b7255",
"assets/assets/Fonts/Inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/Fonts/Inter_24pt-BoldItalic.ttf": "a1757dcadd00b07cd874af79e2904c92",
"assets/assets/Fonts/Inter_24pt-ExtraBold.ttf": "995fb5ac38b90303c0cc1a0b21e2c9fe",
"assets/assets/Fonts/Inter_24pt-ExtraBoldItalic.ttf": "054fe10e7073eb84bf31447dfd79e522",
"assets/assets/Fonts/Inter_24pt-ExtraLight.ttf": "8da347e947a38e1262841f21fe7c893e",
"assets/assets/Fonts/Inter_24pt-ExtraLightItalic.ttf": "c37c2ef7e42dc86b284a5cbaf8a8efae",
"assets/assets/Fonts/Inter_24pt-Italic.ttf": "0b52c6d11ac407c2ef591475f2b4ed11",
"assets/assets/Fonts/Inter_24pt-Light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/Fonts/Inter_24pt-LightItalic.ttf": "a401ba0ab41163ff9ec6247c023b1c68",
"assets/assets/Fonts/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/Fonts/Inter_24pt-MediumItalic.ttf": "5ed286000cb7a0e7b015ec71e190a767",
"assets/assets/Fonts/Inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/Fonts/Inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/Fonts/Inter_24pt-SemiBoldItalic.ttf": "9685a9dcf0c26640b3828dd34b953bcd",
"assets/assets/Fonts/Inter_24pt-Thin.ttf": "1e9e30c74648950a240427636b6c1992",
"assets/assets/Fonts/Inter_24pt-ThinItalic.ttf": "27a3a82e0df426a69c7a7562a2293bda",
"assets/assets/Fonts/Inter_28pt-Black.ttf": "298c6ce1b2641dfe1647544180b67fd1",
"assets/assets/Fonts/Inter_28pt-BlackItalic.ttf": "ff93e5c0c4542fe58a56430a3be67cce",
"assets/assets/Fonts/Inter_28pt-Bold.ttf": "14080569c713459a85b1693cf7354cc0",
"assets/assets/Fonts/Inter_28pt-BoldItalic.ttf": "a2d4f13d253a5d230ab950b8d1aa6a3b",
"assets/assets/Fonts/Inter_28pt-ExtraBold.ttf": "7c8dddeead3a39ebb25d4be0e0c4b876",
"assets/assets/Fonts/Inter_28pt-ExtraBoldItalic.ttf": "0a060bf48937936c4aa7d9952dfe1ae8",
"assets/assets/Fonts/Inter_28pt-ExtraLight.ttf": "97f88391f7a4de7986e436bdeeb86d8c",
"assets/assets/Fonts/Inter_28pt-ExtraLightItalic.ttf": "44168090bcf11276f500c0f02b154ff4",
"assets/assets/Fonts/Inter_28pt-Italic.ttf": "457934416e3b66a693b814d64446076e",
"assets/assets/Fonts/Inter_28pt-Light.ttf": "3ea4007efbbb2f30c2c73275eef5c2b0",
"assets/assets/Fonts/Inter_28pt-LightItalic.ttf": "53fd3364ffe65ab2ff79f7fe024c83ce",
"assets/assets/Fonts/Inter_28pt-Medium.ttf": "4bf75147230e93108702b004fdee55df",
"assets/assets/Fonts/Inter_28pt-MediumItalic.ttf": "ecec8d44b9cfb67aafab4573295b3c29",
"assets/assets/Fonts/Inter_28pt-Regular.ttf": "fc20e0880f7747bb39b85f2a0722b371",
"assets/assets/Fonts/Inter_28pt-SemiBold.ttf": "70c03908b3ab82969b38ba14745f3a54",
"assets/assets/Fonts/Inter_28pt-SemiBoldItalic.ttf": "f6a4fc371cbdc516f1b3aa53e570e25e",
"assets/assets/Fonts/Inter_28pt-Thin.ttf": "f045084a42b5d5a11297b0c058ecf884",
"assets/assets/Fonts/Inter_28pt-ThinItalic.ttf": "3a4d750a496f2c6e20eef12f2f28443c",
"assets/assets/GoogleIcon.png": "df3e7f2fdbcf3360353e0600d36f0b56",
"assets/assets/Home3Icon.png": "53d0d98207fc78832fd33819befe17f4",
"assets/assets/Home3IconLarge.png": "02b21de561884cf35b9d2699af204804",
"assets/assets/Home3IconLargeNoAlpha.png": "44698804ee85bf8627241f535c2bbed6",
"assets/assets/Home3Logo.png": "2a26e29abc8eb24ff3db1b31f48abd8d",
"assets/assets/HOME3_icon_dropshadow.png": "0fe58b10be64fe4047a6419526ab3778",
"assets/assets/keys.env": "061791a638f1620f3d80033f6ca37645",
"assets/assets/map.html": "0caba4d3ac560d86a03e25f3fa6ada29",
"assets/assets/mdi_bed-outline-gray.png": "e555d0857555637248d002a9d6fdbc12",
"assets/assets/mdi_move-resize-gray.png": "4aadc958ddb9dd864c07c2ae835c3ff2",
"assets/assets/mdi_shower-gray.png": "d5ff08a8cce6ada2ceb279f5cfdec74c",
"assets/assets/Search_Icon.png": "5c364b7d09bb7c13e2afe7464bb47717",
"assets/assets/splash_icon_alpha.png": "24c29ce36611073527599656dfb2b179",
"assets/FontManifest.json": "15c1499cfb035128da5fa28ea79aefaa",
"assets/fonts/MaterialIcons-Regular.otf": "87bb25494e436b089f19a86b83298a23",
"assets/NOTICES": "4e63166a7ce8ee8958fff1ef73046fe4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "b7e0a5ee090d9f7ced84b01bc79abeea",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "09dee2eeb45f504177caaba0d9b46047",
"icons/Icon-192.png": "df36a58bb9301e3699827ff1ff98d9ec",
"icons/Icon-512.png": "2a83a76ef3bb2347a3b60d2531ddf927",
"icons/Icon-maskable-192.png": "df36a58bb9301e3699827ff1ff98d9ec",
"icons/Icon-maskable-512.png": "2a83a76ef3bb2347a3b60d2531ddf927",
"index.html": "2e2a3987dddacecdc17f8b7d556520f0",
"/": "2e2a3987dddacecdc17f8b7d556520f0",
"main.dart.js": "c0dae75a9f62a74c1b0d719f7f270979",
"manifest.json": "46d97bae4d79a15c34cb650261b6bbdc",
"splash/img/dark-1x.png": "4b6c061b22004e62b6d09a47293a8d86",
"splash/img/dark-2x.png": "e152d4c833f390a807f24ae62ae8c9b8",
"splash/img/dark-3x.png": "b66051d2f51161bca92befa510b47d98",
"splash/img/dark-4x.png": "8905a162f87718f744b89346cf9887bb",
"splash/img/light-1x.png": "4b6c061b22004e62b6d09a47293a8d86",
"splash/img/light-2x.png": "e152d4c833f390a807f24ae62ae8c9b8",
"splash/img/light-3x.png": "b66051d2f51161bca92befa510b47d98",
"splash/img/light-4x.png": "8905a162f87718f744b89346cf9887bb",
"splash/img/light-background.png": "ed0880cc458e84c05aef39a1e1fb876a",
"version.json": "1239dd4d43504f0e7d70fed2bd9339a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
