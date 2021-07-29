import React, {useState, useEffect} from "react";
import AwesomeSlider from 'react-awesome-slider';
import img1 from '../../assets/trucks2.jpeg'
import img2 from '../../assets/trucks3.jpeg'
import img3 from '../../assets/trucks4.jpeg'

import 'react-awesome-slider/dist/styles.css';
import './home.css'


const Home = () => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setSelected((s)=> s > 1 ? 0 : s + 1)
    }, 3000);
    return () => {
      
    }
  }, [selected])

  

  return (
    <div id="home" className="home">
      <div className="banner">
        <AwesomeSlider fillParent={true} bullets={false} selected={selected}>
          <div data-src={img1} className="slide-div">
            <div className="bn-text">
              <div className="heading-div">
                <h1 className="heading-small">One step solution for your</h1>
                <h1 className="heading-big">CARGO TRANSPORT</h1>
              </div>
            </div>
          </div>
          <div data-src={img2} className="slide-div">
          <div className="bn-text">
              <div className="heading-div">
                <h1 className="heading-small" id="heading-smaller">Safe and on time delivery of your goods is our primary concern.</h1>
                <h1 className="heading-big-2">100% GUARANTEED</h1>
              </div>
            </div>
          </div>
          <div data-src={img3} className="slide-div">
          <div className="bn-text">
              <div className="heading-div">
                <h1 className="heading-small" id="heading-smallest">In accordance with your needs we organise domestic deliveries of complete and partial shipments</h1>
                <h1 className="heading-big-3">ANY DESTANATION IN THE US</h1>
              </div>
            </div>
          </div>
        </AwesomeSlider>
          
      </div>
    </div>
  )
};

export default Home;
