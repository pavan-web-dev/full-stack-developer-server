import mongoose from "mongoose";
const schema = mongoose.Schema({
    avatar_location: String,
    userName: String,
    handle: String,
    time: String,
    title: String,
    image: String,
    post_title: String,
    post_content: String,
    num_comment: Number,
    num_retweet: Number,
    num_likes: Number,
    liked: Boolean,
    disliked: Boolean,
    dis_num_likes: Number
}, {collection: 'tuitsnew'});

export default schema;
