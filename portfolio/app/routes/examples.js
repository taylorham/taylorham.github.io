import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      url: 'store.remhq.com',
      image: 'images/rem.jpg',
      images: [ 'images/rem.jpg' ],
      title: 'REM Merch Store',
      blurb: "It's the end of the world as we know it",
      description: "Shopify back-end with custom adaptive theme.",
      tags: [ 'html', 'css', 'bootstrap' ]
    }, {
      url: 'us-store.yogscast.com',
      image: 'images/yogscast.jpg',
      images: [ 'images/yogscast.jpg' ],
      title: 'Yogscast Merch Store',
      blurb: 'Biggest YouTube channel in the UK',
      description: "Shopify back-end with custom adaptive theme.",
      tags: [ 'html', 'css', 'bootstrap' ]
    }, {
      url: false,
      image: 'images/saucey.jpg',
      images: [ 'images/saucey.jpg', 'images/saucey2.jpg' ],
      title: 'Saucey Inc Internal Tool',
      blurb: 'Monitoring and troubleshooting active delivery orders',
      description: "Rails back-end with jQuery front-end. Monitors the company's active deliveries in realtime. Users can edit and troubleshoot orders, view map and directions, and filter active orders by city or store.",
      tags: [ 'rails', 'jquery', 'javascript', 'html', 'css', 'bootstrap' ]
    }, {
      url: false,
      image: 'images/coffeeclub.jpg',
      images: [ 'images/coffeeclub.jpg' ],
      title: 'Coffee Times Internal Tool',
      blurb: 'Customer rewards tracking software',
      description: "Rails/postgreSQL back-end with jQuery front-end. Tracks customer coffee purchases (date, type and amount) and offers free coffee at regular intervals. Over 18,000 customers and 300,000 orders.",
      tags: [ 'rails', 'postgresql', 'html', 'css', 'bootstrap' ]
    }, {
      url: 'www.coffeetimescoffee.com',
      image: 'images/coffeetimes.jpg',
      images: [ 'images/coffeetimes.jpg' ],
      title: 'Coffee Times Web Store',
      blurb: '70+ coffees and 100+ teas ready for purchase',
      description: "Shopify back-end with custom theme.",
      tags: [ 'html', 'css', 'liquid', 'bootstrap' ]
    }];
  }
});
