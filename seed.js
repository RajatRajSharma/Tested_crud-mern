import connectDB from './config/db.js';
import User from './api/models/User.js';

const usersData = [
    { srno: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
    { srno: 2, username: 'user2', email: 'user2@example.com', password: 'password2' },
    { srno: 3, username: 'user3', email: 'user3@example.com', password: 'password3' },
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