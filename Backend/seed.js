const mongoose = require('mongoose');
require('dotenv').config();
const Document = require('./models/Document');
const Member = require('./models/Member');

const seedData = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected to MongoDB');

        // Clear existing data
        await Document.deleteMany({});
        await Member.deleteMany({});
        console.log('Cleared existing data');

        // Sample Members
        const members = [
            {
                name: 'Amogha',
                role: 'President',
                image: 'https://via.placeholder.com/400?text=Amogha',
                bio: 'Leading with vision and strategy.',
                category: 'board',
                socials: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com'
                }
            },
            {
                name: 'John Doe',
                role: 'Vice President',
                image: 'https://via.placeholder.com/400?text=John',
                bio: 'Executing operations seamlessly.',
                category: 'core',
                socials: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com'
                }
            },
            {
                name: 'Jane Smith',
                role: 'Secretary',
                image: 'https://via.placeholder.com/400?text=Jane',
                bio: 'Keeping everything organized.',
                category: 'alumni',
                socials: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com'
                }
            }
        ];

        // Sample Documents
        const documents = [
            {
                title: 'Financial Report 2024',
                description: 'Annual financial performance review.',
                fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                category: 'Reports',
                type: 'newsletter',
                month: 'Jan',
                slug: 'financial-report-2024',
                thumbnail: 'https://via.placeholder.com/300?text=Report+Thumb'
            },
            {
                title: 'Investment Strategy Guide',
                description: 'A comprehensive guide to modern investing.',
                fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                category: 'Guides',
                type: 'note',
                date: '2024-02-15',
                slug: 'investment-strategy-guide',
                thumbnail: 'https://via.placeholder.com/300?text=Guide+Thumb'
            },
            {
                title: 'Market Analysis Q1',
                description: 'In-depth analysis of Q1 market trends.',
                fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                category: 'Analysis',
                type: 'newsletter',
                month: 'Mar',
                slug: 'market-analysis-q1',
                thumbnail: 'https://via.placeholder.com/300?text=Analysis+Thumb'
            }
        ];

        await Member.insertMany(members);
        console.log('Seeded members');

        await Document.insertMany(documents);
        console.log('Seeded documents');

        process.exit(0);
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};

seedData();
