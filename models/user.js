// boilerplate
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const userSchema = new Schema({
// });
// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Add the bcrypt library
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6 // 6 is a reasonable value

const userSchema = new Schema({
    //* Keep it minimal, keep it clean (name, email, password)
    //! COPY-PASTE
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }
},
//* The 2nd obeject below, after the Schema itself, is the Options and Customizations that aren't related to the model directly but can add ways to how it works.
//! COPY-PASTE
    {
    timestamps: true,
    // Even though it's hashed - don't serialize the password (return it from database)
    toJSON: {
        transform: function(doc, ret){
            delete ret.password;
            return ret
        }
    }
});

// Boilerplate below for password display security (part 5 - just past halfway).
//! COPY-PASTE
userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next
})

module.exports = mongoose.model('User', userSchema);