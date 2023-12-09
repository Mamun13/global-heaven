import {useRouter} from 'next/router';

const PaymentStatus = () => {
  const router = useRouter();
  const { status } = router.query;

  return (
    <div style={{ padding: '200px 0', fontSize: "34px", textAlign: "center" }}>
        {status === "success" && <p>Payment Successful</p>}
      {status === "fail" && <p>Payment Failed</p>}
      {status === "cancel" && <p>Payment Canceled</p>}
    </div>
  );
};

export default PaymentStatus;
