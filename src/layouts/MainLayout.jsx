import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { Footer } from "../components/Footer/Footer";
import { toast } from "react-toastify";

export const MainLayout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    if (modalIsOpen === true) {
      setModalIsOpen(false);
    } else {
      setModalIsOpen(true);
      toast.success("Tilmelding successfuld!");
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
          custom='newsletter'
        />
      )}
      <Footer action={toggleModal} />
    </main>
  );
};
