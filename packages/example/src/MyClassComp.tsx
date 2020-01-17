import Zreact from "Zreact/src/Zreact";

class MyClassComp extends Zreact.Component {
  state: { count: number };
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: this.state.count++ });
    }, 5000);
  }

  render() {
    return (
      <div>
        MyClassComp,count:{this.state.count}
        <br />
        <button
          onClick={() => {
            console.log(this.state);
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default MyClassComp as any;
