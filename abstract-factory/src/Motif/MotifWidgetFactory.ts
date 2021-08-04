import WidgetFactory from '../WidgetFactory';
import ScrollBar from '../ScrollBar';
import Window from '../Window';
import MotifWindow from './MotifWindow';
import MotifScrollbar from './MotifScrollbar';


class MotifWidgetFactory extends WidgetFactory {
  private static _instance: MotifWidgetFactory;

  static getInstance(): MotifWidgetFactory {
    if (MotifWidgetFactory._instance == null) {
      MotifWidgetFactory._instance = new MotifWidgetFactory();
    }

    return MotifWidgetFactory._instance;
  }

  createScrollbar(): ScrollBar {
    return new MotifScrollbar();
  }

  createWindow(): Window {
    return new MotifWindow();
  }
}


export default MotifWidgetFactory;
