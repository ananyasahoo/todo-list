// import {memo} from "react"
// export default function Parent() {

//     const [count, setCount] = useState(0);

//     const printHello = () => {

//         console.log("hello");

//       };

//     const incrementCount = () => {

//         setCount(count + 1);

//       };

//     console.log("Parent");

//     return (

//         <>

//           <Child1 count ={count}/>

//           <Child2 />

//           <Child3 printHello={printHello} />

//           <button onClick={incrementCount}>Increment</button>

//         </>

//       );

//     }

//     const Child1 = ({count}) => {

//     return (<div>{`In Child1 ${count}`}</div>)

//     }

//     const Child2 = () => {

//     return (<div>{`In Child2`}</div>)

//     }

//     const Child3 = ({printHello}) => {

//     return (<div>{‘ In Child3’}</div>)

//     }

//     memo {Child2,Child3};
