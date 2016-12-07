## Progressive Website Development
PWD is a boilerplate to get started with developing a Progressive Web Application. It uses the power of [Service Worker](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API) to implement dynamic caching mechanism thus making the website go offline.

Open [Demo](https://pjagajitprusty.github.io/PWD/) Progressive Web App which uses PWD. Once it's loaded, turn off the network and reload again. The page should successfully load in offline mode. Feeling Excited??? Let's start learning....</br>

Go through `service-worker.js` file, that has proper comments with step by step approach to register service worker, caching static files and implementing dynamic caching by handling each network request. `snippets.js` File is added which has detailed explanation for all kinds of dynamic caching strategies and a brief explanation about JavaScript **Promises**.

`Very soon Push Notifications support will be added to it with detailed explanation.
`
### Prerequisite Knowledge.
* [JavaScript Promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
* [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

### Getting Started with PWD
* [My First PWD](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/?hl=en)
* [Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
* [Push Notifications](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/sending-messages)


#### TODO:
- [x] Basic Caching Strategies
- [ ] Implementing multiple caching Strategies
- [ ] Push Notification
