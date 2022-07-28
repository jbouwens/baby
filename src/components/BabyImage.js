// import { useState, useEffect } from "react";

// // const useBabyImage = (query) => {
// //   const [babyImage, setBabyImage] = useState();

// // useEffect(() => {
// const fetchImage = (query) => {
//   const rsp = fetch(
//     `https://en.wikipedia.org/w/api.php?action=query&titles=${query}&prop=pageimages&format=json&pithumbsize=512`,
//     {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//       },
//     }
//   ).then((x) => {
//     const image = x.json;
//     const url = parseObjectForUrl(image);
//     return url;
//   });
// };
// // };

// // todo: try not to do any looping
// function parseObjectForUrl(obj) {
//   for (var key in obj) {
//     if (key === "source") {
//       // console.log("key: " + key + ", value: " + obj[key]);
//       return obj[key];
//     }

//     if (obj[key] instanceof Object) {
//       parseObjectForUrl(obj[key]);
//     }
//   }
// }

// export default fetchImage;

import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const BabyImage = ({ query }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = `https://en.wikipedia.org/w/api.php?action=query&titles=${query}&prop=pageimages&format=json&pithumbsize=512`;

  useEffect(() => {
    console.log("api call", api);
    fetch(api, {
      mode: "cors",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const flat = flatten(data);
        setData(flat["source"]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <Card.Img variant="top" src={data} />;
};

export default BabyImage;

// todo: try not to do any looping
const flatten = (ob) => {
  let result = {};
  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flatten(ob[i]);
      for (const j in temp) {
        result[j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};
