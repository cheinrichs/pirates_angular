exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({
      name: 'Anne Bonney',
      poison: 'Rum',
      accessory: 'hot temper',
      image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'
    }),
    knex('pirates').insert({
      name: 'Shantae',
      poison: 'Hair',
      accessory: 'Genie Lamp',
      image_url: 'http://childrensmuseumofphoenix.org/wp-content/uploads/2015/08/Pirate-Palooza.jpg'
    }),
    knex('pirates').insert({
      name: 'Rotty Tops',
      poison: 'Witch Hazel',
      accessory: 'Blunderbuss',
      image_url: 'http://vignette2.wikia.nocookie.net/maplestory/images/f/f5/Pirate_Female.png/revision/latest?cb=20130628055334'
    })
  );
};
