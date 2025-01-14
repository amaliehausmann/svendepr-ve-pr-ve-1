import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { Footer } from "../components/Footer/Footer";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export const MainLayout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    if (modalIsOpen === true) {
      setModalIsOpen(false);
    } else {
      setModalIsOpen(true);

      toast.success("Tilmelding successfuld!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  }

  return (
    <main>
      <Header />
      <Outlet />
      {modalIsOpen && (
        <Modal
          action={toggleModal}
          title="Tak for din tilmelding!"
          text="Du vil nu modtage nyheder fra os fremover"
        />
      )}
      <Footer action={toggleModal} />
    </main>
  );
};
