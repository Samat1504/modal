import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

const App = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="app">
      <main>
        <button className="open__btn" onClick={() => setModalActive(true)}>
          Open modal window
        </button>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse corrupti iusto, facere harum ducimus ipsa similique obcaecati
            quibusdam quam nihil non temporibus, doloribus aliquid quas magni.
            Illum nam labore dolor eum ducimus cupiditate odio et, temporibus esse
            aliquam a obcaecati praesentium quam accusantium assumenda fuga sint!
            Tempora, praesentium laboriosam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse corrupti iusto, facere harum ducimus ipsa similique obcaecati
            quibusdam quam nihil non temporibus, doloribus aliquid quas magni.
            Illum nam labore dolor eum ducimus cupiditate odio et, temporibus esse
            aliquam a obcaecati praesentium quam accusantium assumenda fuga sint!
            Tempora, praesentium laboriosam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse corrupti iusto, facere harum ducimus ipsa similique obcaecati
            quibusdam quam nihil non temporibus, doloribus aliquid quas magni.
            Illum nam labore dolor eum ducimus cupiditate odio et, temporibus esse
            aliquam a obcaecati praesentium quam accusantium assumenda fuga sint!
            Tempora, praesentium laboriosam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse corrupti iusto, facere harum ducimus ipsa similique obcaecati
            quibusdam quam nihil non temporibus, doloribus aliquid quas magni.
            Illum nam labore dolor eum ducimus cupiditate odio et, temporibus esse
            aliquam a obcaecati praesentium quam accusantium assumenda fuga sint!
            Tempora, praesentium laboriosam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse corrupti iusto, facere harum ducimus ipsa similique obcaecati
            quibusdam quam nihil non temporibus, doloribus aliquid quas magni.
            Illum nam labore dolor eum ducimus cupiditate odio et, temporibus esse
            aliquam a obcaecati praesentium quam accusantium assumenda fuga sint!
            Tempora, praesentium laboriosam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse corrupti iusto, facere harum ducimus ipsa similique obcaecati
            quibusdam quam nihil non temporibus, doloribus aliquid quas magni.
            Illum nam labore dolor eum ducimus cupiditate odio et, temporibus esse
            aliquam a obcaecati praesentium quam accusantium assumenda fuga sint!
            Tempora, praesentium laboriosam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            esse corrupti iusto, facere harum ducimus ipsa similique obcaecati
            quibusdam quam nihil non temporibus, doloribus aliquid quas magni.
            Illum nam labore dolor eum ducimus cupiditate odio et, temporibus esse
            aliquam a obcaecati praesentium quam accusantium assumenda fuga sint!
            Tempora, praesentium laboriosam.
        </p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          aliquam optio quas nostrum asperiores harum esse debitis? Repellendus
          facere saepe doloribus rem architecto, illo placeat magnam recusandae
          debitis cum. Cumque.
        </p>
      </Modal>
    </div>
  );
};

export default App;
