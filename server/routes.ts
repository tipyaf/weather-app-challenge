import * as express from 'express';

import WidgetCtrl from './controllers/widget';
import Widget from './models/widget';

export default function setRoutes(app) {

  const router = express.Router();

  const widgetCtrl = new WidgetCtrl();

  // widgets
  router.route('/widgets/weatherWidgets').get(widgetCtrl.getAll);
  router.route('/widgets/weatherWidgets/count').get(widgetCtrl.count);
  router.route('/widgets/weatherWidgets').post(widgetCtrl.insert);
  router.route('/widget/weatherWidgets/:id').get(widgetCtrl.get);
  router.route('/widget/weatherWidgets/:id').put(widgetCtrl.update);
  router.route('/widget/weatherWidgets/:id').delete(widgetCtrl.delete);


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
