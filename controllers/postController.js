const postService = require('../services/postService');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des articles.' });
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postService.getPostById(id);
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'article par ID.' });
  }
};

exports.createPost = async (req, res) => {
  const postData = req.body;

  try {
    const newPost = await postService.createPost(postData);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'article.' });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const updatedPostData = req.body;

  try {
    const updatedPost = await postService.updatePost(id, updatedPostData);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'article.' });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await postService.deletePost(id);
    res.status(200).json({ message: 'Article supprimé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'article.' });
  }
};
