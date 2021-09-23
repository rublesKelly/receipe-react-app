//This is where all the graphql stuff goes this is where we define our schema with objects and such 
const   {GraphQLObjectType, GraphQLInt, 
        GraphQLString, GraphQLBoolean} = require('graphql');

// //Create recipe type
// const recipeType = new GraphQLObjectType({
//     name: 'uinset name here',
//     description: 'stuff goes here bro',
//     fields () => ({
//         field1: {type: GraphQLString}
//     })
// })