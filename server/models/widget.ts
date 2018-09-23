import * as mongoose from 'mongoose';

const widdgetSchema = new mongoose.Schema({
  owmId: Number
});

const Widget = mongoose.model('Widget', widdgetSchema);

export default Widget;
