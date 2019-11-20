# issue example

## how to reproduce

1. open this [link](https://adoring-yonath-44e1ad.netlify.com/)
2. chrome devtools => **Network**
3. when the `App` component is mounted, it will send a request via `fetch`, which will get response after 5 seconds
4. you will see `onLoad` event was fired before the `fetch` request finished
5. however, the `/intake/v2/rum/events` from **apm-rum** will wait until the `fetch` request finished
6. take a look at the payload, the value of `transaction.duration` is the time that the `fetch` ends, rather than the time of `onLoad`.
