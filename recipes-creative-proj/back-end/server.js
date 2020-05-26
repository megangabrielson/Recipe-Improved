const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Create a scheme for recipes
const recipeSchema = new mongoose.Schema({
  name: String,
  instructions: String,
  ingredients: String,
  area: String,
  category: String,
  path: String,
});

// Create a model for recipes
const Recipe = mongoose.model('Recipe', recipeSchema);

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  recipeList: [{
    type: mongoose.Schema.ObjectId,
    ref: "Recipe"
  }, ],
});

const User = mongoose.model('User', userSchema);

// Create a new user
app.post('/api/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    name: req.body.name,
  });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create a new recipe - back end use only
app.post('/api/recipe', async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
    area: req.body.area,
    category: req.body.category,
    path: req.body.path,
  });
  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edits a recipe
app.put('/api/:id', async (req, res) => {
  try {
    let recipe = await Recipe.findOne({
      _id: req.params.id
    });
    recipe.name = req.body.name;
    recipe.instructions = req.body.instructions;
    recipe.ingredients = req.body.ingredients;
    await recipe.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edits the list of a user's recipes
app.put('/api/user/recipes/:id', async (req, res) => {
  try {
    //finds the user
    const user = await User.findOne({
      username: req.body.username
    });
    let recipe = await Recipe.findOne({
      _id: req.params.id
    });

    //adding a recipe
    if (req.body.remove == false) {
      user.recipeList.push(recipe);
    } else { //removing a recipe
      console.log(req.params.id)
      user.recipeList = user.recipeList.filter(item => req.params.id != item);
      console.log(user.recipeList);
    }
    await user.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the recipes
app.get('/api/', async (req, res) => {
  try {
    let recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Gets a single recipe
app.get('/api/recipe/:id', async (req, res) => {
  try {
    let recipe = await Recipe.findOne({
      _id: req.params.id
    });
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Gets a user for login purposes
app.post('/api/user', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username
    }).populate('recipeList');
    if (!user)
      return res.status(404).send({
        message: "Username not found"
      });
    return res.send({
      user: user
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete a recipe -- back end use only
app.delete('/api/:id', async (req, res) => {
  try {
    await Recipe.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

userSchema.methods.toJSON = function() {
  var obj = this.toObject();
  return obj;
}

// connect to the database
mongoose.connect('mongodb://localhost:27017/yourRecipes', {
  useNewUrlParser: true
});


app.listen(3003, () => console.log('Server listening on port 3003!'));
