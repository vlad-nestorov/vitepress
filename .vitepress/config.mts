import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Canadian Toner Supplies",
  description: "Premium toner cartridges for Canadian businesses",
  base: '/vitepress/',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: {
      '/products/': [
        {
          text: 'Products',
          items: [
            { text: 'HP Toner', link: '/products/hp' },
            { text: 'Canon Toner', link: '/products/canon' },
            { text: 'Brother Toner', link: '/products/brother' },
            { text: 'Epson Toner', link: '/products/epson' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com' }
    ],

    footer: {
      message: 'Proudly serving Canadian businesses from coast to coast',
      copyright: 'Copyright © 2024 Canadian Toner Supplies'
    }
  }
})
