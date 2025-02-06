import React, { useState } from "react";
import SubscriptionModal from "../components/modal/SubscriptionModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>홈페이지</h1>
      <button onClick={() => setIsModalOpen(true)}>구독하기</button>

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
