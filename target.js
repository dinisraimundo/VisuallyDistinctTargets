class Target {
  constructor(x, y, w, l, id) {
    this.x = x - 50;
    this.y = y - 60;
    this.width = w * 1.25;
    this.height = w / 1.25;
    this.label = l;
    this.id = id;
    this.click = false;
    this.firstLast = '';
    this.secondLast = '';
  }

  clicked(mouse_x, mouse_y) {
    if (
      mouse_x > this.x &&
      mouse_x < this.x + this.width &&
      mouse_y > this.y &&
      mouse_y < this.y + this.height
    ) {
      this.click = true;
      return true;
    }
    return false;
  }
  /*
  mapLetterToColor(letter) { //strong
    const letterColorMap = {
      'A': '#8B0000', 'B': '#D35400', 'C': '#B8860B', 'D': '#228B22',
      'E': '#00688B', 'F': '#9400D3', 'G': '#8B0000', 'H': '#D35400',
      'I': '#B8860B', 'J': '#228B22', 'K': '#00688B', 'L': '#9400D3',
      'M': '#8B0000', 'N': '#D35400', 'O': '#B8860B', 'P': '#228B22',
      'Q': '#00688B', 'R': '#9400D3', 'S': '#8B0000', 'T': '#D35400',
      'U': '#B8860B', 'V': '#228B22', 'W': '#00688B', 'X': '#9400D3', 
      'Y': '#8B0000', 'Z': '#D35400'
    };
    return letterColorMap[letter] || '#FFFFFF';
  }
  */
  
  /*
  mapLetterToColor(letter) { //strong
    const letterColorMap = {
      'A': '#C04040', 'B': '#E07B42', 'C': '#D1A64A', 'D': '#4CAF50',
      'E': '#3399AA', 'F': '#B580E0', 'G': '#C04040', 'H': '#E07B42',
      'I': '#D1A64A', 'J': '#4CAF50', 'K': '#3399AA', 'L': '#B580E0',
      'M': '#C04040', 'N': '#E07B42', 'O': '#D1A64A', 'P': '#4CAF50',
      'Q': '#3399AA', 'R': '#B580E0', 'S': '#C04040', 'T': '#E07B42',
      'U': '#D1A64A', 'V': '#4CAF50', 'W': '#3399AA', 'X': '#B580E0',
      'Y': '#C04040', 'Z': '#E07B42'
    };
    return letterColorMap[letter] || '#FFFFFF';
  }
  */
  
  
  ///*
  mapLetterToColor(letter) {
    const letterColorMap = {
      'A': '#FF0000', 'B': '#FF33D7', 'C': '#5E28D8', 'D': '#DAD025',
      'E': '#83C9F5', 'F': '#22E683', 'G': '#F73BEF', 'H': '#82E436',
      'I': '#F39C12', 'J': '#A83AD6', 'K': '#DA2020', 'L': '#195EDE',
      'M': '#F39C12', 'N': '#82E436', 'O': '#B430CF', 'P': '#22E683',
      'Q': '#83C9F5', 'R': '#1A99DA', 'S': '#D82828', 'T': '#FF33D7',
      'U': '#FF0000', 'V': '#FF33D7', 'W': '#5E28D8', 'X': '#1A99DA',
      'Y': '#83C9F5', 'Z': '#22E683'
    };
    return letterColorMap[letter] || '#FFFFFF';
  }
  //*/

  reset() {
    this.click = false;
  }

  draw(head_letter, colorChange) {
    // Cor do retângulo
    if (this.click === true) {
      let oldColor = this.mapLetterToColor(this.label.charAt(0))  //cor antiga '#65635F'
      
      let [r, g, b] = oldColor.match(/\w\w/g).map(c => parseInt(c, 16)); // Convert hex to RGB
      
      let percent = 70 //quanto % mais escuro
      percent = 1 - percent / 100; // Convert percentage to multiplier

      r = Math.floor(r * percent);
      g = Math.floor(g * percent);
      b = Math.floor(b * percent);

      fill(color(r,g,b))

    } else {
      fill(this.mapLetterToColor(this.label.charAt(0)));
    }

    rect(this.x, this.y, this.width, this.height);

    let firstLetter = this.label.charAt(0);
    let secondLetter = this.label.charAt(1) || '';
    let thirdLetter = this.label.charAt(2) || '';
    let restOfWord = this.label.substring(3);

    let bigFont = 35;
    let mediumFont = 30;
    let smallFont = 20;

    let startX = this.x + 5;
    
    
    let letter = this.label.charAt(0)
    print("last:", last, " now:", letter)
    if (last != letter){
      print("IN --- last:", last, " now:", letter)
      
      textFont("Arial", 40);
      fill(color(255,0,0));
      text(letter, this.x - 30, this.y);
      last = letter;
    }
    
    
    textStyle(BOLD);
    stroke(0);
    strokeWeight(3);
    fill('rgb(255,255,255)');
    
    if (firstLetter === "S") {
      textSize(bigFont);
      let firstLetterWidth = textWidth(firstLetter);
      textSize(mediumFont);
      let secondLetterWidth = textWidth(secondLetter);
      let thirdLetterWidth = textWidth(thirdLetter);
      textSize(smallFont);
      let restOfWordWidth = textWidth(restOfWord);

      let textTotalWidth = firstLetterWidth + secondLetterWidth + thirdLetterWidth + restOfWordWidth;

      textSize(bigFont);
      text(firstLetter + secondLetter + thirdLetter, startX, this.y + 30);

      if (this.label.includes(" ")) {
        let labelParts = this.label.split(" ");
        strokeWeight(0);
        textSize(smallFont);
        text(labelParts[0], startX, this.y + 50);
        text(labelParts[1], startX, this.y + 70);
      } else {
        strokeWeight(0);
        textSize(smallFont);
        text(this.label, startX, this.y + 60);
      }
    } else {
      let rest = this.label.substring(2);

      textSize(bigFont);
      if (this.firstLast !== firstLetter || this.secondLast !== secondLetter) {
        this.firstLast = firstLetter;
        this.secondLast = secondLetter;
      }

      text(firstLetter + secondLetter, startX, this.y + 30);

      if (this.label.includes(" ")) {
        let labelParts = this.label.split(" ");
        strokeWeight(0);
        textSize(smallFont);
        text(labelParts[0], startX, this.y + 50);
        text(labelParts[1], startX, this.y + 70);
      } else {
        strokeWeight(0);
        textSize(smallFont);
        text(this.label, startX, this.y + 60);
      }
    }
    
  }

  getFirstLetter() {
    return this.label.charAt(0);
  }

  getSecondLetter() {
    return this.label.charAt(1);
  }
}
