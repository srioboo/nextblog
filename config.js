'use strict';

module.exports = {
  url: 'https://srioboo.netlify.app',
  pathPrefix: '/',
  title: 'Blog by S.R.N',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: '© Todos los derechos reservados.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: process.env.GA_UA || 'UA-xxxxxxxx-1',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    /*{
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }*/
  ],
  author: {
    name: 'S.R.N',
    photo: '/photo.jpg',
    bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    contacts: {
      email: '',
      facebook: '',
      telegram: '',
      twitter: '',
      github: '',
      rss: '',
      vkontakte: '',
      linkedin: '',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '',
    }
  }
};
