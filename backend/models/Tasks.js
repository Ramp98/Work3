const mongoose = require('mongoose');
const slugify = require('slugify');
// const geocoder = require('../utils/geocoder');

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add the title'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description can not be more than 500 characters']
    },
    project: {
        type: String
    },
    assignee:{
        type:String,
        maxlength: [50, 'Assignee can not be more than 50 characters']
    },
    status:{
        type:String
    },
    // website: {
    //   type: String,
    //   match: [
    //     /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    //     'Please use a valid URL with HTTP or HTTPS'
    //   ]
    // },
    
    duedate: {
      type: String,
    },
    subtasks: {
        type:String
    },
    comments: {
        type: String
      },
      attachments: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      },
    },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Create bootcamp slug from the name
TaskSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Geocode & create location field
// BootcampSchema.pre('save', async function(next) {
//   const loc = await geocoder.geocode(this.address);
//   this.location = {
//     type: 'Point',
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAddress: loc[0].formattedAddress,
//     street: loc[0].streetName,
//     city: loc[0].city,
//     state: loc[0].stateCode,
//     zipcode: loc[0].zipcode,
//     country: loc[0].countryCode
//   };

//   // Do not save address in DB
//   this.address = undefined;
//   next();
// });


module.exports = mongoose.model('Task', TaskSchema);
