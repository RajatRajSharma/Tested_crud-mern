const connectDB = require('./config/db');
const User = require('./api/models/User');

const usersData = [
    { srno: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
    { srno: 2, username: 'user2', email: 'user2@example.com', password: 'password2' },
];

const seedDatabase = async () => {
    try {
        await connectDB(); // Connect to MongoDB before seeding
        await User.insertMany(usersData);
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        process.exit(); // Exit the process after seeding
    }
};

seedDatabase();