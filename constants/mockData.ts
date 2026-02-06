export const MOCK_CATEGORIES = [
    { id: '1', name: 'Best Sellers', icon: 'star', image: require('../assets/images/best-sellers.avif') },
    { id: '2', name: 'Foods', icon: 'fast-food', image: require('../assets/images/foods.webp') },
    { id: '3', name: 'Wellness', icon: 'fitness', image: require('../assets/images/category-wellness.jpg') },
    { id: '4', name: 'Beauty', icon: 'rose', image: require('../assets/images/beauty-personal-care.webp') },
    { id: '5', name: 'Baby & Kids', icon: 'happy', image: require('../assets/images/baby-and-kids.jpg') },
    { id: '6', name: 'Home', icon: 'home', image: require('../assets/images/kitchen.webp') },
    { id: '7', name: 'Fashion', icon: 'shirt', image: require('../assets/images/fashion.jpg') },
    { id: '8', name: 'Spirituality', icon: 'flame', image: require('../assets/images/spirituality.webp') },
    { id: '9', name: 'Books & Games', icon: 'book', image: require('../assets/images/books-and-games.jpg') },
];

export const MOCK_PRODUCTS = [
    {
        id: 1,
        name: 'Nandini Pure Ghee',
        price: 1305,
        originalPrice: 1536,
        rating: 5.0,
        reviewCount: 138,
        weight: '500g',
        image: 'https://images.unsplash.com/photo-1609501676725-7186f734b2b0?w=400&h=400&fit=crop',
        category: 'Food'
    },
    {
        id: 2,
        name: 'WishCare Hair Growth Serum',
        price: 1104,
        originalPrice: 1299,
        rating: 5.0,
        reviewCount: 219,
        weight: '30ml',
        image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop',
        category: 'Beauty'
    },
    {
        id: 3,
        name: 'Isha Life Neem & Turmeric',
        price: 962,
        originalPrice: 1132,
        rating: 4.5,
        reviewCount: 130,
        weight: '100 caps',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
        category: 'Wellness'
    },
    {
        id: 4,
        name: 'Two Brothers Cultured Ghee',
        price: 2077,
        originalPrice: 2443,
        rating: 4.5,
        reviewCount: 46,
        weight: '500g',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
        category: 'Food'
    },
    {
        id: 5,
        name: 'Organic Coconut Oil',
        price: 850,
        originalPrice: 1000,
        rating: 4.8,
        reviewCount: 95,
        weight: '500ml',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
        category: 'Food'
    },
    {
        id: 6,
        name: 'Himalaya Face Wash',
        price: 180,
        originalPrice: 220,
        rating: 4.3,
        reviewCount: 312,
        weight: '150ml',
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop',
        category: 'Beauty'
    },
    {
        id: 7,
        name: 'Ramayana for Children',
        price: 450,
        originalPrice: 550,
        rating: 4.8,
        reviewCount: 67,
        weight: '1 book',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
        category: 'Books & Games'
    },
    {
        id: 8,
        name: 'Traditional Chess Set',
        price: 1200,
        originalPrice: 1500,
        rating: 4.6,
        reviewCount: 34,
        weight: '1 set',
        image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=400&fit=crop',
        category: 'Books & Games'
    },
    {
        id: 9,
        name: 'Sanskrit Learning Book',
        price: 350,
        originalPrice: 450,
        rating: 4.7,
        reviewCount: 89,
        weight: '1 book',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        category: 'Books & Games'
    }
];

export const MOCK_DEALS = [
    {
        id: 101,
        name: 'Basmati Rice Premium',
        price: 899,
        originalPrice: 1299,
        rating: 4.7,
        reviewCount: 89,
        weight: '5kg',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
        category: 'Food',
        flashDeal: true
    },
    {
        id: 102,
        name: 'Ayurvedic Immunity Booster',
        price: 649,
        originalPrice: 999,
        rating: 4.9,
        reviewCount: 156,
        weight: '60 caps',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
        category: 'Wellness',
        flashDeal: true
    },
    {
        id: 103,
        name: 'Organic Turmeric Powder',
        price: 299,
        originalPrice: 450,
        rating: 4.6,
        reviewCount: 203,
        weight: '200g',
        image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop',
        category: 'Food',
        flashDeal: true
    }
];

export const MOCK_HIGHLIGHTS = [
    {
        id: 1,
        title: 'Ayurveda',
        image: 'https://thedesifood.com/media/highlights/ayurveda.jpg',
        color: '#E8F5E9',
        btnText: 'SHOP NOW'
    },
    {
        id: 2,
        title: 'Supplements',
        image: 'https://thedesifood.com/media/highlights/supplements.jpg',
        color: '#E3F2FD',
        btnText: 'SHOP NOW'
    },
    {
        id: 3,
        title: 'Herbal Oils',
        image: 'https://thedesifood.com/media/highlights/oils.jpg',
        color: '#FFF3E0',
        btnText: 'SHOP NOW'
    }
];

export const MOCK_BRANDS = [
    { id: 1, name: 'Patanjali', logo: 'leaf' },
    { id: 2, name: 'Dabur', logo: 'medical' },
    { id: 3, name: 'Himalaya', logo: 'flower' },
    { id: 4, name: 'Organic India', logo: 'nutrition' },
    { id: 5, name: 'Forest Essentials', logo: 'rose' },
    { id: 6, name: 'Khadi Natural', logo: 'water' }
];

export const MOCK_TESTIMONIALS = [
    { 
        id: 1, 
        name: 'Priya Sharma', 
        rating: 5, 
        review: 'Amazing quality products! Fast delivery and authentic items. Highly recommend for Indian groceries.', 
        location: 'Mumbai' 
    },
    { 
        id: 2, 
        name: 'Rajesh Kumar', 
        rating: 5, 
        review: 'Best place for Indian groceries. Great variety and competitive prices. Customer service is excellent!', 
        location: 'Delhi' 
    },
    { 
        id: 3, 
        name: 'Anita Patel', 
        rating: 4, 
        review: 'Love the authentic products and quick delivery. The packaging is also very good and secure.', 
        location: 'Ahmedabad' 
    },
    { 
        id: 4, 
        name: 'Suresh Reddy', 
        rating: 5, 
        review: 'Excellent quality spices and food items. Reminds me of home. Will definitely order again!', 
        location: 'Hyderabad' 
    }
];
