import { Button, Typography } from "@mui/material";
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { addCell } from "../Api/api";
import { useAccount } from "wagmi";
import useMakeToast from "../hooks/makeToast";
const Checkout = ({ ceil, setBLoading, loadCeil, discountValue }) => {
  const makeToast = useMakeToast();
  const { address } = useAccount();
  const [price, setPrice] = React.useState(0);
  const calculatePrice = React.useCallback(async () => {
    if (ceil) {
      // let priceCalculate = Math.round(
      //   Number(ceil.totalceil.length) * Number(ceil.tilePrice)
      // );
      let priceCalculate = await (Number(ceil.totalceil.length) *
        Number(ceil.tilePrice));
      priceCalculate = priceCalculate.toFixed(2);
      let updatePrice = (+priceCalculate - +discountValue) * 100;
      return +updatePrice;
    }
  }, [ceil, discountValue]);

  React.useEffect(() => {
    (async () => {
      const getPrice = await calculatePrice();
      setPrice(getPrice);
    })();
  }, [calculatePrice, setPrice, discountValue, ceil]);
  async function handleToken(token, addresses) {
    setBLoading(true);
    if (price) {
      const data = {
        snapshot: ceil.snapshot,
        user: ceil.user,
        lang: ceil.lang,
        long: ceil.long,
        tilePrice: ceil.tilePrice,
        areaLength: ceil.totalceil.length,
        totalceil: JSON.stringify(ceil.totalceil),
        address: ceil.address,
        discount: +discountValue,
        token: token,
        mapaddress: ceil.mapaddress,
        type: "stripe",
      };

      const response = await addCell(data, setBLoading);
      if (response.status === "ok") {
        setBLoading(false);
        makeToast(`${response?.message}`, "success", 3, "Success");
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } else {
        if (response?.status === "failed") {
          makeToast(
            response.message.reason || response.message,
            "error",
            3,
            "Failed"
          );
        } else {
          makeToast(response.message, "error", 3, "Failed");
        }
        setBLoading(false);
      }
    } else {
      console.log("not Found!");
    }
  }



  return (
    <div>
      {address ? (
        loadCeil ? (
          <StripeCheckout
            style={{ width: "100%", margin: "5px 0px" }}
            className="center stripeMethod"
            stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
            token={handleToken}
            amount={price}
            name="Sample Book"
            billingAddress
          />
        ) : (
          <Typography sx={{ color: "#37D1B5", fontWeight: 700 }}>
            Loading .........
          </Typography>
        )
      ) : (
        <Button
          sx={{
            fontSize: { xs: "12px", md: "20px" },
            width: "100%",
            marginTop: { xs: "10px", md: "20px" },
            borderRadius: "10px",
            background:
              " linear-gradient(90deg, rgba(110,7,199,0.9223039557619923) 37%, rgba(204,13,227,0.981127485173757) 79%)",
            fontWeight: 700,
          }}
        >
          Please connect to your wallet!
        </Button>
      )}
    </div>
  );
};

export default Checkout;
