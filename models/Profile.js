const mongoose = require('mongoose');

//TODO: clean up un needed properties, and test
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  games: [
    {
      title: {
        type: String,
        required: true
      },
      status: {
        type: String,
        enum: ['playing', 'backlog', 'played'],
        default: 'backlog',
        required: true
      },
      imageUrl: {
        type: String
      },
      notes: {
        type: String
      },
      finishedDate: {
        type: Date
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
