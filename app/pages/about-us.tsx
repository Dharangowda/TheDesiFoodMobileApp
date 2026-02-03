import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { Colors, Layout } from '../../constants/theme';
import { Separator } from '../../components/ui/separator';

const categories = [
    {
        title: "Food",
        content: [
            "Explore authentic Indian flavors with our Food category. From Instant Food like Desi Chai mixes, Ready-to-Eat breakfasts, and pickles to Staples like spices, dal, ghee, A2 cow ghee, and organic essentials—we have it all.",
            "Indulge in Delicacies featuring snacks and sweets from G Pulla Reddy, Haldiram's, Lakshminarayan, Chitale, Adukale, and Chhedas, along with premium dry fruits and mouth fresheners.",
        ],
    },
    {
        title: "Wellness",
        content: [
            "Stay healthy with Ayurvedic products from trusted brands like Patanjali, Baidyanath, Himalaya, Maharishi, Kottakal Ayurveda, Kerala Ayurveda, and more. Our Wellness range includes herbal remedies, diabetic care, multivitamins, and more, bringing you the best of natural healing.",
        ],
    },
    {
        title: "Beauty",
        content: [
            "Keep your skin and hair looking their best with our Beauty range. From hair care to skincare and makeup, we offer top products from brands like Mamaearth, Himalaya, Neutrogena, and Sugar Cosmetics.",
        ],
    },
    {
        title: "Baby & Kids",
        content: [
            "Ensure your baby's well-being with our trusted baby care products, including food, skincare, and oral care. Choose from brands like Johnson & Johnson, Mamaearth, and Himalaya to give your little one the best care.",
            "We also offer a range of kids' stationery essentials for school, making it easy to find everything your child needs to learn, create, and grow.",
        ],
    },
    {
        title: "Home Furnishing & Kitchen",
        content: [
            "Create an authentic Indian kitchen with our range of pressure cookers, utensils, and pooja essentials. We also offer home décor and improvement items, so you can bring traditional Indian charm to your home.",
        ],
    },
    {
        title: "Fashion",
        content: [
            "Explore a blend of traditional Indian attire and contemporary fashion with our curated collection. For women, discover elegant sarees, kurtis, stylish tops, chic footwear, and fashionable clutches, perfect for any occasion. Men can embrace timeless ethnic wear like shirts and dhotis, alongside the latest trends to refresh their wardrobes and stay on top of fashion.",
        ],
    },
    {
        title: "Spirituality",
        content: [
            "Nurture your mind and soul with our spiritual products, including incense, candles, spiritual books, and meditation aids. Create a peaceful atmosphere with items that enhance mindfulness and positivity.",
        ],
    },
    {
        title: "Books and Games",
        content: [
            "Explore a wide range of books and traditional games for all ages. From captivating novels to fun family games, find entertainment and learning for every interest.",
        ],
    },
    {
        title: "Pet Care",
        content: [
            "Pamper your pets with our selection of food, grooming products, toys, and health supplements. Keep your furry friends happy and healthy with quality care essentials.",
        ],
    },
];

const whyChooseUs = [
    "We offer responsive customer support.",
    "We provide customized bulk orders to meet your specific needs.",
    "Our pricing is more competitive than other providers.",
    "Enjoy free delivery on orders over INR 5000 or USD 100.",
    "We ensure direct shipping from India, guaranteeing authentic Indian products delivered worldwide.",
];

