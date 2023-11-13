const Post = require("../models/Post");

exports.getAllPosts = async () => {
  try {
    const posts = await Post.findAll();
    return posts;
  } catch (error) {
    console.error("Erreur lors de la récupération des posts :", error);
    throw new Error("Erreur lors de la récupération des posts.");
  }
};

exports.getPostById = async (postId) => {
  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      throw new Error("Post non trouvé.");
    }

    return post;
  } catch (error) {
    console.error("Erreur lors de la récupération du post par ID :", error);
    throw new Error("Erreur lors de la récupération du post par ID.");
  }
};

exports.createPost = async (postData) => {
  try {
    const newPost = await Post.create(postData);
    return newPost;
  } catch (error) {
    console.error("Erreur lors de la création du post :", error);
    throw new Error("Erreur lors de la création du post");
  }
};

exports.updatePost = async (postId, updatedPostData) => {
  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      throw new Error("Post non trouvé.");
    }

    await post.update(updatedPostData);
    return post;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour du post.");
  }
};

exports.deletePost = async (postId) => {
  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      throw new Error("Post non trouvé.");
    }

    await post.destroy();
    return { message: "Post supprimé avec succès." };
  } catch (error) {
    throw new Error("Erreur lors de la suppression du post.");
  }
};
