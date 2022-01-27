const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide an email'],
        validate: [(val) => val.includes('@'), 'Please provide an valid email']
    }
    ,
    password: {
        type: String,
        required: [true, 'Please provide an password'],
        minlength: [5, 'Please enter password with length more then five']
    }
})


userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash
    next()
})

userSchema.statics.login = async function (email ,password) {
    const user = await this.findOne({ email })
    if(password){
        const compareResult = await bcrypt.compare(password,user.password);
        if(!compareResult){
            throw new Error('password is not correct')
        }
        else {
            return user;
        }
    }
    else {
        throw new Error('password is required')
    }
}


const User = mongoose.model('User', userSchema)
module.exports = User