import WidgetFactory from '../WidgetFactory';
import ScrollBar from '../ScrollBar';
import Window from '../Window';
import PMScrollbar from './PMScrollbar';
import PMWindow from './PMWindow';

class PMWidgetFactory extends WidgetFactory {
  private static _instance: PMWidgetFactory;

  static getInstance() {
    if (PMWidgetFactory._instance == null) {
      PMWidgetFactory._instance = new PMWidgetFactory();
    }
    return PMWidgetFactory._instance;
  }

  private constructor() {
    super();
  }

  createScrollbar(): ScrollBar {
    return new PMScrollbar();
  }

  createWindow(): Window {
    return new PMWindow();
  }
}


export default PMWidgetFactory;
