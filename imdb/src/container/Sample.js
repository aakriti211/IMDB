import React, { Component } from "react";
import Axios from "axios";

// let map = {},
//   count = 0;
class Sample extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello Ji</div>;
  }
}

export default Sample;

// async componentDidMount() {
//   for (var i = 1; i <= 13; i++) {
//     Axios.get(
//       `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=${i}`
//     ).then((response) => {
//       let teamsData = response.data;
//       teamsData.data.forEach((element) => {
//         if (map[element.team1]) {
//           map[element.team1]++;
//         } else {
//           map[element.team1] = 1;
//         }
//         if (map[element.team2]) {
//           map[element.team2]++;
//         } else {
//           map[element.team2] = 1;
//         }
//       });
//       count++;
//       if (count === 13) {
//       }
//     });
//   }
//   for (var i = 1; i <= 13; i++) {
//     const response = await Axios.get(
//       `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2015&page=${i}`
//     );
//     let teamsData = response.data;
//     teamsData.data.forEach((element) => {
//       if (map[element.team1]) {
//         map[element.team1]++;
//       } else {
//         map[element.team1] = 1;
//       }
//       if (map[element.team2]) {
//         map[element.team2]++;
//       } else {
//         map[element.team2] = 1;
//       }
//     });
//     console.log(map, "map");
//   }
// }
