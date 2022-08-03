const { Post } = require("../models");

const postData = [
  {
    title: "The ‘Form’ Element Created the Modern Web. Was It a Big Mistake?",
    post_content:
      "The real problem online is that giant companies are creating enormous machine-learning models that inherit tremendous bias, and they are using that to guide the future of the web",
    user_id: 1,
  },
  {
    title: "Think App Updates Suck? Try Upgrading a Programming Language",
    post_content:
      "UPDATING SOFTWARE CAN be a pain. Maybe you can't find a feature you depend on. Or maybe that feature is gone for good. Other software you use might not work with the new version. Or maybe the new version is just flat-out broken. And yet, with few exceptions, most of us stay on the technology update treadmill.",
    user_id: 2,
  },
  {
    title: "Weather app now available on app store!!!",
    post_content:
      "Newly created event seeker app  with weather features done by coding student in UTSA is now featured as a free applicaiton. You can use it to check the weather anywhere you are and find events at the same time.",
    user_id: 3,
  },
  {
    title: "Blog Tech Tech  goes public!",
    post_content:
      "A newly built app by undergraduates has been made publicly available!",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
