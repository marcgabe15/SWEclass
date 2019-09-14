/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var mongoose = require('mongoose'),
    config = require('./config')
    Listing = require('./ListingSchema.js'),
    Schema = mongoose.Schema
mongoose.connect(config.db.uri, { useUnifiedTopology: true, useNewUrlParser: true}).
  catch (error => console.log(error))
var findLibraryWest = function() {
  Listing.find({name: 'Library West'}, (err, entry) => {
    console.log(entry)
  })
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.findOneAndRemove({code: 'CABL'}, (err, entry) => {
    if (err) throw err
    console.log(entry)
  })
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {

  Listing.findOneAndUpdate({address: "701 N Broadway, Sleepy Hollow, NY 10591, United States"}, 
  {address: "102 Phelps Lab, Gainesville, FL 32611"}, function(err, entry) {
    if (err) throw err
    console.log(entry)
  })
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
};
var retrieveAllListings = function() {
  Listing.find({}, function (err, users) {
    if (err) throw err
    console.log(users)
  })
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
