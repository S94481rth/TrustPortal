const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    userid: {
        type: String,
        ref: 'User',
        required: true
    },
    id_card: {
        data: Buffer,
        contentType: String
    },
    birth_certificate: {
        data: Buffer,
        contentType: String
    },
    sslc: {
        // id = gdrivegenerated!
        data: Buffer,
        contentType: String
    },
    puc: {
        data: Buffer,
        contentType: String
    },
    graduation: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Document', documentSchema);