let searchOutsDiv = document.getElementById("searchOuts");

async function search(n) {
  try {
    var res = await fetch(`https://swapi.dev/api/people/?search=${n}`);

    var data = await res.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

function apend(m) {
  m.forEach(({ name, birth_year, gender }) => {
    let div = document.createElement("div");
    let p = document.createElement("p");

    p.innerHTML = name;

    p.addEventListener("click", () => {
      //append();
    });

    let p2 = document.createElement("p");

    p2.innerHTML = birth_year;

    let p3 = document.createElement("p");

    p3.innerHTML = gender;

    div.append(p, p2, p3);
    searchOutsDiv.append(div);
  });
}

async function main() {
  let name = document.getElementById("query").value;
  console.log(name);
  if (name == "") {
    searchOutsDiv.innerHTML = "";
    return;
  }
  let chars = await search(name);
  console.log(chars);
  searchOutsDiv.innerHTML = "";
  if (chars == undefined) {
    return;
  }

  apend(chars);
}

//Debouncing for minimum API calls--------------------------------------------------------------------

var timerId;
function debounce(func, delay) {
  if (timerId) {
    console.log("-------------------------");
    clearTimeout(timerId);
  }

  timerId = setTimeout(func, delay);
}

//for Audio playback--------------------------------------------------------------------
var play;
function audioToggle() {
  var player = document.getElementById("player");

  if (play == true) {
    player.pause();
    player.load();
    play = false;
    var div = document.getElementById("audio");
    div.innerHTML = "";
    var Image = document.createElement("img");
    Image.src =
      "data:image/png;base64,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";
    div.append(Image);
    return;
  }

  player.play();
  play = true;
  var div = document.getElementById("audio");
  div.innerHTML = "";
  var Image = document.createElement("img");
  Image.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAAAD//wClpQCQkACrqwBnZwB7ewB+fgCYmADr6wDw8ADQ0AD09AD6+gD29gD7+wAjIwBYWADBwQC5uQDd3QAtLQB0dACGhgDk5ADV1QAoKACcnABUVAA7OwCurgBvbwAODgDNzQAICABjYwCKigAcHABCQgBdXQBLSwA5OQATEwC2tgBrawBFRQBOTgAsLAAYGAAzMwAgIABySrSvAAAKw0lEQVR4nO2d6VriMBSGWxGh7CAwiCAUERFHBe//4sZxhZ4l20kXn35/hZiXpjlLkpMgKFWqVKlSpUqVEtKhWn3Kug8+VYnCN7XOs+6HL/1ph1+6z7ovXjQIj3SbdW886AQw7PSy7o+4TgHDsJJ1h6T1mAAM46x7JKzrJGA4zLpLsloDwLCVdZ9EVYOAYZh1pyT1FwMMl1l3S06zNkr4mnW/xDRvoIDhKOuOSeklwgHDTdY9E9JqQgCGs6y7JqSYAvwthElf7UjVrPsmonMa8HcQVhjAcGzT4uL6cTC4Ga+ke2qpCw4wvDBv8Plr2mrU5XtrIdyVcSDsH32788dDjw016wgTJlyHYdYv8ohwZewJL5MtDF58dFxXd6SltyXcQPe2s/bSdy3tmipA4zRGHWvkKjPfj7H0toR4k+2M8j03akBjQmpUNO+8IPBCB5QvwrD11wsEJzRp4Ux4RjeV9ipBteuFsMq01Uw1v7xRWHpbwtWQaWwy98KC6kDF9Emdmbbcx/M9H+qkttbzyv3SboTBmEPspjXfxLqAFoTBPTs+rMIxYwHfUZQw6IHlj2PVxHGgmBldhPAtYuHcQf8RFbI8IU34FlczPr3vp7gwAbQmDO6YkeL3Kfb1LL0zYRA80UPVJ+JGFfLKEQZBhTQc/gbqizLklSQMZqTd9WU0lleGgI6EwR0ZgnrK38SmgK6EdDa225cASkon5JUmDBbEm996ECBKCG5ESIMw2BLv/kQ8J/7HAlCCMOgRb/9AoO1jjW0ARQiDZYw3LpufItbpUyEMdviU2pXc4kmt06dDGKxitHXBDUkjU0svTBgE+Lso1vzO2NKLd+EO74JUWkMjuW1LuB3XbrWyvSPUg5vs3ekCK0uvSVh5H/2tR50kGv6m3EgA2lh6LcKXn5F3rpELnaMZzK07oFFMb0K4Px53E41oAQ2+r5wBzWJ6E8JEQutR3Rd0NFlsFTjRrVlMb0A4S352qDbg2JQX7ZwAZy0nQI4Q5gw7ytB9ic02ThZprpu9NydE98Jdqzq0RZzHrkMctbd1ZTQID6ijq5z8sYgYCTKWr6OH+Xbb/68qI+3lCQvCB/wLg6UCEcvAHZK/3mPUaHXaXbc5RE80YY94w1VRHzZOL08/cm8ZJliJmQWodKgKEVld7548xGevREkxhGRIrUJE3p3jFfC96+xoJm4mJ/15he0HhjQM20f7yU0WjgSk7bVpfytAV/eOvpHmS6jq65RE5E3/E7I17PuPI688UPzT2MfE17p8ZIuEc9/e6ZNPHEQqj4p6aSI2YhzBOOo7xLj3CwSk9BnHhFlsmv4w088/cTtyfEjtFc+Jl5F1UffwIX593i6vay8dv5/YmMC+ivAhRjkmJNaXJtypsC10OT+PVfM76+WlF7vhuwDZrXox+Pinc2q1vOIgzegUT5VwS4RwMEarPBPiY4tL2iMB9CzXhPi7yCWZYFbqYzbV2tgrKP0cCnZ6KmIWQefg08OcE6LxIncuCA7TXc4JsaA/YiwGHKa1nBOiEyqz+wmG8oO8E2JxHzedgmHayT1hD8k/MAVgYAx1yDshZhWZpA2MIsa5J8SSTPTy6QhMTdf5J0TCVyahAX6Pq/wTBjFogSlxA2amRpB6qs2YEB66ZSoxQRd0y58s9yHjlS/4JtJHLPrgs4sCEMLnQjexA6nRSgEIX0AGhjH64IE/FoAQ5vpbdAUYMNU0i0AIvVM6JQWc72ERCHdgmNJnucFL21ilTqhcmIeKk23QS1HQtkxTJ7TY5AqcEnpP0Ab8v00RCIFDPSE/ugT/r18EQvBgWrTzDZbZbotACLeh0OYCBJSLIhBOQVBEF40AJr9WBMIe8MXo3DfYOLwuJiFt8kEGsl5MQjq6AITnJaG4SkItwt//Hv7+uZS2hyDtXQh7eADhU3L76I/Aj1EInwb6pfQCVDH90ttkG3RssQL/rxCxBVjvpuNDuJO6EPFhnGzjkvwoXAQoQoy/AqEF3QbYh9NaFoAQvIbMEmIecm3mhCAH2qKNBcitZpAvNSaE+xWYnDcw+JcFIIRb3OhjNHDdol4AQnjclz6YCDftj9NfPzQlhPNMh85DwWX/5/TXgE0JY9ACswYMtt42lrknRA70MBVoQabt/6SUc0Lk0P2U/PAG7BM+yz0hskebGaRw2r3IO+EOOdDJFEqEm8Qe8k6IHIXhyuyAlH47yDkhdhaE+T48/hPnnBB6KG/TP1OuHKKsc04YI1/nFsnhS/uab0LMn2wwVU+gy/bhojsVubCQNiF6iICrNw+npXO6IY/SJURPK9EpqLe3Fu627eeZED9SxxUNhttuGh/1MfTqjMtJj3CB1ldgDzzDY9IDCt2vtAjxgRXR2Qv0lojPJ5726TwdQqKGEVuSB84zjc+/pH2GVE04jfFvsjVARvD44ZfpTPscsLIe7i1RAWHI1n1EjOdXCZe0z3KrShxR5UlbbIEr5ADRd0Yu7fP4PCFRDzFUVdFF3tzvwbJ0rIpkKpaQLs/P32WF3FDU/ikWxVZ0lxdHSN/0QK/FvAuJI4/mJaQcgU9xhGR5fkX5FqS2Sfe4BIPiGjFhMYSk89FUlCdDHv2p+8NeICEthpAao01FsUfMA0rsZXiOW520KGlCuL/3Q1eKSphTJBUAh/V0vp31q9Xxf9Uwrdfr+vV57D7x0oRE7YMr1f26WCFO+zu9Xp3rtdGEeJQzUJWwxn4Yl/vNnWvu0YToRKMsSDfHhpVTgc++o3GhCZGKdF21n47V2nUs0uoYjDBzKfDYInVRYGxxsOV60ZVbNRSGMLnOFKvLCaMj2/16RKcEJOfTnDTc0YiV0VmBS1fpymVlnPW8jxpuapRXx/1YkXrXBvc7GREGi8+JI9K6OCbG/oHQ9QHq2zjtCN8G3qJ+dv1Xq04u+js36AVUI/WsC5m6ljH+EV5UfCHVvLXlFyPEJwON+tG62lq6qFKEOGCk/qK+4EaXNAmJzITsbTp26wEyhMRkLnbxwqesLL8E4TLG23avN5+UjeUXuHOSKqwYebh41eKaC/ertagrLbsClyIArcyvKnEmvKDyLX5uJJ0ax/yOhCvy8hBft+dtTC2/G+GGHDT+bpQ3vODRjbBGuhl81t9NhovIDoQv9MRmUanBQGZ7HewJ13SGSNrSJ2V0sY4t4S0zbfsGNFu+siMccZbX7xD9UOyZsMKlMH1OMt/a61t+C8IDm1HwZyZO9KBt+c0Jt6zJ9X9l9Vc3dNeumMKOuB5ycLP6u2CpNFwz04ZjprGGl/tjKWmmwk0Juf0+Q5375wSlFxCbEjIx6EDmIkCZztgT0rN0anPMkXQCYlNCKjGb9gj90EojFW5KSDTp31HDpREQPxs2iZ4enBjPyGI6KO/lMR1cmBXK6gG+S2n5jV+fONmCzrqbT6l2WBlf3Pd8+ptFvvIx+lIExOaLXyf7tOtu91PKiLf8Fst73zfftW+W4r21EntbsM0C5r52Ew+HzTq3Vz9dcZZftYerGOJS4cusOyejO9ryL7Pum5AOZOo2656JaUZZ/qw7Jidi+1s7634JCl8Eb6i/WByhll9i01l+hMX83DUxBRSS7XfZn5xHkec6f49ADiKlHHyKSiaS7I8J5FanT9Fxj3k+dfwuym9ayoV+ToX+LmN4rMr78lGbvUa06NqMLxaq4z2lSpUqVapUqVLW+gevDK7dy5E08gAAAABJRU5ErkJggg==";
  div.append(Image);
}
