import mountApp from '../mountApp';

mountApp(require('./Index.vue').default, {
  title: 'ç±çšćć',
  router: require('./router').default,
  store: require('./store/index').default,
  api: 'dajinApi'
});
