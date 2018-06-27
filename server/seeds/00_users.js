
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'Christopher Nemeth', email: 'cnemeth1@gmail.com', image_url: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'},
        {id: 2, user_name: 'Marie Finkle',  email: 'mfinkle@gmail.com', image_url: 'https://amp.businessinsider.com/images/5aa10ca0d877e618008b4678-750-562.jpg'},
        {id: 3, user_name: 'Coleman Imhoff', email: 'colemanimhoff@gmail.com', image_url: 'https://www.shelterluv.com/sites/default/files/animal_pics/464/2016/11/25/21/20161125215406.png'}
      ]);
    });
};