export default function AboutUsScreen() {
    const handleLinkPress = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <>
            <Stack.Screen options={{ title: 'About Us' }} />
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>

                <Text style={styles.mainTitle}>About Us</Text>
                <Separator style={styles.separator} />

                {/* Intro Section */}
                <View style={styles.section}>
                    <Text style={styles.paragraph}>
                        Welcome to <Text style={styles.link} onPress={() => handleLinkPress('https://thedesifood.com')}>The Desi Food</Text>, your trusted online destination for authentic Indian products. We understand the feeling of missing home when living abroad, and we are here to bridge that gap.
                    </Text>
                    <Text style={styles.paragraph}>
                        Whether you're looking for traditional spices, wellness essentials like Ayurveda, Unani, or Homeopathy, beauty or make-up products, your favorite Indian sweets and snacks, or any Indian product, we deliver the best straight to your doorstep.
                    </Text>
                    <Text style={styles.paragraph}>
                        Our carefully curated selection ensures that every product we offer is authentic, cost effective and true to its roots.
                    </Text>
                    <Text style={styles.paragraph}>
                        We are committed to making it easy for you to enjoy the Indian products you love.
                    </Text>
                </View>

                <Separator style={styles.separator} />

                {/* Challenges Section */}
                <View style={styles.section}>
                    <Text style={styles.heading}>We understand the challenges faced by Indians abroad</Text>
                    <Text style={styles.paragraph}>
                        We know how difficult it can be to find authentic, familiar products that remind you of home. Whether it's the taste of your favorite masala chai or the healing properties of Ayurvedic remedies, the lack of quality, trusted products can leave you feeling disconnected.
                    </Text>
                    <Text style={styles.paragraph}>
                        And that's why we're dedicated to bringing you the finest Indian products with the same authenticity, quality, and most reasonable prices.
                    </Text>
                    <Text style={styles.paragraph}>
                        We're here to make sure that, no matter where you are, you can still experience the flavors and traditions you love.
                    </Text>
                </View>

                <Separator style={styles.separator} />

                {/* Mission Section */}
                <View style={styles.section}>
                    <Text style={styles.heading}>Our Mission</Text>
                    <Text style={styles.paragraph}>
                        Our mission is to make authentic Indian products easily accessible to the Indian diaspora, no matter where they are in the world.
                    </Text>
                    <Text style={styles.paragraph}>We aim to:</Text>
                    <View style={styles.listContainer}>
                        {[
                            "Provide fresh products at reasonable prices, ensuring cost-effectiveness for our customers.",
                            "Support local sellers from India by connecting directly with them, contributing to the local ecosystem without involving middlemen.",
                            "Save your time with fast and reliable delivery, so you don't have to rely on friends or family to bring you your favorite Indian items."
                        ].map((item, index) => (
                            <View key={index} style={styles.listItem}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.listItemText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <Separator style={styles.separator} />

                {/* Categories Section */}
                <View style={styles.section}>
                    <Text style={styles.heading}>Categories of Products We Offer</Text>
                    <Text style={styles.paragraph}>
                        From traditional spices and snacks that capture the essence of India to Ayurvedic health products that promote wellness, we have it all.
                    </Text>
                    <Text style={styles.paragraph}>Here are the categories of products we offer,</Text>

                    <View style={styles.categoriesContainer}>
                        {categories.map((cat, index) => (
                            <View key={index} style={styles.categoryBlock}>
                                <Text style={styles.subHeading}>{cat.title}</Text>
                                {cat.content.map((text, i) => (
                                    <Text key={i} style={styles.paragraph}>{text}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>

                <Separator style={styles.separator} />

                {/* Why Choose Us Section */}
                <View style={styles.section}>
                    <Text style={styles.heading}>Why Choose Us</Text>
                    <View style={styles.listContainer}>
                        {whyChooseUs.map((item, index) => (
                            <View key={index} style={styles.listItem}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.listItemText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <Separator style={styles.separator} />

                {/* Closing Section */}
                <View style={styles.section}>
                    <Text style={styles.heading}>We make you feel closer to home</Text>
                    <Text style={styles.paragraph}>
                        With our wide selection of authentic Indian products and our dedication to customer satisfaction, we strive to bring you a piece of India with every purchase.
                    </Text>
                    <Text style={styles.paragraph}>
                        Thank you for visiting our website. Give us the opportunity to serve you, and we'll ensure that every day feels a little more like home.
                    </Text>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        padding: Layout.padding,
        paddingVertical: 24,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.foreground,
        marginBottom: 16,
        fontFamily: 'serif', // Trying to match the "font-serif" from web
    },
    separator: {
        marginVertical: 16,
    },
    section: {
        marginBottom: 8,
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.foreground,
        marginBottom: 12,
        fontFamily: 'serif',
    },
    subHeading: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.primary,
        marginBottom: 8,
        marginTop: 8,
        fontFamily: 'serif',
    },
    paragraph: {
        fontSize: 16,
        color: Colors.foreground,
        lineHeight: 24,
        marginBottom: 12,
    },
    link: {
        color: Colors.primary,
        fontWeight: '600',
    },
    listContainer: {
        marginTop: 4,
        marginLeft: 8,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 8,
        paddingRight: 16,
    },
    bullet: {
        fontSize: 16,
        color: Colors.foreground,
        marginRight: 8,
        marginTop: -2,
    },
    listItemText: {
        fontSize: 16,
        color: Colors.foreground,
        lineHeight: 22,
        flex: 1,
    },
    categoriesContainer: {
        marginTop: 8,
    },
    categoryBlock: {
        marginBottom: 16,
    },
});
