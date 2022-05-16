const { Post } = require('../models');

const postinfo = [
    {
        title: 'Success In A Bootcamp Setting',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
        user_id: 10
      },
      {
        title: 'BackEnd or FrontEnd?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
        user_id: 9
      },
      {
        title: 'My Enjoyment',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
        user_id: 5
      },
      {
        title: 'The Future',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
        user_id: 2
      },
      {
        title: 'My TakeAway',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
        user_id: 1
      },
      {
        title: 'To Any New Comers',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
        user_id: 3
      },
];

const seedPosts = () => Post.bulkCreate(postinfo);

module.exports = seedPosts;