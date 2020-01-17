import { h } from "snabbdom";

const createElement = (type, props = {}, ...children) => {
  // 如果是class component，调用实例的render函数
  if (type.prototype && type.prototype.isZreactClassComponent) {
    const componentInstance = new type(props);
    componentInstance.__vNode = componentInstance.render();
    componentInstance.__vNode.data.hook = {
      create: () => {
        componentInstance.componentDidMount();
      }
    };
    return componentInstance.__vNode;
  }

  if (typeof type === "function") {
    return type(props);
  }
  let dataProps = {};
  let eventProps = {};
  props &&
    Object.keys(props).forEach(propKey => {
      if (propKey.startsWith("on")) {
        eventProps[propKey.substr(2).toLowerCase()] = props[propKey];
      } else {
        dataProps[propKey] = props[propKey];
      }
    });
  // 所有自定义jsx组件最终都会回归到这一步 渲染原生到Html标签
  return h(type, { props: dataProps, on: eventProps }, children);
};

class Component {
  constructor(props) {}

  componentDidMount() {}

  setState(partialState) {
    this.state = {
      ...this.state,
      ...partialState
    };
    Zreact.__updater(this);
  }

  render() {}
}
Component.prototype.isZreactClassComponent = true;

const Zreact = {
  createElement,
  Component
};

export default Zreact;
