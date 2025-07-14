// import React, { useState } from "react";
// import { QrReader } from "react-qr-reader";

// import { useNavigate } from "react-router-dom";

// const QRScanner = () => {
//   const [scanResult, setScanResult] = useState("");
//   const navigate = useNavigate();

//   const handleScan = (result, error) => {
//     if (!!result && result?.text !== scanResult) {
//       const data = result.text;
//       setScanResult(data);

//       // Redirect based on QR content
//       if (data.includes("/xerox")) navigate("/xerox");
//       else if (data.includes("/darshan")) navigate("/darshan");
//       else if (data.includes("/table")) navigate("/table");
//       else if (data.includes("/fuel")) navigate("/fuel");
//       else alert("Unrecognized QR Code: " + data);
//     }

//     if (error) {
//       console.warn("Scan error: ", error.message);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4 text-center">
//       <h2 className="text-xl font-bold text-indigo-700 mb-2">📷 Scan QR Code</h2>
//       <QrReader
//         constraints={{ facingMode: "environment" }}
//         onResult={handleScan}
//          videoStyle={{
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//   }}
//   containerStyle={{ width: "100%", maxWidth: "400px", margin: "auto" }}
//       />
//       <p className="mt-4 text-sm text-gray-500">Scanned: {scanResult}</p>
//     </div>
//   );
// };

// export default QRScanner;
