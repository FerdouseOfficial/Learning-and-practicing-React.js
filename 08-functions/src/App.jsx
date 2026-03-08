import React from 'react'

const App = () => {
  function btnclicked(){
    console.log("button is clicked");
  }
  // function inputChanging(val) {
  //   console.log(val);
  // }
  const pageScrolling= (val) =>{
    if(val>0){
      console.log("Going forward");
    } else{
      console.log("Going backward")
    }
  }
  return (
    <div onWheel={(elem) =>{
      pageScrolling(elem.deltaY);
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App