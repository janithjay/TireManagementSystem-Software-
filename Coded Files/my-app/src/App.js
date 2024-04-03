import * as React from "react";
import MyComponent from './MyComponent';


export default function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}


function InputField({ src, alt, label }) {
  return (
    <div className="flex flex-col justify-center items-start px-16 py-6 mt-5 max-w-full text-3xl text-center rounded-2xl bg-violet-100 bg-opacity-80 text-zinc-900 w-[886px] max-md:px-5">
      <div className="flex gap-5 ml-28 max-w-full w-[420px] max-md:ml-2.5">
        <img src={src} alt={alt} className="shrink-0 w-10 aspect-[1.05]" />
        <div className="flex-auto self-start mt-3 ml-20">{label}</div>
      </div>
    </div>
  );
}

function MyComponent() {
  const inputFields = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/554d992e521931dca175947aa383f218a2e22f132be40ea19c4696bf7732de31?apiKey=96e1cba5b127436faff0969b56b97d88&", alt: "First Name Icon", label: "First Name" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/554d992e521931dca175947aa383f218a2e22f132be40ea19c4696bf7732de31?apiKey=96e1cba5b127436faff0969b56b97d88&", alt: "Last Name Icon", label: "Last Name" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7a9b466c1c91ce706d721023f5293af9d1fdbf85ac4dba0bcebdde60d62f955?apiKey=96e1cba5b127436faff0969b56b97d88&", alt: "Email Icon", label: "Email" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fac03c5c19a4b99f46937a5a71c97181189b97ae0fe6bbff04be41b8cc362172?apiKey=96e1cba5b127436faff0969b56b97d88&", alt: "Password Icon", label: "Password" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fac03c5c19a4b99f46937a5a71c97181189b97ae0fe6bbff04be41b8cc362172?apiKey=96e1cba5b127436faff0969b56b97d88&", alt: "Confirm Password Icon", label: "Confirm Password" },
  ];

  return (
    <div className="flex flex-col items-center pb-20 bg-white shadow-sm">
      <header className="flex gap-5 self-stretch px-16 py-11 w-full font-bold rounded-md max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <h1 className="flex-auto text-5xl text-yellow-400 max-md:text-4xl">TireOptiTrack</h1>
        <h2 className="flex-auto my-auto text-3xl text-right text-white">User Registration</h2>
      </header>
      <main>
        {inputFields.map((field, index) => (
          <InputField key={index} src={field.src} alt={field.alt} label={field.label} />
        ))}
        <div className="flex gap-5 justify-between py-6 pr-10 pl-20 mt-5 max-w-full text-3xl text-center rounded-2xl bg-violet-100 bg-opacity-80 text-zinc-900 w-[886px] max-md:flex-wrap max-md:px-5">
          <div className="flex gap-5 -ml-px">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/babc933142d4e70fd9a277a6e22fd1b4f3f15d6dd069708f505bbf84bbe2220c?apiKey=96e1cba5b127436faff0969b56b97d88&" alt="Account Type Checkbox" className="shrink-0 self-start ml-24 w-8 border-2 border-solid aspect-square border-neutral-700 stroke-[2px] stroke-neutral-700" />
            <div className="flex-auto ml-32">Account Type</div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/417d6ff820f70b488971420ee523ad47c4478c11b07c56e0ab9b7dba290c15d4?apiKey=96e1cba5b127436faff0969b56b97d88&" alt="Dropdown Arrow" className="shrink-0 my-auto aspect-[1.1] fill-black w-[22px]" />
        </div>
        <button className="justify-center px-14 py-9 mt-10 text-3xl font-bold text-center text-white whitespace-nowrap rounded-2xl shadow-lg max-md:px-5">
          Register
        </button>
      </main>
    </div>
  );
}