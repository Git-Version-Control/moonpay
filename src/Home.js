// Home.jsx
import { useState } from 'react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "14px 28px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    background: "#6366f1",
    color: "white",
    cursor: "pointer",
    fontWeight: "600"
  }
};


export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => setVisible(true)}>
        Buy Crypto with MoonPay
      </button>

      <MoonPayBuyWidget
        variant="overlay"           // or "embedded" / "newTab"
        baseCurrencyCode="usd"
        baseCurrencyAmount="50"     // keep under 200 in sandbox!
        defaultCurrencyCode="eth"
        visible={visible}
        onCloseOverlay={() => setVisible(false)}
      />
    </div>
  );
}