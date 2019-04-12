class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
			
		};
	}

	reset = (e) => {
		this.setState ({
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		});
	};


  // print = (e) => {
  //  this.display.innerText = this.format(this.times);
  // };

  start = (e) => {
    if(!this.state.running){
      this.setState({running: true});
      this.watch = setInterval(() => this.step(), 10);
    }
  };

  step = (e) => {
    if(!this.state.running) return;
    this.calculate();
    // this.print();
  };

  calculate = (e) => {
    let minutes = this.state.times.minutes;
    let seconds = this.state.times.seconds;
    let miliseconds = this.state.times.miliseconds;

    miliseconds +=1;
      if (miliseconds>=100){
        seconds +=1;
        miliseconds = 0;
      }
      if(seconds >=60){
        minutes +=1;
        seconds = 0;
      }
      
    this.setState({
      times: {
        minutes: minutes,
        seconds: seconds,
        miliseconds: miliseconds
      }
    });
  };


  stop = (e) => {
    this.setState({running: false});
    clearInterval(this.watch);    
  };

  pad0 = (value) => {
      let result = value.toString();
      if (result.length < 2) {
          result = '0' + result;
      }
      return result;
  };

	format =(times) => {
		return `${this.pad0(this.state.times.minutes)}:${this.pad0(this.state.times.seconds)}:${this.pad0(Math.floor(this.state.times.miliseconds))}`;
	};


	render() {
		return(
			<div>
				<div className="wrapper">
					<nav className="controls">
						<a href="#" className="button" onClick={this.start}>Start</a>
						<a href="#" className="button" onClick={this.stop}>Stop</a>
					</nav>
					<div className="stopwatch">{this.format()}</div>
				</div>
			</div>
		);
	}
}

