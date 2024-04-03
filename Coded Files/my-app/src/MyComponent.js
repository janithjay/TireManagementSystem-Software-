import * as React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/react";

const GradientHeader = ({ title, subtitle }) => (
  <header
    css={{
      background: "linear-gradient(92deg, #9181F4 -4.32%, #0936DB 107.92%)",
      padding: "44px 67px",
      display: "flex",
      gap: "20px",
      fontWeight: 700,
      "@media (max-width: 991px)": {
        flexWrap: "wrap",
        padding: "20px",
      },
    }}
  >
    <h1
      css={{
        color: "#EBFF00",
        fontSize: "48px",
        margin: 0,
        flexGrow: 1,
        "@media (max-width: 991px)": {
          fontSize: "40px",
        },
      }}
    >
      {title}
    </h1>
    <p
      css={{
        color: "#FFF",
        fontSize: "32px",
        textAlign: "right",
        margin: "auto 0",
        flexGrow: 1,
      }}
    >
      {subtitle}
    </p>
  </header>
);

const InputField = ({ icon, label }) => (
  <div
    css={{
      backgroundColor: "rgba(240, 237, 255, 0.80)",
      borderRadius: "16px", 
      padding: "23px 60px",
      display: "flex",
      alignItems: "start",
      fontSize: "32px",
      color: "#1C1C1C",
      marginTop: "19px",
      "@media (max-width: 991px)": {
        padding: "20px",
      },
    }}
  >
    <div css={{ display: "flex", gap: "20px", marginLeft: "105px", maxWidth: "100%", "@media (max-width: 991px)": { marginLeft: "10px" } }}>
      <img
        src={icon}
        alt=""
        css={{ width: "40px", aspectRatio: "1.05", objectFit: "contain" }}
      />
      <label css={{ alignSelf: "start", marginTop: "11px", flexGrow: 1 }}>
        {label}
      </label>
    </div>
  </div>
);

const AccountType = () => (
  <div
    css={{
      backgroundColor: "rgba(240, 237, 255, 0.80)",
      borderRadius: "16px",
      padding: "23px 38px 23px 80px", 
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "32px",
      color: "#1C1C1C", 
      marginTop: "19px",
      "@media (max-width: 991px)": {
        flexWrap: "wrap",
        padding: "20px",
      },
    }}
  >
    <div css={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/babc933142d4e70fd9a277a6e22fd1b4f3f15d6dd069708f505bbf84bbe2220c?apiKey=96e1cba5b127436faff0969b56b97d88&"
        alt=""
        css={{
          width: "32px",
          aspectRatio: 1,
          objectFit: "contain",
          stroke: "var(--Line_icon, #33363F)",
          strokeWidth: "2px",
          borderStyle: "solid",
          borderColor: "rgba(51, 54, 63, 1)",
          borderWidth: "2px",
        }}
      />
      <span>Account Type</span>
    </div>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/417d6ff820f70b488971420ee523ad47c4478c11b07c56e0ab9b7dba290c15d4?apiKey=96e1cba5b127436faff0969b56b97d88&" alt="" css={{ width: "22px", aspectRatio: "1.1", objectFit: "contain" }} />
  </div>
);

const RegisterButton = () => (
  <button
    css={{
      background: "linear-gradient(100deg, #9181F4 -5.85%, #0936DB 109.55%)",
      boxShadow: "0px 8px 21px 0px rgba(0, 0, 0, 0.16)",
      borderRadius: "16px",
      color: "#FFF",
      textAlign: "center", 
      padding: "34px 59px",
      fontSize: "32px",
      fontWeight: 700,
      border: "none",
      marginTop: "39px",
      "@media (max-width: 991px)": {
        padding: "20px",
        whiteSpace: "initial",
      },
    }}
  >
    Register
  </button>
);

const inputFields = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd0e12d0c5f6204f6bb1168f6b7c022b0d20ed91580c3959d544f0e9cec3b4b1?apiKey=96e1cba5b127436faff0969b56b97d88&", label: "First Name" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd0e12d0c5f6204f6bb1168f6b7c022b0d20ed91580c3959d544f0e9cec3b4b1?apiKey=96e1cba5b127436faff0969b56b97d88&", label: "Last Name" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/71384e00c7c57f0c04b36ab1edfabf8c75446267f0ffc4f1ec79f814ed56097a?apiKey=96e1cba5b127436faff0969b56b97d88&", label: "email" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38f77736fef68fc8d28b3e2d98c68a38e4ba8d1da2e6f89f99b3211e96968b18?apiKey=96e1cba5b127436faff0969b56b97d88&", label: "Password" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38f77736fef68fc8d28b3e2d98c68a38e4ba8d1da2e6f89f99b3211e96968b18?apiKey=96e1cba5b127436faff0969b56b97d88&", label: "Confirm Password" },
];

function MyComponent() {
  return (
    <div
      css={{
        backgroundColor: "#FFF",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        paddingBottom: "75px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: 400,
      }}
    >
      <GradientHeader title="TireOptiTrack" subtitle="User Registration" />
      
      <main css={{ width: "886px", maxWidth: "100%", marginTop: "70px", "@media (max-width: 991px)": { marginTop: "40px" } }}>
        {inputFields.map((field) => (
          <InputField key={field.label} icon={field.icon} label={field.label} />
        ))}
        
        <AccountType />
      </main>

      <RegisterButton />
    </div>
  );
}

export default MyComponent;