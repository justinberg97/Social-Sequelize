const { Comment, Like, Post, Profile, User } = require("./index");
const sequelize = require('./db/connection.js');
const users = require('./seed/users.json');
const profiles = require('./seed/profiles.json');
const posts = require('./seed/posts.json');
const comments = require('./seed/comments.json');
const likes = require('./seed/likes.json');
describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await sequelize.sync({ force: true });
    })

    // Write your tests here
    
    test("can create a user", async function() {
        await User.bulkCreate(users);
        const foundUser = await User.findByPk(1);
        expect(foundUser).toEqual(expect.objectContaining(users[0]));
    })

    test("can create a Profile", async function() {
        await Profile.bulkCreate(profiles);
        const foundProfile = await Profile.findByPk(1);
        expect(foundProfile).toEqual(expect.objectContaining(profiles[0]));
    })

    test("can create a Post", async function() {
        await Post.bulkCreate(posts);
        const foundPost = await Post.findByPk(1);
        expect(foundPost).toEqual(expect.objectContaining(posts[0]));
    })

    test("can create a Comment", async function() {
        await Comment.bulkCreate(comments);
        const foundComment = await Comment.findByPk(1);
        expect(foundComment).toEqual(expect.objectContaining(comments[0]));
    })

    
    test("can create a Like", async function() {
        await Like.bulkCreate(likes);
        const foundLike = await Like.findByPk(1);
        console.log(JSON.stringify(foundLike, null, 2))
        expect(foundLike.reaction).toEqual('1');
    })
})