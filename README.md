# pwa


## Tips

Create sw.js file in the main folder, and service worker can control all the files. 

If the service worker is inside a folder, for example app, it will only control the changes over the files inside the app folder

Register sw:
```
    navigator.serviceWorker.register('/sw.js');
```
Chekc if navigator can run service worker:

```
    navigator.serviceWorker
```





