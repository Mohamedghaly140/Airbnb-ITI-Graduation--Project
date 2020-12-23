import React , {useState} from 'react'
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";

const SuspenseFallback = () => {
    const [loading , setLoading] = useState(true)
    const override = css`
  display: block;
  margin: 10em auto;
  color: "#000000";
`;
    return (
        <div className="sweet-loading">
        <MoonLoader
          css={override}
          size={120}
          color={"red"}
          loading={loading}
        />
      </div>
    )
}

export default SuspenseFallback
