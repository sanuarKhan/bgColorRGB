//  steps  
//1. onload hander
// 2. make cunnection
// 3. create rgb gen
// 4. add eent listene

window.onload = () => (
  main()
);

function main(){
  const root = document.getElementById('root');
  const btn = document.getElementById('btn');

	btn.addEventListener('click', function () {
		const bgColor = gen();
		root.style.backgroundColor = bgColor;
	});
}

function gen() {
  const green = Math.floor(Math.random()*255);
  const red = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);

  return `rgb(${green}, ${red}, ${blue})`;
}