import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import  ClassComponent from './components/demoComponent/ClassComponent';
import FunctionComponent from './components/demoComponent/FunctionComponent';
import Baitaplayout1 from './components/baitaplayout1/Baitaplayout1';
import DataBinding from './components/DataBinding/DataBinding';
import RenderWithCondition from './components/RenderWithCondition/RenderWithCondition';
import HandleEvent from './components/HandleEvent/HandleEvent';
import BaiTapLayout2 from './components/baitaplayout2/BaiTapLayout2';
import State from './components/State/State';
import BaiTapChonXe from './components/BaiTapChonXe/BaiTapChonXe';
import Styling from './components/Styling/Styling';
import BaiTapStyling from './components/BaiTapStyling/BaiTapStyling';
import RenderWithArrat from './components/RenderWithArray/RenderWithArrat';
import BaiTapFilm from './components/BaiTapFilm/BaiTapFilm';
import Parent from './components/Props/Parent';
import BaiTapGiay from './components/BaiTapGiay/BaiTapGiay';
import BaiTapDienThoai from './components/BaiTapDienThoai/BaiTapDienThoai';
import BaiTapTuVung from './components/baitaptuvung/BaiTapTuVung/BaiTapTuVung';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // cách gọi thẻ thứ nhất
    <>
    {/* <ClassComponent></ClassComponent> 
    <ClassComponent/>
    <FunctionComponent/> */}
    {/* <Baitaplayout1/>
    <DataBinding/>
    <RenderWithCondition/>
    <HandleEvent/> */}

    {/* <BaiTapLayout2/> */}
    {/* <State/> */}
    {/* <BaiTapChonXe/> */}
    {/* <Styling/> */}
    {/* <BaiTapStyling/> */}
    {/* <RenderWithArrat/> */}
    {/* <BaiTapFilm/> */}
    {/* <Parent/> */}
    {/* <BaiTapGiay/> */}
    {/* <BaiTapDienThoai/> */}
    <BaiTapTuVung/>
    </>
    // cách gọi thẻ thứ hai
  );
}
// phải có thẻ cha bao quanh thẻ con thì mới return dc
// <div> </div> trong react là đối tượng jsx
//{}
export default App;
