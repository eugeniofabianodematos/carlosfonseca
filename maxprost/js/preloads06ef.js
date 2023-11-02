
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.787f0e0909139684890f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/321.baseline.en.88b2beb352ae94259332.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.baseline.en.b3fe05d55762c9e403be.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.baseline.en.d47bb195234e1005255d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.e67e33cfb9fc0c65a9d5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.baseline.en.68ceefcc66cfc32ca175.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/774.baseline.en.9c794c100a2fbc59ae77.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/917.baseline.en.88daeefe46c532f2180e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.baseline.en.2bcddb1bebd8d00bde9a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.baseline.en.d0abef02684b81669a08.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/321.baseline.en.d2526b543f67ca30c15f.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a3984c31989d09f92fc0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/774.baseline.en.90995d593e3657cbd8c7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.baseline.en.9956cb0ee1c783023055.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  