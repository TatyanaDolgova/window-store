const modals = () => {
  function bindModal(trigger, modal, close) {
    trigger.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDeault();
      }

      modal.style.display = "block";
    });
  }
};

export default modals;
