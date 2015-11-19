import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      url: false,
      image: [ 'images/saucey.jpg' ],
      title: 'Saucey Inc Internal Tool',
      description: "Rails back-end with jQuery front-end, Parse database, Pusher for notifications. Monitors the company's active deliveries in realtime. Users can edit and troubleshoot orders, view map and directions, and filter active orders by city or store.",
      tags: [ 'rails', 'jquery', 'javascript', 'html', 'css', 'bootstrap' ]
    }, {
      url: false,
      image: [ 'images/coffeeclub.jpg' ],
      title: 'Coffee Times Internal Tool',
      description: "Rails/postgreSQL back-end with jQuery front-end. Tracks customer coffee purchases (date, type and amount) and offers free coffee at regular intervals. Over 18,000 customers and 300,000 orders.",
      tags: [ 'rails', 'postgresql', 'html', 'css', 'bootstrap' ]
    }, {
      url: 'store.remhq.com',
      image: [ 'images/rem.jpg' ],
      title: 'REM Merch Store',
      description: "Shopify back-end with custom fully adaptive theme.",
      tags: [ 'html', 'css', 'bootstrap' ]
    }, {
      url: 'us-store.yogscast.com',
      image: [ 'images/yogscast.jpg' ],
      title: 'Yogscast Merch Store',
      description: "Shopify back-end with custom responsive theme.",
      tags: [ 'html', 'css', 'bootstrap' ]
    }, {
      url: 'www.coffeetimescoffee.com',
      image: [ 'images/coffeetimes.jpg' ],
      title: 'Coffee Times Web Store',
      description: "Shopify back-end with custom theme.",
      tags: [ 'html', 'css', 'liquid', 'bootstrap' ]
    }]
    // this.store.push({
    //   data: [{
    //     id: 1,
    //     type: 'example',
    //     attributes: {
    //       url: '',
    //       image: '',
    //       title: 'Saucey Inc Internal Tool',
    //       description: "Rails back-end with jQuery front-end, Parse database, Pusher for notifications. Monitors the company's active deliveries in realtime. Users can edit and troubleshoot orders, view map and directions, and filter active orders by city or store."
    //     },
    //     relationships: {}
    //   }, {
    //     id: 2,
    //     type: 'example',
    //     attributes: {
    //       url: '',
    //       image: '',
    //       title: 'Coffee Times Customer Rewards Tracking',
    //       description: "Rails/postgreSQL back-end with jQuery front-end. Tracks coffee purchases (date, type and amount) and offers free coffee at regular intervals. Over 18,000 customers and 300,000 orders."
    //     },
    //     relationships: {}
    //   }, {
    //     id: 3,
    //     type: 'example',
    //     attributes: {
    //       url: '',
    //       image: '',
    //       title: 'REM Merchandise Store',
    //       description: "Shopify back-end with custom, fully adaptive theme."
    //     },
    //     relationships: {}
    //   }, {
    //     id: 4,
    //     type: 'example',
    //     attributes: {
    //       url: '',
    //       image: '',
    //       title: 'Yogscast Merchandise Store',
    //       description: "Shopify back-end with custom, responsive theme."
    //     },
    //     relationships: {}
    //   }]
    // });
  }
});
