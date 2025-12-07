let restaurants = [
    {
        name: 'Dhaba - Estd 1986 Delhi', 
        categories: 'North Indian, Desserts',
        address: 'Connaught Place, New Delhi',
        rating: 4.8,
        img: 'https://b.zmtcdn.com/data/pictures/4/21128204/3a91d85b5b19ac7044deb68ee188a982_featured_v2.jpg?output-format=webp'
    },
    {
        name: 'Yeti - The Himalyan Kitchen',
        categories: 'Tibetan, Asian, North Eastern, Sake, Nepalese',
        address: 'Connaught Place, New Delhi',
        rating: '4.9',
        img: 'https://b.zmtcdn.com/data/pictures/6/19129306/33cab35b72c7bfd1d1641ce440bb068f_featured_v2.jpg?output-format=webp'
    },
    {
        name: 'Zurii Delhi',
        categories: 'North Indian, Asian, Chinese, Desserts',
        address: 'Punjabi Bagh, New Delhi',
        rating: '4.9',
        img: 'https://b.zmtcdn.com/data/pictures/5/20505575/34673142e0bb1d90451977e09750c4a0_featured_v2.jpg'
    },

    {
        name: 'Fairytales',
        categories: 'Italian, Lebanese, Desserts',
        address: 'Dwarka, New Delhi',
        rating: '4.8',
        img: 'https://b.zmtcdn.com/data/pictures/1/21947331/49ae68633bc42843dcafbf292cf65cac.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'
    },
    {
        name: 'Sita Ram Diwan Chand',
        categories: 'Street Food, North Indian',
        address: 'Paharganj, New Delhi',
        rating: 4.3,
        img: 'https://b.zmtcdn.com/data/pictures/9/270/564d7b0e0fb1923112e7854668a185da_featured_v2.jpg'
    },
    {
        name: 'Saravana Bhavan',
        categories: 'South Indian, Vegetarian',
        address: 'Connaught Place, New Delhi',
        rating: 4.4,
        img: 'https://b.zmtcdn.com/data/pictures/3/931/423d0eb09a3896890afc76087abb75e1_featured_v2.jpg'
    },
    {
        name: 'Gulati Restaurant',
        categories: 'North Indian, Mughlai',
        address: 'Pandara Road, New Delhi',
        rating: 4.6,
        img: 'https://b.zmtcdn.com/data/pictures/4/311624/7bbde2c86bb8e65bf49bb38fc5a1c03d_featured_v2.jpg'
    },
    {
        name: 'Big Chill Café',
        categories: 'Italian, Cafe',
        address: 'Khan Market, New Delhi',
        rating: 4.7,
        img: 'https://b.zmtcdn.com/data/pictures/3/274/0f8c77c1188b9932d675f19a58acbbb5_featured_v2.jpg'
    },
    {
        name: 'Rajinder Da Dhaba',
        categories: 'North Indian, Kebabs',
        address: 'Safdarjung, New Delhi',
        rating: 4.5,
        img: 'https://b.zmtcdn.com/data/pictures/chains/0/301460/6f0ca6c58410820e671e7e55ce49963a_featured_v2.jpg'
    },
    {
        name: 'Indian Accent',
        categories: 'Modern Indian, Fine Dining',
        address: 'The Lodhi, New Delhi',
        rating: 4.8,
        img: 'https://b.zmtcdn.com/data/pictures/0/303960/7c59093ec9bf5dc50d0c759cea90c0c4_featured_v2.jpg'
    },
    {
        name: 'Biryani By Kilo',
        categories: 'Biryani, North Indian',
        address: 'Multiple Locations, Delhi NCR',
        rating: 4.2,
        img: 'https://b.zmtcdn.com/data/pictures/chains/0/18534100/8d9dfb7e61c6f82618fc9854f8b8d7ca_featured_v2.jpg'
    },
    {
        name: 'Social',
        categories: 'Continental, Asian, Cafe',
        address: 'Hauz Khas Village, New Delhi',
        rating: 4.3,
        img: 'https://b.zmtcdn.com/data/pictures/2/307432/8e27df3e6d9a21ef3f3d5ffe7525f708_featured_v2.jpg'
    },
    {
        name: 'Diggin',
        categories: 'Italian, Cafe',
        address: 'Chanakyapuri, New Delhi',
        rating: 4.6,
        img: 'https://b.zmtcdn.com/data/pictures/0/312040/9588eb9e4780d5f2f5a6d967ea61251e_featured_v2.jpg'
    },
    {
        name: 'Pa Pa Ya',
        categories: 'Asian, Sushi',
        address: 'Saket, New Delhi',
        rating: 4.7,
        img: 'https://b.zmtcdn.com/data/pictures/0/18534580/53295d85f1e4b74e6db7f4fcccd560b1_featured_v2.jpg'
    },
    {
        name: 'The Big Tree Café',
        categories: 'Cafe, Continental',
        address: 'Gurugram, Haryana',
        rating: 4.4,
        img: 'https://b.zmtcdn.com/data/pictures/4/19280814/97bd7c3bb44e51b9ce1c7a507d9415c6_featured_v2.jpg'
    },
    {
        name: 'Farzi Café',
        categories: 'Modern Indian',
        address: 'Connaught Place, New Delhi',
        rating: 4.5,
        img: 'https://b.zmtcdn.com/data/pictures/8/301018/14549ff2ddfb6160a2f03fbc0d5858e1_featured_v2.jpg'
    },
    {
        name: 'Imly',
        categories: 'Street Food, North Indian',
        address: 'Karol Bagh, New Delhi',
        rating: 4.2,
        img: 'https://b.zmtcdn.com/data/pictures/8/18204868/eda7641d695bb16ab9688de8932e8e5f_featured_v2.jpg'
    },
    {
        name: 'Cafe Delhi Heights',
        categories: 'Cafe, Continental',
        address: 'Janpath, New Delhi',
        rating: 4.4,
        img: 'https://b.zmtcdn.com/data/pictures/chains/1/301361/13d62d8f8877d4a6adfe9c888fea66cc_featured_v2.jpg'
    },
    {
        name: 'Pirates of Grill',
        categories: 'North Indian, BBQ',
        address: 'Rajouri Garden, New Delhi',
        rating: 4.3,
        img: 'https://b.zmtcdn.com/data/pictures/5/307175/1f7160f8a66079aafd1cdccb9d2635ee_featured_v2.jpg'
    },
    {
        name: 'The GT Road',
        categories: 'North Indian, Mughlai',
        address: 'Connaught Place, New Delhi',
        rating: 4.5,
        img: 'https://b.zmtcdn.com/data/pictures/1/18423141/53e7ca973f8ef1c6cde190ed7f5e0e35_featured_v2.jpg'
    },
    {
        name: 'Berco’s',
        categories: 'Chinese, Thai',
        address: 'Connaught Place, New Delhi',
        rating: 4.3,
        img: 'https://b.zmtcdn.com/data/pictures/chains/4/143/3c5a3683c3991acb252f389cbcea3924_featured_v2.jpg'
    },
    {
        name: 'Bikanervala',
        categories: 'North Indian, Mithai',
        address: 'Karol Bagh, New Delhi',
        rating: 4.4,
        img: 'https://b.zmtcdn.com/data/pictures/chains/1/9301/9501373cae5f1ffe62e330a7c36dee84_featured_v2.jpg'
    }
];