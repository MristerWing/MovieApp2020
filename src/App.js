function Food({ name, img }) {
	return (
		<div>
			<h2>Hello {name}</h2>
			<img alt={name} src={img}></img>
		</div>
	);
}

function App() {
	const list = [
		{
			name: 'kimchi',
			img: `https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png`,
		},
		{
			name: 'ramen',
			img: `https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df6a13ccfacca097aba5f1c7f81a696bc901822ee3827310c9825c68b6f74872fa1`,
		},
		{
			name: 'steak',
			img: `https://img.huffingtonpost.com/asset/5bf24ac824000060045835ff.jpeg?ops=1778_1000`,
		},
	];

	return (
		<div>
			<h1>Hello</h1>
			{list.map(({ name, img }, key) => (
				<Food key={key} name={name} img={img}></Food>
			))}
		</div>
	);
}

export default App;
