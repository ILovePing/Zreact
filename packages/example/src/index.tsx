import Zreact from "Zreact/src/Zreact";
import ZreactDom from "Zreact/src/Zreact-dom";
import MyClassComp from "./MyClassComp";
const MyComp = ({ name }: { name: string }) => <p>{name}</p>;
const MyApp = (
  <div>
    <p>22</p>
    <div>11</div>
    <MyComp name="mycomp" />
    <MyClassComp />
  </div>
);
ZreactDom.render(MyApp, document.getElementById("root"));
