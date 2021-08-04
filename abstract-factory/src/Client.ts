import WidgetFactory from './WidgetFactory';
import ScrollBar from './ScrollBar';
import Window from './Window';
import MotifWidgetFactory from './Motif/MotifWidgetFactory';
import PMWidgetFactory from './PresentationManager/PMWidgetFactory';
import { getEnv } from './env';

function getWidgetFactory(): WidgetFactory {
  return getEnv() === 'Motif' ?
    MotifWidgetFactory.getInstance()
    : PMWidgetFactory.getInstance();
}

class Client {
  scrollbar: ScrollBar;
  window: Window;

  constructor() {
    const widgetFactory: WidgetFactory = getWidgetFactory();
    this.scrollbar = widgetFactory.createScrollbar();
    this.window = widgetFactory.createWindow();
  }

  doSomething() {
    this.scrollbar.doSomething();
    this.window.doSomething();
  }
}


export default Client;
