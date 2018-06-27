
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wine').del()
    .then(function () {
      // Inserts seed entries
      return knex('wine').insert([
        { id: 1, wine_name: 'Rombauer Chardonnay', color: 'White', varietal: 'Chardonnay', vintage: 2016, country_origin: 'USA', tasting_notes: 'Fruity with some baking spices. Smooth Finish', rating: 3, image_url: 'https://i2.wp.com/thewinedaily.com/wp-content/uploads/2017/06/rombauer-chard.jpg?fit=1200%2C914&ssl=1', user_id: 1 },
        { id: 2, wine_name: 'Duckhorn Napa Valley Cabernet Sauvignon', color: 'Red', varietal: 'Cabernet Sauvignon', vintage: 2015, country_origin: 'USA', tasting_notes: 'Strong cherry, cedar and licorice notes. Well structured Finish.', rating: 4, image_url: 'http://lh3.googleusercontent.com/-pSTvniXe6Fc/VlJWn6PcJXI/AAAAAAAACgs/7MfCYEALoXY/s640/blogger-image-1600366859.jpg', user_id: 1 },
        { id: 3, wine_name: 'Chateau d\'Esclans Whispering Angel', color: 'Rose', varietal: 'Rose', vintage: 2017, country_origin: 'France', tasting_notes: 'Refreshing, juicy, and berry notes.', rating: 5, image_url: 'https://i.ytimg.com/vi/ub2wt2QvpmA/maxresdefault.jpg', user_id: 1 },
        { id: 4, wine_name: 'Provenance Vineyards Napa Valley', color: 'Red', varietal: 'Merlot', vintage: 2015, country_origin: 'USA', tasting_notes: 'Red and black berry notes, fruity aroma. Layers of chocolate, graham cracker and baking spices. Complex, but pleaseing.', rating: 4, image_url: 'http://www.napawineproject.com/wp-blog/wp-content/uploads/2013/10/Provenance-Vineyards-Napa-Valley-2-1.jpg', user_id: 1 },
        {id: 5, wine_name: 'Greywacke Pinot Noir 2014', color: 'red', varietal: 'Pinot Noir', vintage: 2014, country_origin: 'New Zealand', tasting_notes: 'Raspberry, cherry, and plum notes with a cinnamon and clove spiciness. Excellent finish.', rating: 4, image_url: 'https://cdn.ct-static.com/labels/687969.jpg', user_id: 1}
      ]);
    });
};
