const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment_text: "Wow thats crazy news!",
  },
  {
    user_id: 1,
    post_id: 2,
    comment_text: "That is really awesome!!",
  },
  {
    user_id: 4,
    post_id: 3,
    comment_text: "Totally awesome, really!",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "Thats great news! interesting.",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Good Job!",
  },
  {
    user_id: 2,
    post_id: 4,
    comment_text: "thats a great work! looks amazing!!!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
