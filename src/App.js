import './App.css';

function App() {
  return (
    <div className="container">
		<div className="row">
			<div className="col-md-12 col1">
				<h1>0</h1>
			</div>
		</div>
		<div className="row col6">
	
			<div className="col-md-3 i1"><h2>AC</h2></div>
			<div className="col-md-3 i2"><h2>+/-</h2></div>
			<div className="col-md-3 i3"><h2>%</h2></div>
			<div className="col-md-3 color5"><h2>÷</h2></div>
		</div>
		<div className="row col2">
			<div className="col-md-3 i4"><h2>7</h2></div>
			<div className="col-md-3 i5"><h2>8</h2></div>
			<div className="col-md-3 i6"><h2>9</h2></div>
			<div className="col-md-3 color1"><h2>x</h2></div>
		</div>
		<div className="row col3">
			<div className="col-md-3 i7"><h2>4</h2></div>
			<div className="col-md-3 i8"><h2>5</h2></div>
			<div className="col-md-3 i9"><h2>6</h2></div>
			<div className="col-md-3 color2"><h2>-</h2></div>
		</div>
		<div className="row col4">
			<div className="col-md-3 i10"><h2>1</h2></div>
			<div className="col-md-3 i11"><h2>2</h2></div>
			<div className="col-md-3 i12"><h2>3</h2></div>
			<div className="col-md-3 color3"><h2>+</h2></div>
		</div>
		<div className="row col5">
			<div style={{paddingLeft: '20px'}} className="col-md-6"><h2>0</h2></div>
			<div className="col-md-3 i13"><h2>.</h2></div>
			<div className="col-md-3 color4"><h2>=</h2></div>
		</div>
    </div>

  );
}

export default App;
