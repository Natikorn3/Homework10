const root = ReactDOM.createRoot(document.querySelector('#root'));

// const Content = (
//     <div>
//         <h1>Today : { (new Date()).toDateString()}</h1>
//     </div>
//     )

function Counter() {
    return (
        <div class ="counter">
            <button>+</button>
            <h2>{0}</h2>
            <button>-</button>
            <button>C</button>
            <button>X</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Today : {new Date().toDateString()}</h1>
            <h2>Sum = 0</h2>
           <button class="you">Add Counter</button>
            <Counter />
        </div>
    );
}
root.render(<App />);
// const root = document.querySelector('#root');
// const btnAdd = document.querySelector('.btn-add');
// const sumInfo = document.querySelector('.show-sum') 


// function Counter() {
//     let countNum = 0;

//     const makeElement = (tag, attr_n, attr_v, content) => {
//         let output = document.createElement(tag);
//         output.setAttribute(attr_n, attr_v);
//         output.textContent = content;
//         return output;
//     };

//     const updateCounter = (n) => {
//         if (countNum + n < 0) {
//             return;
//         }
//         countNum += n;
//         number.textContent = countNum;
//         sumInfo.textContent = `sum = ${total}`
//     }

//     const delCounter = (e) => {
//         updateCounter(countNum)
//         e.target.closest('.counter').remove();
//     }
    
//     const counter = makeElement('div', 'class', 'counter', '');
//     const number = makeElement('h3', 'class', 'number', '0');
//     const btnInc = makeElement('button', 'class', 'btn-inc', '+');
//     const btnDec = makeElement('button', 'class', 'btn-dec', '-');
//     const btnClr = makeElement('button', 'class', 'btn-clr', 'C');
//     const btnDel = makeElement('button', 'class', 'btn-del', 'X');

//     btnInc.addEventListener('click', () => updateCounter(1));
//     btnDec.addEventListener('click', () => updateCounter(-1));
//     btnClr.addEventListener('click', () => updateCounter(-countNum));
//     btnDel.addEventListener('click', delCounter);

//     counter.append(btnInc);
//     counter.append(number);
//     counter.append(btnDec);
//     counter.append(btnClr);
//     counter.append(btnDel);

//     return counter;
// }

// const hdlAddcounter = () => {
//     root.append(Counter());
// }

// btnAdd.addEventListener('click', hdlAddcounter);
