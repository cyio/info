import BaseWidget from './BaseWidget';

export default class TickerTapeWidget extends BaseWidget {

  widgetName = () => ('ticker-tape');

  configuration = () => ({
    locale: this.props.locale ? this.props.locale : 'zh_CN',
  });
}

