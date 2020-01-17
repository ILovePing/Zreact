import Zreact from "./Zreact";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";
import eventlistenersModule from "snabbdom/modules/eventlisteners";

const reconcile = snabbdom.init([propsModule, eventlistenersModule]);

let rootVNode = null;
const render = (el, rootDomElement) => {
  if (rootVNode === null) {
    rootVNode = rootDomElement;
  }
  reconcile(rootVNode, el);
};

Zreact.__updater = instance => {
  // this.setState时候更新__vNode, 并且触发协调
  const oldVNode = instance.__vNode;
  //获取 newVNode
  const newVNode = instance.render();
  //更新 __vNode
  instance.__vNode = reconcile(oldVNode, newVNode);
};

const ZreactDom = { render };
export default ZreactDom;
