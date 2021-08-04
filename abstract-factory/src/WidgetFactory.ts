import Window from './Window';
import ScrollBar from './ScrollBar';

abstract class WidgetFactory {
  abstract createWindow(): Window;

  abstract createScrollbar(): ScrollBar;
}

export default WidgetFactory;
