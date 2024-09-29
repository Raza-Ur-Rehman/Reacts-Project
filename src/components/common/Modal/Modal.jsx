import "./Modal.css";

const Modal = (modal,setModal) => {
  const handleClickOutside = (e) => {
    if (modal && modal.containerRef.current &&!modal.containerRef.current.contains(e.target)) {
      setModal(false);
    }
  };
  return (
    <>
      {modal && 
        <>
        <div className="modal-wrapper">
          <div className="overlay"></div>
          <div className="modal">
            <div className="section1">
              <div className="image-wrapper">
                <img src="/assets/img/img2.png" alt={Modal.name} />
              </div>
            </div>
            <div className="section2">
              <div className="modal-contant">
                <div className="modal-header">
                  <h1>Hello World</h1>
                  <div className="close-icon">
                    <button
                      onClick={()=>setModal(false)}
                      className="fa-solid fa-x"
                    ></button>
                  </div>
                </div>
                <div className="price">
                  <h4>Rs:</h4>
                  <h3>Rs: </h3>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    consectetur, velit vel ultricies dictum, justo erat laoreet
                    ligula, at euismod metus est eu massa.
                  </p>
                </div>
                <div className="img-gallary">
                  <div className="img-box">
                    <img src="/assets/img/img1.png" alt="img1" />
                  </div>
                  <div className="img-box">
                    <img src="/assets/img/img2.png" alt="img2" />
                  </div>
                  <div className="img-box">
                    <img src="/assets/img/img3.png" alt="img3" />
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button className="btn">Add to Cart</button>
                  {/* <button className="btn">Order Now</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      }
    </>
  );
};

export default Modal;
